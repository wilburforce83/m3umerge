const Globals = {

    "UKTVsite": ['https://www.dailym3uiptv.com/p/get-uk-iptv-links.html'], // website source for scraping M3U links,can have manyas an array
    "m3uArr": ['https://pastebin.com/raw/ZzGTySZE', 'http://ccld.io/atom.m3u'], // list of all m3u sources you are collecting from#
    "channelsToKeep": [
        'BBC',
        'UK |',
        '"UK"',
        '"US"',
        'group-title="USA"',
        '(English)',
        'tvg-country="US"',
        'tvg-country="Uk"',
    ], // this should be good search criteria i.e. 'BBC one London' or 'Cartoon Network'
    "channelsToLose": [
        '*',
        'UKRAINE',
        'World',
        '(Public-News)',
        'Radio',
        '"INDIA"',
        '"IRAN"',
        'SKY CINEMA',
        'Devon',
        'group-title="OnDemandMovies"',
        'group-title="Tutorials"',
        'Czech',
        'Turkish',
        'Italian',
        'French',
        'Arabic',
        'ARABIC',
        'Hindi',
        '(IN)',
        'Portuguese',
        'Tamil',
        'Korean',
        'Spanish',
        'Persian',
        'Russian',
        '(CH)',
        '(LK)',
        '(HR)',
        '(AF)',
        '(BG)',
        'Urdu',
        '(VN)',
        'OnDemandShows'
    ], // this should be good search criteria i.e. 'BBC one London' or 'Cartoon Network'
    "outputLocation": '/some/location/',
    "outputm3u": 'myiptv.m3u',



};


module.exports = Globals;