## Outline Design

### Channel Scraping

I will use cheerio to scrape websites which host .m3u files and scrape the links in to an array, then put all .m3u8 links into a single file.

This can then be filtered based on users preference from the `Globals.js`


### EPG data

I will use the node application to generate WebGrap+Plus's configuration data, allowing the EPG to be generated each time using the specific channels scraped and generated. the application will edit `WebGrab++.config.xml` file and the `.channels.xml`

It will match the generated m3u #EXTINF lines to the channel XML and insert it i.e.

`#EXTINF` containing "BBC2" will add:

`<channel site="tvguide.co.uk" site_id="89" update="i" xmltv_id="BBC2">BBC2</channel>`

to the `.channels.xml`

WebGrab+Plus will likely just run on a cron job every day