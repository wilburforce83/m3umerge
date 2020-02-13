var Global = require("./lib/globals");
var BBC = require("./lib/BBC");
var _ = require("lodash");
var request = require("request");
var fs = require("fs");
var processing = "";
var processed = [];
var UKTV = [];
var cheerio = require("cheerio");
var toFind = ".m3u";
const m3u8stream = require("m3u8stream");
const IPTV = require("./iptv-checker/index.js");
const shell = require("shelljs");
var colors = require("colors");

process.on("uncaughtException", function(err) {
  console.log("Caught exception: " + err, "BROKEN");
});

var collectChannelName = function(str) {
  str = str.toString()
 
  let matched = str.replace(/,(.*?),/g, ",")
  //remove links
  .replace(/\n(.*?)m3u8/g, "")
  //remove link tokens
  .replace(/\?token=(.*?)=/g, "");
  
  let result = matched.toString();
 //console.log(result);
  return result;
};

// Regex function to clean up m3u's for use with web grab ++

var removeUselessWords = function(txt) {
  var uselessWordsArray = [
    "UK",
    "USA",
    "IE",
    "IT",
    "CA",
    "ES",
    "SUI",
    "PT",
    "EXTM3U",
    'tvg-id=""'
  ];

  var expStr = uselessWordsArray.join("|");
  txt = txt
    .replace(new RegExp("\\b(" + expStr + ")\\b", "gi"), " ")

    .replace(/1(.*?),/g, "1,")
    .replace(/0(.*?),/g, "-1,")
    .replace(/\(.*?\)/g, "")
    .replace(/# (.*?)\n/g, "");

  //console.log(txt);
  return txt;
};

//IPTV.checkm3u(__dirname + "/mym3u.m3u");

run();
setInterval(run, 1000 * 60 * 60 * 6); //run every 6 hours

function run() {
  processing = "";
  processed = [];
  UKTV = Global.m3uArr;

  // For each source page scrape HTML for all m3u download links and add to array UKTV
  if (Global.UKTVsite.length >= 1) {
    console.log("Found IPTV site links".green);
    Global.UKTVsite.forEach(url => {
      request(url, function(err, resp, body) {
        if (err) {
          console.log("function run() -> UKTVsite.forEach :", err);
          return;
        }
        var $ = cheerio.load(body);

        $("a").each(function(i, element) {
          var a = $(this);
          var href = a.attr("href");
          console.log("length", $("a").length - 2);
          console.log("i =", i);
          if (href && href.indexOf(toFind) != -1) {
            UKTV.push(href);
          }
          if (url === UKTVsite.slice(-1)) {
            scrapeURLS();
          }
          if (UKTVsite.length == 1) {
            scrapeURLS();
          }
        });
      });
    });
  } else {
    console.log(
      "No Website Scraping URL's found. Ignoring web scraping...".yellow
    );
    scrapeURLS();
  }
}

const filterChannels = remove => {
  return processed.filter(chan => chan.indexOf(remove) == -1);
};

function updateM3U() {
  const file = "./mym3u.m3u";

  fs.writeFile(file, Global.outputm3u, err => {
    if (err) {
      console.log("error creating new m3u file".yellow);
    } else {
      console.log("updated your m3u".green);
      console.log(
        "Running m3u8 link testing. Offline links will be removed.".blue
      );
      setTimeout(function() {
        IPTV.checkm3u(__dirname + "/mym3u.m3u");
        console.log("Completed m3u8 testing!");
        console.log("waiting for next run...".blue);
      }, 15000);
    }
  });
}

function scrapeURLS() {
  if (Global.m3uArr.length >= 1) {
    console.log(UKTV);
    console.log("parsing websites for m3u's");
    UKTV.forEach(URL => {
      request.get(URL, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          processing = processing.concat(body);
          // Continue with your processing here.
          console.log("completed M3U scrape for", URL);
          if (URL === UKTV[UKTV.length - 1]) {
            setTimeout(function() {
              parseAndFilterAllChannels();
            }, 15000);
          }
        } else {
          console.log("URLscraping failed, M3U missing @", URL);
          if (URL === UKTV[UKTV.length - 1]) {
            setTimeout(function() {
              parseAndFilterAllChannels();
            }, 15000);
          }
        }
      });
    });
  } else {
    console.log("No m3u links found in Array, ignoring...".yellow);
    setTimeout(function() {
      parseAndFilterAllChannels();
    }, 5000);
  }
}

function parseAndFilterAllChannels() {
  processing = processing.replace(/[|]/g, ""); // remove pipes from m3u buffer
  processing = removeUselessWords(processing);
  var channels = processing.split("#EXTINF:-1,");
  console.log("Raw Channel Number : ", channels.length);
  Global.channelsToKeep.forEach(channel => {
    //iterate filer over each channel
    let thisfilter = channels.filter(s => ~s.indexOf(channel));
    //console.log(thisfilter);
    processed.push(...thisfilter);
    if (channel === Global.channelsToKeep[Global.channelsToKeep.length - 1]) {
      // console.log(processed);
      console.log("First pass channel count", processed.length);
      removeUnwantedChannels();
    }
  });
}

function removeUnwantedChannels() {
  Global.channelsToLose.forEach(remove => {
    _.remove(processed, function(n) {
      return n.includes(remove);
    });

    if (remove === Global.channelsToLose[Global.channelsToLose.length - 1]) {
      //console.log(BBC);
      let unique = [...new Set(processed)];
     // collectChannelName(unique);
      unique = BBC.concat(unique);


      let channelNo = unique.length;
      Global.outputm3u = "#EXTM3U\n\n#EXT-X-VERSION:2\n\n#EXTINF:-1,".concat(
        unique.join("#EXTINF:-1,")
      );
      // console.log(Global.outputm3u);
      console.log("Number of Channels;", channelNo);
      updateM3U();
    }
  });
}

