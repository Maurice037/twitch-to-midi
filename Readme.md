# Twiitch-to-midi
Insert Youre data in the config.js

Type this in you're terminal(please in site the folder)</br>
`npm i`</br>
Please install node beforehand

Make own commands an midi actions with this code:
```javascript
 twitch.message(COMMAND,TYPE,{PARAMETER},ACCESS,REPLY);

```
# arguments 
- Command = The Command to call the message event
- Type = look a the Table
- Parameter = lock at the Table
- Access = all(all user) or sub(for subs)
- Reply = Message to answer on the command (for no answer ignore der Argument)


# Message Reference
The following table describes the MIDI message types that are supported and the parameters of each:

| Type               | Parameter          | Parameter        | Parameter      |
|--------------------|--------------------|------------------|----------------|
| noteon             | note [0-127]       | velocity [0-127] | channel [0-15] |
| noteoff            | note [0-127]       | velocity [0-127] | channel [0-15] |
| poly aftertouch    | note [0-127]       | velocity [0-127] | channel [0-15] |
| cc                 | controller [0-127] | value [0-127]    | channel [0-15] |
| program            | number [0-127]     |                  | channel [0-15] |
| channel aftertouch | pressure [0-127]   |                  | channel [0-15] |
| pitch              | value [0-16384]    |                  | channel [0-15] |
| position           | value [0-16384]    |                  |                |
| mtc                | type [0-7]         | value [0-15]     |                |
| select             | song [0-127]       |                  |                |
| clock              |                    |                  |                |
| start              |                    |                  |                |
| continue           |                    |                  |                |
| stop               |                    |                  |                |
| activesense        |                    |                  |                |
| reset              |                    |                  |                |
| sysex              | bytes (variable length array) |             |                | 
