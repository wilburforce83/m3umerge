//Nothing yet

var Global = require('./lib/globals')
var request = require('request');
var processing = '';
var processed = [];
var processed2 = [];




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

                            let thisfilter2 = filterChannels(remove);


                            // console.log(thisfilter2)
                            processed2.push(...thisfilter2);

                            if (remove === Global.channelsToLose[Global.channelsToLose.length - 1]) {

                                let unique = [...new Set(processed2)];

                                let channelNo = unique.length;
                                Global.outputm3u = '#EXTM3U\n\n#EXTINF'.concat(unique.join('#EXTINF'));
                                console.log(Global.outputm3u);
                                console.log('Number of Channels;', channelNo);
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


const filterChannels = (remove) => {
    return processed.filter(chan => chan.indexOf(remove) == -1);
}