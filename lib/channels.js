//  correct #EXTINF data for all channels to have EPG

const channels = {


    "Freeview": ``,


    "Sky": ``,


    "Freesat": ``,


    "Virgin": ``,


    "BT TV": ``,


    "YouView": ``,


    "Sky HD": ``,


    "TalkTalk": ``,


    "BBC One": `#EXTINF:-1 tvg-id="BBC One South East" tvg-name="BBC One South East" tvg-logo="https://s4.postimg.org/k5xl5dmf1/bbc_one.png" group-title="BBC",BBC One South East
    http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/hls_tablet/ak/bbc_one_south_east.m3u8`,


    "BBC One HD": `:-1 tvg-id="BBC One HD" tvg-name="BBC One HD" tvg-logo="https://s4.postimg.org/k5xl5dmf1/bbc_one.png" group-title="BBC",BBC One HD
    http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/abr_hdtv/ak/bbc_one_hd.m3u8`,


    "BBC Two HD": `:-1 tvg-id="BBC Two HD" tvg-name="BBC Two HD" tvg-logo="https://s3.postimg.org/3oa6ilk4j/BBC_Two_HD_svg.png" group-title="BBC",BBC Two HD
    http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/abr_hdtv/ak/bbc_two_england.m3u8`,


    "ITV": ``,


    "ITV +1": ``,


    "STV": ``,


    "STV + 1": ``,


    "Channel 4": ``,


    "Channel 5": ``,


    "Sky 1": ``,


    "BBC Four": `:-1 tvg-id="BBC Four HD" tvg-name="BBC Four HD" tvg-logo="https://s3.postimg.org/odxup7toz/BBC_Four_HD_Logo_svg.png" group-title="BBC",BBC Four HD
    http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/abr_hdtv/ak/bbc_four.m3u8`,


    "ITV2": ``,


    "ITV3": ``,


    "ITV4": ``,


    "ITVBe": ``,


    "ITV Encore": ``,


    "E4": ``,


    "More4": ``,


    "4seven": ``,


    "Film4": ``,


    "Sky Living": ``,


    "Sky Atlantic": ``,


    "Dave": ``,


    "Drama": ``,


    "W": ``,


    "GOLD": ``,


    "5STAR": ``,


    "5USA": ``,


    "Pick": ``,


    "Really": ``,


    "Yesterday": ``,


    "Comedy Central": ``,


    "Universal Channel": ``,


    "Syfy": ``,


    "Blaze": ``,


    "Talking Pictures": ``,


    "Movies4Men": ``,


    "Sony Movie Channel": ``,


    "True Entertainment": ``,


    "CBS Action": ``,


    "CBS Drama": ``,


    "Sky Arts": ``,


    "Sky 2": ``,


    "FOX": ``,


    "Spike": ``,


    "Challenge": ``,


    "Quest": ``,


    "Comedy Central Extra": ``,


    "AMC from BT": ``,


    "Sky Sports 1": ``,


    "Sky Sports 2 ": ``,


    "Sky Sports 3": ``,


    "Sky Sports 4": ``,


    "Alibi": ``,


    "Sky Sports 5": ``,


    "BT Sport 1": ``,


    "BT Sport 2": ``,


    "CBeebies": `#EXTINF:-1 tvg-id="CBeebies HD" tvg-name="CBeebies HD" tvg-logo="https://s3.postimg.org/718r6aq9v/CBeebies_svg.png" group-title="BBC",CBeebies HD
    http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/abr_hdtv/ak/cbeebies.m3u8`,


    "CBBC HD": `:-1 tvg-id="CBBC HD" tvg-name="CBBC HD" tvg-logo="https://s3.postimg.org/5rli5k0kj/CBBC_HD_svg.png" group-title="BBC",CBBC HD
    http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/abr_hdtv/ak/cbbc.m3u8`,


    "CITV": ``,


    "Disney Channel": ``,


    "Discovery Channel": ``,


    "Eden": ``,


    "History": ``,


    "National Geographic Channel": ``,


    "Home": ``,


    "Food Network": ``,


    "BBC News Channel": ``,


    "Sky News": ``,


    "Eurosport 2": ``,


    "Sony Channel": ``,


    "Eurosport 1": ``,


    "3e": ``,


    "4Music": ``,


    "4seven HD": ``,


    "5STAR +1": ``,


    "5USA +1": ``,


    "AIT International": ``,


    "Al Jazeera English": ``,


    "Al Jazeera English HD": ``,


    "Alibi +1": ``,


    "Alibi HD": ``,


    "Amazon": ``,


    "AMC HD from BT": ``,


    "Animal Planet": ``,


    "Animal Planet +1": ``,


    "Animal Planet HD": ``,


    "Arirang HD": ``,


    "ARY News": ``,


    "At The Races": ``,


    "Baby TV": ``,


    "BBC Alba": ``,


    "BBC Four HD": ``,


    "BBC News Channel HD": `:-1 tvg-id="BBC News HD" tvg-name="BBC News HD" tvg-logo="https://s3.postimg.org/hxublo6hv/bbc_news_logo.png" group-title="BBC",BBC News HD
    http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/abr_hdtv/ak/bbc_news24.m3u8`,



    "BBC Parliament": `:-1 tvg-id="BBC Parliament" tvg-name="BBC Parliament" tvg-logo="https://s3.postimg.org/r7up5r603/BBC_Parliament_Logo_svg.png" group-title="BBC",BBC Parliament
    http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/hls_tablet/ak/bbc_parliament.m3u8`,


    "BBC Red Button 1": ``,


    "BBC Three": ``,


    "BBC Two HD": ``,


    "be3": ``,


    "be3 HD": ``,


    "BET:BlackEntTV": ``,


    "BET:BlackEntTV +1": ``,


    "Bike": ``,


    "Blaze Freeview +1": ``,


    "Bloomberg": ``,


    "Boomerang": ``,


    "Boomerang +1": ``,


    "Boomerang HD": ``,


    "Box Hits": ``,


    "Box Upfront": ``,


    "BoxNation": ``,


    "BoxNation Live HD": ``,


    "BT Sport 1HD": ``,


    "BT Sport 2 HD": ``,


    "BT Sport 3": ``,


    "BT Sport 3 HD": ``,


    "BT Sport//ESPN": ``,


    "Cartoon Network": ``,


    "Cartoonito": ``,


    "CBBC HD": ``,


    "CBeebies HD": ``,


    "CBS Action + 1": ``,


    "CBS Reality": ``,


    "CBS Reality +1": ``,


    "Challenge +1": ``,


    "Channel 4 +1": ``,


    "Channel 4 +1 HD": ``,


    "Channel 4 HD": ``,


    "Channel 5 +1": ``,


    "Channel 5 HD": ``,


    "Channels 24": ``,


    "Chart Show HIts": ``,


    "Chart Show TV": ``,


    "Chelsea TV": ``,


    "Chelsea TV HD": ``,


    "CI": ``,


    "CI +1": ``,


    "CI HD": ``,


    "CITV Freeview": ``,


    "CNBC UK": ``,


    "CNN": ``,


    "CNN HD": ``,


    "Colors": ``,


    "Comedy Central +1": ``,


    "Comedy Central Extra +1": ``,


    "Community Channel": ``,


    "Community Channel Freeview": ``,


    "Create and Craft": ``,


    "Create and Craft": ``,


    "Dave HD": ``,


    "Dave ja vu": ``,


    "Discovery Channel +1": ``,


    "Discovery Channel HD": ``,


    "Discovery History": ``,


    "Discovery History +1": ``,


    "Discovery Home & Health": ``,


    "Discovery Home & Health +1": ``,


    "Discovery Science": ``,


    "Discovery Science +1": ``,


    "Discovery Shed": ``,


    "Discovery Turbo": ``,


    "Disney Channel +1": ``,


    "Disney Channel HD": ``,


    "Disney Junior": ``,


    "Disney Junior +": ``,


    "Disney Junior HD": ``,


    "Disney XD": ``,


    "Disney XD +1": ``,


    "Disney XD HD": ``,


    "DMAX": ``,


    "DMAX +1": ``,


    "E! Entertainment": ``,


    "E! Entertainment +1": ``,


    "E! Entertainment HD": ``,


    "E4 +1": ``,


    "E4 HD": ``,


    "Eden +1": ``,


    "Eden HD": ``,


    "eir Sport 1": ``,


    "eir Sport 2": ``,


    "eir Sport 2 HD": ``,


    "Euronews": ``,


    "Eurosport 1 HD": ``,


    "Eurosport 2 HD": ``,


    "Film4 +1": ``,


    "Film4 HD": ``,


    "Flava": ``,


    "Food Network +1": ``,


    "Forces TV": ``,


    "FOX +1": ``,


    "FOX HD": ``,


    "FRANCE 24 English": ``,


    "GINX eSports TV": ``,


    "God TV": ``,


    "GOLD +1": ``,


    "Good Food": ``,


    "Good Food +1": ``,


    "Good Food HD": ``,


    "H2": ``,


    "H2 HD": ``,


    "History +1": ``,


    "History HD": ``,


    "Home +1": ``,


    "Home and Leisure TV": ``,


    "Horror Channel": ``,


    "Horror Channel +1": ``,


    "Horse & Country TV": ``,


    "Ideal World": ``,


    "Ideal World Freeview": ``,


    "Investigation Discovery": ``,


    "Investigation Discovery +1": ``,


    "Irish TV": ``,


    "ITV Box Office HD": ``,


    "ITV Encore +1": ``,


    "ITV Encore HD": ``,


    "ITV2+1": ``,


    "ITV2HD": ``,


    "ITV3+1": ``,


    "ITV3+1 Freeview": ``,


    "ITV3HD": ``,


    "ITV4+1": ``,


    "ITV4HD": ``,


    "ITVBe Freeview +1": ``,


    "ITVBe HD": ``,


    "ITVBe+1": ``,


    "Keep It Country": ``,


    "Kerrang! TV": ``,


    "Kiss TV": ``,


    "Kix": ``,


    "Kix +1": ``,


    "LFC TV": ``,


    "Lifetime": ``,


    "Lifetime +1": ``,


    "Lifetime HD": ``,


    "London Live": ``,


    "Magic": ``,


    "More4 +1": ``,


    "More4 HD": ``,


    "Motorsport.tv": ``,


    "Movies 24": ``,


    "Movies 24+": ``,


    "Movies4Men +1": ``,


    "MTV": ``,


    "MTV +1": ``,


    "MTV Base": ``,


    "MTV Classic": ``,


    "MTV Dance": ``,


    "MTV HD": ``,


    "MTV Hits": ``,


    "MTV Live HD": ``,


    "MTV Music": ``,


    "MTV Rocks": ``,


    "MUTV": ``,


    "MUTV HD": ``,


    "My Channel TV": ``,


    "My5": ``,


    "Nat Geo Wild": ``,


    "Nat Geo Wild HD": ``,


    "National Geographic Channel +1": ``,


    "National Geographic Channel HD": ``,


    "NDTV 24x7": ``,


    "Netflix": ``,


    "NHK World": ``,


    "NHK World HD": ``,


    "Nick Jr HD": ``,


    "Nick Jr Too": ``,


    "Nick Jr.": ``,


    "Nick Jr. +1": ``,


    "Nickelodeon": ``,


    "Nickelodeon +1": ``,


    "Nickelodeon HD": ``,


    "Nicktoons": ``,


    "Nollywood Movies": ``,


    "PBS America": ``,


    "Phoenix CNE Channel": ``,


    "Pick +1": ``,


    "Pop": ``,


    "Pop Freeview +1": ``,


    "Premier Sports": ``,


    "Propeller TV": ``,


    "Quest +1": ``,


    "Quest Red": ``,


    "Quest Red +1": ``,


    "QVC": ``,


    "RT HD": ``,


    "Sky 1 + 1": ``,


    "Sky 1 HD": ``,


    "Sky Arts 2 HD": ``,


    "Sky Arts HD": ``,


    "Sky Atlantic +1": ``,


    "Sky Atlantic HD": ``,


    "Sky Living +1": ``,


    "Sky Living HD": ``,


    "Sky News HD": ``,


    "Sky Sports 1 HD": ``,


    "Sky Sports 2 HD": ``,


    "Sky Sports 3 HD": ``,


    "Sky Sports 4 HD": ``,


    "Sky Sports 5 HD": ``,


    "Sky Sports Box Office": ``,


    "Sky Sports Box Office HD": ``,


    "Sky Sports F1": ``,


    "Sky Sports F1 HD": ``,


    "Sky Sports Mix": ``,


    "Sky Sports Mix HD": ``,


    "Sky Sports News HQ": ``,


    "Sky Sports News HQ HD": ``,


    "Sony Channel +1": ``,


    "Sony Entertainment TV Asia": ``,


    "Sony MAX": ``,


    "Sony Movie Channel +1": ``,


    "Sony SAB": ``,


    "Spike +1": ``,


    "Star GOLD": ``,


    "Star Life OK": ``,


    "Star Plus": ``,


    "Star Plus HD": ``,


    "Star Utsav": ``,


    "Star Utsav": ``,


    "STV Edinburgh": ``,


    "STV2": ``,


    "Syfy +1": ``,


    "Syfy HD": ``,


    "TCM": ``,


    "TCM HD": ``,


    "TCM+1": ``,


    "TG4": ``,


    "The Box": ``,


    "The Vault": ``,


    "Times Now": ``,


    "Tiny Pop": ``,


    "Tiny Pop +1": ``,


    "Tiny Pop Freeview": ``,


    "Tiny Pop Freeview +1": ``,


    "TLC": ``,


    "TLC HD": ``,


    "TLC+1": ``,


    "TLC+2": ``,


    "Travel Channel": ``,


    "Travel Channel +1": ``,


    "True Crime": ``,


    "True Entertainment +1": ``,


    "True Movies": ``,


    "True Movies+1": ``,


    "truTV": ``,


    "truTV+1": ``,


    "TV3": ``,


    "TV3 HD": ``,


    "TV3+1": ``,


    "Universal Channel +1": ``,


    "Universal Channel HD": ``,


    "VH1": ``,


    "Viceland": ``,


    "Viceland HD": ``,


    "Vintage TV": ``,


    "Viva": ``,


    "W +1": ``,


    "W HD": ``,


    "Wellbeing": ``,


    "Yesterday +1": ``,


    "YourTV": ``,


    "YourTV +1": ``,


    "YouTube": ``,


    "Zee Cinema": ``,


    "Zee TV": ``,


    "Zing": ``,


}

module.exports = channels;