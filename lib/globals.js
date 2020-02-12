var Globals = {
  UKTVsite: [], // website source for scraping M3U links,can have manyas an array
  m3uArr: [
    "https://sites.google.com/site/fordailym3u/dl/uk-m3u-list-1.m3u",
    "https://raw.githubusercontent.com/notanewbie/LegalStream/master/packages/entertainment/general.m3u8",
    "https://sites.google.com/site/dailym3uiptv/dl/US-playList-1.m3u",
    "https://sites.google.com/site/fordailym3u/dl/canada-list-1.m3u",
    "https://sites.google.com/site/fordailym3u/dl/sport-list-1.m3u"
  ], // list of all m3u sources you are collecting from#

  channelsToKeep: [" "], // single space will keep all on first pass

  channelsToLose: [
    "UKRAINE",
    "TURKEY",
    "SWEDEN",
    '"INDIA"',
    '"IRAN"',
    "SKY CINEMA",
    "Devon",
    'group-title="OnDemandMovies"',
    'group-title="Tutorials"',
    "Czech",
    "Turkish",
    "Italian",
    "French",
    "Arabic",
    "ARABIC",
    "Hindi",
    "(IN)",
    "Portuguese",
    "Tamil",
    "Korean",
    "Spanish",
    "Persian",
    "Russian",
    "(CH)",
    "(LK)",
    "(HR)",
    "(AF)",
    "(BG)",
    "Urdu",
    "(VN)",
    "OnDemandShows"
  ], // this should be good search criteria i.e. 'BBC one London' or 'Cartoon Network'
  outputLocation: "/some/location/",
  outputm3u: "mym3u.m3u"
};

module.exports = Globals;
