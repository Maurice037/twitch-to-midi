const tmi = require('tmi.js');
const easymidi = require('easymidi');
const fetch = require('node-fetch');
const cfg = require('./config');



//select output
var outputs = easymidi.getOutputs();
var output = new easymidi.Output(cfg.devicename);


const client = new tmi.Client({
    identity:{
        username: cfg.username,
        password: cfg.password
    },
    channels: [cfg.channelname]
});

client.connect();



function message(command = "", mode = "", param = {}, access = "", reply = "") {
    if (argscheck([command, mode, param, access, reply])) return;
    const parametar = params(param);

    client.on('message', (channel, tags, message, self) => {
        // Ignore echoed messages.
        if (self) return;

        if (message.toLowerCase() === command) {
            if (accesscheck(access, tags)) return;
            output.send(mode, parametar);
            if (reply === "") return;
            client.say(channel, reply);
        }
    });
}

function argscheck(data) {
    if (data[0] === '') return argserror();
    if (data[1] === '') return argserror();
    if (data[2] === {}) return argserror();
    if (data[3] === '') return argserror();

}

function argserror() {
    console.log('\x1b[41m', 'Please check the Arguments!');
    process.exit();
}

function params(data) {
    if (data.channel !== undefined) {
        data.channel = data.channel - 1
    }


    return data;
}

function accesscheck(access, user) {
    if (access === "all") return false;
    if (access === "sub" && user.subscriber === false) return true;
}


module.exports = { message };