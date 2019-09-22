const Globals = {

    "m3uArr": ['https://pastebin.com/raw/ZzGTySZE', 'http://ccld.io/atom.m3u'], // list of all m3u sources you are collecting from#
    "channelsToKeep": ['BBC', '"UK"', '"US"', 'group-title="USA"', '(English)', 'tvg-country="US"', 'tvg-country="Uk"', ], // this should be good search criteria i.e. 'BBC one London' or 'Cartoon Network'
    "channelsToLose": ['UKRAINE', 'Devon', 'group-title="OnDemandMovies"', 'group-title="Tutorials"', 'Czech', 'Turkish', 'Italian', 'French', 'Arabic', 'Hindi', '(IN)', 'Portuguese', 'Tamil', 'Korean', 'Spanish', 'Persian', 'Russian', '(CH)', '(LK)', '(HR)', '(AF)', '(BG)', 'Urdu', '(VN)', 'OnDemandShows'], // this should be good search criteria i.e. 'BBC one London' or 'Cartoon Network'
    "outputLocation": '/some/location/',
    "outputm3u": 'myiptv.m3u',



};


module.exports = Globals;