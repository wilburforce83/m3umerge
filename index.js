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

IPTV.checkm3u(__dirname + "/mym3u.m3u");

/*

function testLinks() {
  //where array is all plain m3u8 links
}

const func = () => {
  var array = [
    "https://content-ause4.uplynk.com/channel/2696c852412a4041ba3b771e0a5e3c74/h.m3u8?exp=1557726334&ct=c&cid=2696c852412a4041ba3b771e0a5e3c74&iph=dfedfaaeca06c9f40140cd2a0ac49a55790c044d07d90e043edad3ab32e2f603&rays=hjigfedcba&euid=5F8C9D89-CA39-4C23-9A6B-2A6A0A145CCB_013_1_001_live_04-06-99_1.1.1.15&cdn=ec&stgcfg=datg&pp2ip=0&delay=10800&ddp=1&expand=drmOff&v=3&sig=a07044f5b44c510bab5cd40a76b8b5839f0711064f090d2747280ebd7798e0dc&pbs=377d94b7fb794124b73c58474a01270a",
    "http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/abr_hdtv/ak/bbc_two_england.m3u8",
    "http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/abr_hdtv/ak/bbc_four.m3u8",
    "http://185.246.209.109:8080/SEC_NETWORK/index.m3u8"
  ];
  array.forEach(element => {
    m3u8stream(element).pipe(process.stdout);
    Stream.end();

    // push element to array
  });
};

testLinks();
func();

process.on("uncaughtException", function(err) {
  console.log("Caught exception: " + err, "BROKEN");
});



run()
setInterval(run, 1000 * 60 * 60 * 6) //run every 6 hours

function run() {
    processing = '';
    processed = [];
    UKTV = Global.m3uArr;

    // For each source page scrape HTML for all m3u download links and add to array UKTV
    Global.UKTVsite.forEach(url => {
        request(url, function (err, resp, body) {
            if (err) throw err;
            var $ = cheerio.load(body);

            $('a').each(function (i, element) {
                var a = $(this);
                var href = a.attr('href');
                // console.log('length', $('a').length - 2);
                // console.log('i =', i);
                if (href && href.indexOf(toFind) != -1) {
                    UKTV.push(href)

                }
                if (i === $('a').length - 1) {
                    scrapeURLS();
                }
            })
        })

    })
};






const filterChannels = (remove) => {
    return processed.filter(chan => chan.indexOf(remove) == -1);
}








function updateM3U() {

    const file = './mym3u.m3u'

    fs.writeFile(file, Global.outputm3u, (err) => {
        if (err) {
            console.log('error creating new m3u file');
        } else {
            console.log('updated your m3u');
            console.log('waiting for next run...')
        }
    });
}







function scrapeURLS() {

    console.log(UKTV)
    UKTV.forEach(URL => {
        request.get(URL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                processing = processing.concat(body);
                // Continue with your processing here.
                console.log('completed M3U scrape for', URL);
                if (URL === UKTV[UKTV.length - 1]) {
                    parseAndFilterAllChannels()
                }
            } else(
                console.log('URLscraping failed, M3U missing @', URL)
            )
        })
    })
};







function parseAndFilterAllChannels() {

    var channels = processing.split('#EXTINF');
    console.log('done', channels.length);
    Global.channelsToKeep.forEach(channel => {

        //iterate filer over each channel
        let thisfilter = channels.filter(s => ~s.indexOf(channel))
        // console.log(thisfilter)
        processed.push(...thisfilter);
        if (channel === Global.channelsToKeep[Global.channelsToKeep.length - 1]) {
            // console.log(processed);
            console.log('first pass channel count', processed.length);
            removeUnwantedChannels();
        }
    })
};




function removeUnwantedChannels() {

    Global.channelsToLose.forEach(remove => {

        _.remove(processed, function (n) {
            return n.includes(remove);
        });

        if (remove === Global.channelsToLose[Global.channelsToLose.length - 1]) {
            console.log(BBC)
            let unique = [...new Set(processed)];
            unique = BBC.concat(unique);

            let channelNo = unique.length;
            Global.outputm3u = '#EXTM3U\n\n#EXTINF'.concat(unique.join('#EXTINF'));
            console.log(Global.outputm3u);
            console.log('Number of Channels;', channelNo);
            updateM3U();
        }
    })
};

*/
