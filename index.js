//Nothing yet

var Global = require('./lib/globals')
var _ = require('lodash');
var request = require('request');
var fs = require('fs');
var processing = '';
var processed = [];
var processed2 = [];
var cheerio = require('cheerio');
var toFind = ".m3u"



run()
setInterval(run, 1000 * 60 * 60 * 6) //run every 6 hours

function run() {

    Global.UKTVsite.forEach(url => {
        request(url, function (err, resp, body) {
            if (err) throw err;
            var $ = cheerio.load(body);
            let UKTV = [];
            $('a').each(function (i, element) {
                var a = $(this);
                //console.log(a.attr('href'));

                var href = a.attr('href');
                if (href && href.indexOf(toFind) != -1) {
                    UKTV.push(href)
                }
            })
            if (url === Global.UKTVsite[Global.UKTVsite.length - 1]) {
                let baseChannels = UKTV.reverse().pop();
                console.log(baseChannels);
                Global.m3uArr.push(baseChannels);
                console.log(Global.m3uArr)


                Global.m3uArr.forEach(URL => {
                    request.get(URL, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            processing = processing.concat(body);
                            // Continue with your processing here.
                            console.log('completed M3U scrape for', URL);
                            if (URL === Global.m3uArr[Global.m3uArr.length - 1]) {

                                var channels = processing.split('#EXTINF');
                                console.log('done', channels.length);
                                Global.channelsToKeep.forEach(channel => {

                                    //iterate filer over each channel
                                    let thisfilter = channels.filter(s => ~s.indexOf(channel))
                                    // console.log(thisfilter)
                                    processed.push(...thisfilter);
                                    if (channel === Global.channelsToKeep[Global.channelsToKeep.length - 1]) {
                                        console.log('first pass channel count', processed.length);
                                        Global.channelsToLose.forEach(remove => {

                                            _.remove(processed, function (n) {
                                                return n.includes(remove);
                                            });

                                            if (remove === Global.channelsToLose[Global.channelsToLose.length - 1]) {

                                                let unique = [...new Set(processed)];

                                                let channelNo = unique.length;
                                                Global.outputm3u = '#EXTM3U\n\n#EXTINF'.concat(unique.join('#EXTINF'));
                                                // console.log(Global.outputm3u);
                                                console.log('Number of Channels;', channelNo);
                                                updateM3U();
                                            }
                                        })
                                    }
                                })
                            }
                        } else(
                            console.log('URLscraping failed, M3U missing @', URL)
                        )
                    })
                })
            }
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