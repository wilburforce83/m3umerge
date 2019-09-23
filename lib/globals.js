const Globals = {

    "UKTVsite": ['https://www.dailym3uiptv.com/p/get-uk-iptv-links.html', 'https://www.dailym3uiptv.com/p/get-sports-iptv-links.html'], // website source for scraping M3U links,can have manyas an array
    "m3uArr": ['https://pastebin.com/raw/ZzGTySZE', 'http://ccld.io/atom.m3u'], // list of all m3u sources you are collecting from#
    "channelsToKeep": [
        'UK | EDEN HD',
        'group-title="UK"',
        'group-title="USA"',
        'group-title="24/7 PLUTO TV"',
        'group-title="24/7 CHANNELS"',
        'group-title="24/7 ADULT SWIM GEO"',
        'Nasa TV (Public-Plex-Share) (US) (English)',
        'Science Channel (Public-Entertainment)',
        'group-title="Public-Sports"',
        '(Public-Radio)',

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