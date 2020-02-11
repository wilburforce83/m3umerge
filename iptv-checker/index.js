module.exports.checkm3u = m3uFile => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

  const helper = require("./helper");
  const fs = require("fs");
  const ProgressBar = require("progress");
  const dateFormat = require("dateformat");
  const ffmpeg = require("fluent-ffmpeg");
  var colors = require("colors");

  const onlineFile = __dirname + `/final.m3u`;
  const offlineFile = __dirname + `/offline.m3u`;
  const duplicatesFile = __dirname + `/duplicates.m3u`;
  var results;
  const config = {
    timeout: parseInt(60000)
  };

  let files = [onlineFile, offlineFile, duplicatesFile];

  files.forEach(element => {
    fs.writeFile(element, "", function() {
      console.log(element, " Cleared for New Links".magenta);
    });
  });
  fs.writeFileSync(onlineFile, "#EXTM3U\n");
  fs.writeFileSync(offlineFile, "#EXTM3U\n");
  fs.writeFileSync(duplicatesFile, "#EXTM3U\n");
  var playlist;
  var bar;
  var stats = {
    total: 0,
    online: 0,
    offline: 0,
    duplicates: 0
  };

  init();

  async function init() {
    console.time("Execution time");

    playlist = helper.parsePlaylist(m3uFile);

    bar = new ProgressBar(":bar", { total: stats.total });

    for (let item of playlist.items) {
      if (!item.url) continue;

      if (helper.checkCache(item.url)) {
        helper.writeToFile(duplicatesFile, item);

        stats.duplicates++;
        stats.total++;
        console.log("Duplicate: ".yellow + currentUrl);
        console.log(
          "Progress: Online:",
          stats.online + "".green,
          " | Offline: ",
          stats.offline + "".red,
          " | Duplicates: ",
          stats.duplicates,
          " | Total channels: " + "".yellow,
          playlist.items.length
        );

        continue;
      }

      helper.addToCache(item.url);

      await check(item, item.url);
    }

    console.timeEnd("Execution time");

    console.log(
      `Total: ${stats.total}. Online: ${stats.online}. Offline: ${stats.offline}. Duplicates: ${stats.duplicates}.`
    );

    console.log("completed testing moving on to EPG Data...");
    return;
  }

  async function check(parent, currentUrl) {
    if (currentUrl) {
      return new Promise(async (resolve, reject) => {
        const timeout = setTimeout(() => {
          const message = `Timeout exceeded`;

          helper.writeToFile(offlineFile, parent, message);

          stats.offline++;
          stats.total++;
          console.log("Online: ".red + currentUrl);
          console.log(
            "Progress: Online:",
            stats.online + "".green,
            " | Offline: ",
            stats.offline + "".red,
            " | Duplicates: ",
            stats.duplicates,
            " | Total channels: " + "".yellow,
            playlist.items.length
          );

          resolve();
        }, config.timeout);

        ffmpeg(currentUrl, {
          timeout: parseInt(config.timeout / 1000)
        }).ffprobe(async function(err, metadata) {
          if (err) {
            const message = helper.parseMessage(err, currentUrl);

            helper.writeToFile(offlineFile, parent, message);

            if (config.debug) {
              console.log(message);
            }

            stats.offline++;
            stats.total++;
            console.log("Offline: ".red + currentUrl);
            console.log(
              "Progress: Online:",
              stats.online + "".green,
              " | Offline: ",
              stats.offline + "".red,
              " | Duplicates: ",
              stats.duplicates,
              " | Total channels: " + "".yellow,
              playlist.items.length
            );
          } else {
            helper.writeToFile(onlineFile, parent);

            stats.online++;
            stats.total++;
            console.log("Online: ".green + currentUrl);
            console.log(
              "Progress: Online:",
              stats.online + "".green,
              " | Offline: ",
              stats.offline + "".red,
              " | Duplicates: ",
              stats.duplicates,
              " | Total channels: " + "".yellow,
              playlist.items.length
            );
          }

          clearTimeout(timeout);

          resolve();
        });
      });
    }
  }
};
