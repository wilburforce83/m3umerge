# M3U Merge

A nodejs daemon to be run in conjunction with webgrab++ for creating and keeping bespoke m3u and epg data up to date. It has two methods of scraping:

1. Scraping m3u8 info from websites using [cheerio](https://www.npmjs.com/package/cheerio). This is for automatically getting useful m3u8's from junk sites such as dailym3uiptv.com etc.

2. Scraping an Array of known .m3u files for channels that you want to filter such as Ccloud's Atom.m3u.

## Channel Scraping

M3U Merge

This can then be filtered based on users preference from the `Globals.js`

### Embedded m3u data in websites (dynamic links, generally wordpress blog pages)

Websites with HTML based links which change daily in order to force you to manually download daily such as dailym3u etc can be placed in the `global.js` file under `"UKTVsite"` :

    "UKTVsite": ['https://www.dailym3uiptv.com/p/get-uk-iptv-links.html', 'https://www.dailym3uiptv.com/p/get-sports-iptv-links.html'], // website source for scraping M3U links,can have as many as you want as an array

### Permalink m3u's (e.g. Ccloud's Atom.m3u)

Simply add the .m3u links into the array in `globals.js` under `"m3uArr"`:

    "m3uArr": ['http://ccld.io/atom.m3u', 'https://another-magic-link.here'], // list of all m3u sources you are collecting from

## EPG data

This is completed using [Webgrab+Plus](http://webgrabplus.com/download) which you will need to install in order to run m3umerge's epg functions.

m3umerge scrape webgrab++'s `siteini.pack` folders for matching channel data and inserts the data into `WebGrab++.config.xml`

m3umerge will then run `.wg++/run.sh` directly from node updating the epg.xml file.
