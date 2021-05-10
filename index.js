const twitch = require('./script');


twitch.message("!test","noteon",{note: 5,velocity: 127,channel: 10},"all","ja");

twitch.message("!x","noteon",{note: 5,velocity: 127,channel: 10},"sub","jo");
