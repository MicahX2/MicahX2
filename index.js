require("./config");
const {
  default: tdxConnect,
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  getAggregateVotesInPollMessage,
  makeCacheableSignalKeyStore,
  Browsers,
  MessageRetryMap
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const chalk = require("chalk");
const {
  Boom
} = require("@hapi/boom");
const fs = require('fs');
const {
  spawn: spawn,
  exec
} = require("child_process");
const axios = require("axios");
const FileType = require("file-type");
const path = require('path');
const _ = require("lodash");
const PhoneNumber = require("awesome-phonenumber");
const {
  say
} = require("cfonts");
const readline = require("readline");
const yargs = require('yargs/yargs');
const NodeCache = require("node-cache");
const yangBacaHomo = [`
░█████╗░██████╗░░█████╗░░█████╗░██╗░░██╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║░██╔╝
██║░░╚═╝██████╔╝███████║██║░░╚═╝█████═╝
██║░░██╗██╔══██╗██╔══██║██║░░██╗██╔═██╗
╚█████╔╝██║░░██║██║░░██║╚█████╔╝██║░╚██╗
░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝

██████╗░██╗░░░██╗
██╔══██╗╚██╗░██╔╝
██████╦╝░╚████╔╝░
██╔══██╗░░╚██╔╝░░
██████╦╝░░░██║░░░
╚═════╝░░░░╚═╝░░░

████████╗░█████╗░██╗░░██╗██╗░░██╗██╗░█████╗░
╚══██╔══╝██╔══██╗╚██╗██╔╝╚██╗██╔╝██║██╔══██╗
░░░██║░░░██║░░██║░╚███╔╝░░╚███╔╝░██║██║░░╚═╝
░░░██║░░░██║░░██║░██╔██╗░░██╔██╗░██║██║░░██╗
░░░██║░░░╚█████╔╝██╔╝╚██╗██╔╝╚██╗██║╚█████╔╝
░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░╚════╝░`];
const imageAscii = yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];
let low;
try {
  low = require("lowdb");
} catch (_0x18f143) {
  low = require("./trashbase/lib/lowdb");
}
;
const {
  Low,
  JSONFile
} = low;
const mongoDB = require("./trashbase/lib/mongoDB");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./trashbase/lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  sleep
} = require("./trashbase/lib/myfunction");
const {
  color
} = require("./trashbase/lib/color");
const usePairingCode = global.connect;
const listcolor = ["cyan", "magenta", "green", "yellow", 'blue'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
const question = _0x5a49a8 => {
  const _0x179cdf = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0x4d7b28 => {
    _0x179cdf.question(color(_0x5a49a8, randomcolor), _0x1b4dca => {
      _0x4d7b28(_0x1b4dca);
      _0x179cdf.close();
    });
  });
};
async function tdxStart() {
  const _0xfcbc23 = makeInMemoryStore({
    'logger': pino().child({
      'level': 'silent',
      'stream': "store"
    })
  });
  const {
    state: _0xcb3fa7,
    saveCreds: _0x382b0a
  } = await useMultiFileAuthState('./' + global.sessionName);
  const {
    version: _0x456de2,
    isLatest: _0x3531fc
  } = await fetchLatestBaileysVersion();
  const _0x19a632 = new NodeCache();
  const _0x3ee304 = tdxConnect({
    'isLatest': _0x3531fc,
    'version': _0x456de2,
    'keepAliveIntervalMs': 0x7530,
    'printQRInTerminal': !usePairingCode,
    'logger': pino({
      'level': "fatal"
    }),
    'auth': {
      'creds': _0xcb3fa7.creds,
      'keys': makeCacheableSignalKeyStore(_0xcb3fa7.keys, pino({
        'level': "fatal"
      }).child({
        'level': 'fatal'
      }))
    },
    'transactionOpts': {
      'maxCommitRetries': 0xa,
      'delayBetweenTriesMs': 0xa
    },
    'browser': Browsers.ubuntu('Chrome'),
    'generateHighQualityLinkPreview': true,
    'syncFullHistory': true,
    'maxMsgRetryCount': 0xf,
    'retryRequestDelayMs': 0xa,
    'connectTimeoutMs': 0x0,
    'defaultQueryTimeoutMs': undefined,
    'MessageRetryMap': MessageRetryMap,
    'resolveMsgBuffer': _0x19a632,
    'patchMessageBeforeSending': async _0x3c025c => {
      const _0x420d9c = !!(_0x3c025c.buttonsMessage || _0x3c025c.listMessage || _0x3c025c.templateMessage);
      if (_0x420d9c) {
        _0x3c025c = {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadataVersion': 0x2,
                'deviceListMetadata': {}
              },
              ..._0x3c025c
            }
          }
        };
      }
      return _0x3c025c;
    },
    'getMessage': async _0x3ab10d => {
      if (_0xfcbc23) {
        const _0x3da4ad = await _0xfcbc23.loadMessage(_0x3ab10d.remoteJid, _0x3ab10d.id, undefined);
        return _0x3da4ad?.["message"];
      }
      return {
        'conversation': "hi, Toxxic Boy"
      };
    }
  });
  if (usePairingCode && !_0x3ee304.authState.creds.registered) {
    say("Xeon v9\n", {
      'font': 'block',
      'align': 'center',
      'gradient': [randomcolor, randomcolor]
    });
    say("Made By Xeon... Cracked By Toxxic Boy\n", {
      'font': "console",
      'align': "center",
      'gradient': [randomcolor, randomcolor]
    });
    let _0x15db5f = await question("<!> TYPE YOUR PHONE NUMBER WITHOUT (+). ❌\n<✓> EXAMPLE : 2348165846414\n\n <+> NUMBER: ");
    let _0xf333de = _0x15db5f.replace(/[^0-9]/g, '');
    await console.clear();
    let _0x479f6d = await _0x3ee304.requestPairingCode(_0xf333de.trim());
    console.log(color(imageAscii + "\n\nType This Code To Your WhatsApp: " + _0x479f6d, randomcolor));
  }
  ;
  _0xfcbc23?.["bind"](_0x3ee304.ev);
  global.opts = new Object(yargs(process.argv.slice(0x2)).exitProcess(false).parse());
  global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : /mongodb/.test(opts.db) ? new mongoDB(opts.db) : new JSONFile("./trashbase/dtbs/database.json"));
  global.DATABASE = global.db;
  global.loadDatabase = async function _0x320acd() {
    if (global.db.READ) {
      return new Promise(_0xd0b924 => setInterval(function () {
        if (!global.db.READ) {
          clearInterval(this);
          _0xd0b924(global.db.data == null ? global.loadDatabase() : global.db.data);
        }
      }, 1000));
    }
    if (global.db.data !== null) {
      return;
    }
    global.db.READ = true;
    await global.db.read();
    global.db.READ = false;
    global.db.data = {
      'users': {},
      'chats': {},
      'game': {},
      'database': {},
      'settings': {},
      'setting': {},
      'others': {},
      'sticker': {},
      ...(global.db.data || {})
    };
    global.db.chain = _.chain(global.db.data);
  };
  loadDatabase();
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write();
      }
    }, 30000);
  }
  _0x3ee304["public"] = true;
  _0x3ee304.ev.on("connection.update", async _0x20168c => {
    const {
      connection: _0x223067,
      lastDisconnect: _0x33a3ed
    } = _0x20168c;
    try {
      if (_0x223067 === 'close') {
        let _0x57ef31 = new Boom(_0x33a3ed?.["error"])?.['output']["statusCode"];
        if (_0x57ef31 === DisconnectReason.badSession) {
          console.log("Bad Session File, Please Delete Session and Scan Again");
          process.exit();
          ;
        } else {
          if (_0x57ef31 === DisconnectReason.connectionClosed) {
            console.log("Connection closed, reconnecting....");
            tdxStart();
          } else {
            if (_0x57ef31 === DisconnectReason.connectionLost) {
              console.log("Connection Lost from Server, reconnecting...");
              tdxStart();
            } else {
              if (_0x57ef31 === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                exec("node " + process.argv[0x1]);
              } else {
                if (_0x57ef31 === DisconnectReason.loggedOut) {
                  console.log("Device Logged Out, Please Scan Again And Run.");
                  process.exit();
                  tdxStart();
                } else {
                  if (_0x57ef31 === DisconnectReason.restartRequired) {
                    console.log("Restart Required, Restarting...");
                    tdxStart();
                  } else if (_0x57ef31 === DisconnectReason.timedOut) {
                    console.log("Connection TimedOut, Reconnecting...");
                    tdxStart();
                  } else {
                    _0x3ee304.end("Unknown DisconnectReason: " + _0x57ef31 + '|' + _0x223067);
                  }
                }
              }
            }
          }
        }
      }
      if (_0x20168c.connection === 'connecting' || _0x20168c.receivedPendingNotifications === "false") {}
      if (_0x20168c.connection === "open" || _0x20168c.receivedPendingNotifications === "true") {
        await console.clear();
        await console.log(color(imageAscii + "\n\n<℅> XEON V9 IS CONNECTED!!!", '' + randomcolor));
        await console.log(color("\nTHIS CRACK WAS MADE BY TOXXIC BOY REMEMBER TO FOLLOW MY CHANNEL FOR MORE\n", '' + randomcolor));
        return new Promise((_0x561430, _0x1c4c3e) => {
          setTimeout(async () => {
            try {
              await _0x3ee304.end({
                'reason': "Clearing store"
              });
            } catch (_0x2f8c23) {
              console.log(_0x2f8c23);
            }
          }, 1800000);
        });
      }
    } catch (_0x20f13b) {
      console.log("Error In Connection.update " + _0x20f13b);
      tdxStart();
    }
  });
  _0x3ee304.ev.on("messages.update", async _0x220565 => {
    for (const {
      key: _0x3bd63c,
      update: _0x104392
    } of _0x220565) {
      if (_0x104392.pollUpdates && _0x3bd63c.fromMe) {
        const _0x3d5bff = await getMessage(_0x3bd63c);
        if (_0x3d5bff) {
          const _0x40d23b = await getAggregateVotesInPollMessage({
            'message': _0x3d5bff,
            'pollUpdates': _0x104392.pollUpdates
          });
          var _0x586648 = _0x40d23b.filter(_0x47210b => _0x47210b.voters.length !== 0x0)[0x0]?.["name"];
          if (_0x586648 == undefined) {
            return;
          }
          var _0x48d44e = prefix + _0x586648;
          _0x3ee304.appendTextMessage(_0x48d44e, _0x220565);
        }
      }
    }
  });
  _0x3ee304.decodeJid = _0x5ab4ce => {
    if (!_0x5ab4ce) {
      return _0x5ab4ce;
    }
    if (/:\d+@/gi.test(_0x5ab4ce)) {
      let _0x5f6dec = jidDecode(_0x5ab4ce) || {};
      return _0x5f6dec.user && _0x5f6dec.server && _0x5f6dec.user + '@' + _0x5f6dec.server || _0x5ab4ce;
    } else {
      return _0x5ab4ce;
    }
  };
  _0x3ee304.ev.on("contacts.update", _0x13fbd0 => {
    for (let _0x29c0db of _0x13fbd0) {
      let _0x12a39e = _0x3ee304.decodeJid(_0x29c0db.id);
      if (_0xfcbc23 && _0xfcbc23.contacts) {
        _0xfcbc23.contacts[_0x12a39e] = {
          'id': _0x12a39e,
          'name': _0x29c0db.notify
        };
      }
    }
  });
  _0x3ee304.setStatus = _0x3a594b => {
    _0x3ee304.query({
      'tag': 'iq',
      'attrs': {
        'to': "@s.whatsapp.net",
        'type': "set",
        'xmlns': "status"
      },
      'content': [{
        'tag': "status",
        'attrs': {},
        'content': Buffer.from(_0x3a594b, "utf-8")
      }]
    });
    return _0x3a594b;
  };
  _0x3ee304.getName = (_0x4fb456, _0x293dff = false) => {
    let _0x5e7d45 = _0x3ee304.decodeJid(_0x4fb456);
    _0x293dff = _0x3ee304.withoutContact || _0x293dff;
    let _0x3009c6;
    return _0x5e7d45.endsWith("@g.us") ? new Promise(async _0x672206 => {
      _0x3009c6 = _0xfcbc23.contacts[_0x5e7d45] || {};
      if (!(_0x3009c6.name || _0x3009c6.subject)) {
        _0x3009c6 = (await _0x3ee304.groupMetadata(_0x5e7d45)) || {};
      }
      _0x672206(_0x3009c6.name || _0x3009c6.subject || PhoneNumber('+' + _0x5e7d45.replace("@s.whatsapp.net", '')).getNumber("international"));
    }) : (_0x3009c6 = _0x5e7d45 === "0@s.whatsapp.net" ? {
      'id': _0x5e7d45,
      'name': "WhatsApp"
    } : _0x5e7d45 === _0x3ee304.decodeJid(_0x3ee304.user.id) ? _0x3ee304.user : _0xfcbc23.contacts[_0x5e7d45] || {}, (_0x293dff ? '' : _0x3009c6.name) || _0x3009c6.subject || _0x3009c6.verifiedName || PhoneNumber('+' + _0x4fb456.replace("@s.whatsapp.net", '')).getNumber("international"));
  };
  _0x3ee304.sendContact = async (_0x535426, _0x21a22f, _0x22f814 = '', _0x2b7d65 = {}) => {
    let _0x92625a = [];
    for (let _0x538f5c of _0x21a22f) {
      _0x92625a.push({
        'displayName': await _0x3ee304.getName(_0x538f5c),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x3ee304.getName(_0x538f5c)) + "\nFN:" + (await _0x3ee304.getName(_0x538f5c)) + "\nitem1.TEL;waid=" + _0x538f5c.split('@')[0x0] + ':' + _0x538f5c.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      });
    }
    _0x3ee304.sendMessage(_0x535426, {
      'contacts': {
        'displayName': _0x92625a.length + " Kontak",
        'contacts': _0x92625a
      },
      ..._0x2b7d65
    }, {
      'quoted': _0x22f814
    });
  };
  _0x3ee304.serializeM = _0x323ef8 => smsg(_0x3ee304, _0x323ef8, _0xfcbc23);
  _0x3ee304.sendFileUrl = async (_0x3a3a26, _0xd4421, _0xb783b, _0x4fd81f, _0x46597d = {}) => {
    let _0x36a11c = '';
    let _0x2a49f3 = await axios.head(_0xd4421);
    _0x36a11c = _0x2a49f3.headers['content-type'];
    if (_0x36a11c.split('/')[0x1] === "gif") {
      return _0x3ee304.sendMessage(_0x3a3a26, {
        'video': await getBuffer(_0xd4421),
        'caption': _0xb783b,
        'gifPlayback': true,
        ..._0x46597d
      }, {
        'quoted': _0x4fd81f,
        ..._0x46597d
      });
    }
    if (_0x36a11c === "application/pdf") {
      return _0x3ee304.sendMessage(_0x3a3a26, {
        'document': await getBuffer(_0xd4421),
        'mimetype': "application/pdf",
        'caption': _0xb783b,
        ..._0x46597d
      }, {
        'quoted': _0x4fd81f,
        ..._0x46597d
      });
    }
    if (_0x36a11c.split('/')[0x0] === "image") {
      return _0x3ee304.sendMessage(_0x3a3a26, {
        'image': await getBuffer(_0xd4421),
        'caption': _0xb783b,
        ..._0x46597d
      }, {
        'quoted': _0x4fd81f,
        ..._0x46597d
      });
    }
    if (_0x36a11c.split('/')[0x0] === 'video') {
      return _0x3ee304.sendMessage(_0x3a3a26, {
        'video': await getBuffer(_0xd4421),
        'caption': _0xb783b,
        'mimetype': "video/mp4",
        ..._0x46597d
      }, {
        'quoted': _0x4fd81f,
        ..._0x46597d
      });
    }
    if (_0x36a11c.split('/')[0x0] === "audio") {
      return _0x3ee304.sendMessage(_0x3a3a26, {
        'audio': await getBuffer(_0xd4421),
        'caption': _0xb783b,
        'mimetype': "audio/mpeg",
        ..._0x46597d
      }, {
        'quoted': _0x4fd81f,
        ..._0x46597d
      });
    }
  };
  _0x3ee304.sendPoll = (_0x27dde7, _0x25975e = '', _0x599fa5 = [], _0x4ab46c = 0x1) => {
    return _0x3ee304.sendMessage(_0x27dde7, {
      'poll': {
        'name': _0x25975e,
        'values': _0x599fa5,
        'selectableCount': _0x4ab46c
      }
    });
  };
  _0x3ee304.sendText = (_0x292480, _0x18a498, _0x380da7 = '', _0x41409f) => _0x3ee304.sendMessage(_0x292480, {
    'text': _0x18a498,
    ..._0x41409f
  }, {
    'quoted': _0x380da7,
    ..._0x41409f
  });
  _0x3ee304.sendImage = async (_0x13641b, _0x17ef57, _0x91aa9f = '', _0x31946c = '', _0x34fcd4) => {
    let _0x1786c1 = Buffer.isBuffer(_0x17ef57) ? _0x17ef57 : /^data:.?\/.?;base64,/i.test(_0x17ef57) ? Buffer.from(_0x17ef57.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x17ef57) ? await getBuffer(_0x17ef57) : fs.existsSync(_0x17ef57) ? fs.readFileSync(_0x17ef57) : Buffer.alloc(0x0);
    return await _0x3ee304.sendMessage(_0x13641b, {
      'image': _0x1786c1,
      'caption': _0x91aa9f,
      ..._0x34fcd4
    }, {
      'quoted': _0x31946c
    });
  };
  _0x3ee304.sendVideo = async (_0x50e1cb, _0x381f64, _0x5ef04d = '', _0x1bcd8d = '', _0x1a096f = false, _0x19cfd6) => {
    let _0xbf9ab8 = Buffer.isBuffer(_0x381f64) ? _0x381f64 : /^data:.?\/.?;base64,/i.test(_0x381f64) ? Buffer.from(_0x381f64.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x381f64) ? await getBuffer(_0x381f64) : fs.existsSync(_0x381f64) ? fs.readFileSync(_0x381f64) : Buffer.alloc(0x0);
    return await _0x3ee304.sendMessage(_0x50e1cb, {
      'video': _0xbf9ab8,
      'caption': _0x5ef04d,
      'gifPlayback': _0x1a096f,
      ..._0x19cfd6
    }, {
      'quoted': _0x1bcd8d
    });
  };
  _0x3ee304.sendAudio = async (_0x3ae484, _0x532597, _0x402304 = '', _0x2b9760 = false, _0x57deb7) => {
    let _0x1776de = Buffer.isBuffer(_0x532597) ? _0x532597 : /^data:.?\/.?;base64,/i.test(_0x532597) ? Buffer.from(_0x532597.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x532597) ? await getBuffer(_0x532597) : fs.existsSync(_0x532597) ? fs.readFileSync(_0x532597) : Buffer.alloc(0x0);
    return await _0x3ee304.sendMessage(_0x3ae484, {
      'audio': _0x1776de,
      'ptt': _0x2b9760,
      ..._0x57deb7
    }, {
      'quoted': _0x402304
    });
  };
  _0x3ee304.sendTextWithMentions = async (_0x133793, _0x21dae1, _0x396e86, _0x56a98c = {}) => {
    return _0x3ee304.sendMessage(_0x133793, {
      'text': _0x21dae1,
      'mentions': [..._0x21dae1.matchAll(/@(\d{0,16})/g)].map(_0x203e60 => _0x203e60[0x1] + "@s.whatsapp.net"),
      ..._0x56a98c
    }, {
      'quoted': _0x396e86
    });
  };
  _0x3ee304.sendImageAsSticker = async (_0x2228b2, _0x17ed50, _0x2c1885, _0x5067f2 = {}) => {
    let _0x4f4c29 = Buffer.isBuffer(_0x17ed50) ? _0x17ed50 : /^data:.?\/.?;base64,/i.test(_0x17ed50) ? Buffer.from(_0x17ed50.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x17ed50) ? await getBuffer(_0x17ed50) : fs.existsSync(_0x17ed50) ? fs.readFileSync(_0x17ed50) : Buffer.alloc(0x0);
    let _0x5c0e99;
    if (_0x5067f2 && (_0x5067f2.packname || _0x5067f2.author)) {
      _0x5c0e99 = await writeExifImg(_0x4f4c29, _0x5067f2);
    } else {
      _0x5c0e99 = await imageToWebp(_0x4f4c29);
    }
    await _0x3ee304.sendMessage(_0x2228b2, {
      'sticker': {
        'url': _0x5c0e99
      },
      ..._0x5067f2
    }, {
      'quoted': _0x2c1885
    });
    return _0x5c0e99;
  };
  _0x3ee304.sendVideoAsSticker = async (_0x4aef51, _0x3537ee, _0x546cda, _0x4ee152 = {}) => {
    let _0x89b219 = Buffer.isBuffer(_0x3537ee) ? _0x3537ee : /^data:.?\/.?;base64,/i.test(_0x3537ee) ? Buffer.from(_0x3537ee.split`,`[0x1], 'base64') : /^https?:\/\//.test(_0x3537ee) ? await getBuffer(_0x3537ee) : fs.existsSync(_0x3537ee) ? fs.readFileSync(_0x3537ee) : Buffer.alloc(0x0);
    let _0x2a2f9e;
    if (_0x4ee152 && (_0x4ee152.packname || _0x4ee152.author)) {
      _0x2a2f9e = await writeExifVid(_0x89b219, _0x4ee152);
    } else {
      _0x2a2f9e = await videoToWebp(_0x89b219);
    }
    await _0x3ee304.sendMessage(_0x4aef51, {
      'sticker': {
        'url': _0x2a2f9e
      },
      ..._0x4ee152
    }, {
      'quoted': _0x546cda
    });
    return _0x2a2f9e;
  };
  _0x3ee304.downloadAndSaveMediaMessage = async (_0x3bf141, _0x1b3750, _0x35c23f = true) => {
    let _0x404e79 = _0x3bf141.msg ? _0x3bf141.msg : _0x3bf141;
    let _0x1f4212 = (_0x3bf141.msg || _0x3bf141).mimetype || '';
    let _0x29d2db = _0x3bf141.mtype ? _0x3bf141.mtype.replace(/Message/gi, '') : _0x1f4212.split('/')[0x0];
    const _0xd53321 = await downloadContentFromMessage(_0x404e79, _0x29d2db);
    let _0x3edeb9 = Buffer.from([]);
    for await (const _0x27c294 of _0xd53321) {
      _0x3edeb9 = Buffer.concat([_0x3edeb9, _0x27c294]);
    }
    let _0x5a5616 = await FileType.fromBuffer(_0x3edeb9);
    let _0x263b5d = _0x35c23f ? _0x1b3750 + '.' + _0x5a5616.ext : _0x1b3750;
    await fs.writeFileSync(_0x263b5d, _0x3edeb9);
    return _0x263b5d;
  };
  _0x3ee304.downloadMediaMessage = async _0x14db6e => {
    let _0x5145b0 = (_0x14db6e.msg || _0x14db6e).mimetype || '';
    let _0x5236f7 = _0x14db6e.mtype ? _0x14db6e.mtype.replace(/Message/gi, '') : _0x5145b0.split('/')[0x0];
    const _0x503e68 = await downloadContentFromMessage(_0x14db6e, _0x5236f7);
    let _0x22a539 = Buffer.from([]);
    for await (const _0x55afe2 of _0x503e68) {
      _0x22a539 = Buffer.concat([_0x22a539, _0x55afe2]);
    }
    return _0x22a539;
  };
  _0x3ee304.sendMedia = async (_0x2ab909, _0xb7f581, _0x51995d = '', _0x387e7f = '', _0x311ed1 = '', _0x23eda6 = {}) => {
    let _0x30385b = await _0x3ee304.getFile(_0xb7f581, true);
    let {
      mime: _0x9d9a1,
      ext: _0x1e5987,
      res: _0x3b53ee,
      data: _0x8660dd,
      filename: _0x152407
    } = _0x30385b;
    if (_0x3b53ee && _0x3b53ee.status !== 0xc8 || file.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(file.toString())
        };
      } catch (_0x53c340) {
        if (_0x53c340.json) {
          throw _0x53c340.json;
        }
      }
    }
    let _0x3078ad = '';
    let _0x172d36 = _0x9d9a1;
    let _0xf7fca5 = _0x152407;
    if (_0x23eda6.asDocument) {
      _0x3078ad = 'document';
    }
    if (_0x23eda6.asSticker || /webp/.test(_0x9d9a1)) {
      let {
        writeExif: _0x711ef6
      } = require("./trashbase/lib/exif");
      let _0x2b8e5f = {
        'mimetype': _0x9d9a1,
        'data': _0x8660dd
      };
      _0xf7fca5 = await _0x711ef6(_0x2b8e5f, {
        'packname': _0x23eda6.packname ? _0x23eda6.packname : global.packname,
        'author': _0x23eda6.author ? _0x23eda6.author : global.author,
        'categories': _0x23eda6.categories ? _0x23eda6.categories : []
      });
      await fs.promises.unlink(_0x152407);
      _0x3078ad = "sticker";
      _0x172d36 = "image/webp";
    } else {
      if (/image/.test(_0x9d9a1)) {
        _0x3078ad = 'image';
      } else {
        if (/video/.test(_0x9d9a1)) {
          _0x3078ad = "video";
        } else {
          if (/audio/.test(_0x9d9a1)) {
            _0x3078ad = "audio";
          } else {
            _0x3078ad = "document";
          }
        }
      }
    }
    await _0x3ee304.sendMessage(_0x2ab909, {
      [_0x3078ad]: {
        'url': _0xf7fca5
      },
      'caption': _0x387e7f,
      'mimetype': _0x172d36,
      'fileName': _0x51995d,
      ..._0x23eda6
    }, {
      'quoted': _0x311ed1,
      ..._0x23eda6
    });
    return fs.promises.unlink(_0xf7fca5);
  };
  _0x3ee304.copyNForward = async (_0x3ef717, _0x5d4f75, _0xa2e985 = false, _0xbb3454 = {}) => {
    let _0x42bd29;
    if (_0xbb3454.readViewOnce) {
      _0x5d4f75.message = _0x5d4f75.message && _0x5d4f75.message.ephemeralMessage && _0x5d4f75.message.ephemeralMessage.message ? _0x5d4f75.message.ephemeralMessage.message : _0x5d4f75.message || undefined;
      _0x42bd29 = Object.keys(_0x5d4f75.message.viewOnceMessage.message)[0x0];
      delete (_0x5d4f75.message && _0x5d4f75.message.ignore ? _0x5d4f75.message.ignore : _0x5d4f75.message || undefined);
      delete _0x5d4f75.message.viewOnceMessage.message[_0x42bd29].viewOnce;
      _0x5d4f75.message = {
        ..._0x5d4f75.message.viewOnceMessage.message
      };
    }
    let _0x543c70 = Object.keys(_0x5d4f75.message)[0x0];
    let _0x382ee0 = await generateForwardMessageContent(_0x5d4f75, _0xa2e985);
    let _0x194a60 = Object.keys(_0x382ee0)[0x0];
    let _0x289d67 = {};
    if (_0x543c70 != "conversation") {
      _0x289d67 = _0x5d4f75.message[_0x543c70].contextInfo;
    }
    _0x382ee0[_0x194a60].contextInfo = {
      ..._0x289d67,
      ..._0x382ee0[_0x194a60].contextInfo
    };
    const _0x4e941d = await generateWAMessageFromContent(_0x3ef717, _0x382ee0, _0xbb3454 ? {
      ..._0x382ee0[_0x194a60],
      ..._0xbb3454,
      ...(_0xbb3454.contextInfo ? {
        'contextInfo': {
          ..._0x382ee0[_0x194a60].contextInfo,
          ..._0xbb3454.contextInfo
        }
      } : {})
    } : {});
    await _0x3ee304.relayMessage(_0x3ef717, _0x4e941d.message, {
      'messageId': _0x4e941d.key.id
    });
    return _0x4e941d;
  };
  _0x3ee304.cMod = (_0x57bddd, _0x280f02, _0x253f7f = '', _0x3cac52 = _0x3ee304.user.id, _0x11463b = {}) => {
    let _0x507975 = Object.keys(_0x280f02.message)[0x0];
    let _0x2330c6 = _0x507975 === "ephemeralMessage";
    if (_0x2330c6) {
      _0x507975 = Object.keys(_0x280f02.message.ephemeralMessage.message)[0x0];
    }
    let _0x1c8262 = _0x2330c6 ? _0x280f02.message.ephemeralMessage.message : _0x280f02.message;
    let _0x2e7174 = _0x1c8262[_0x507975];
    if (typeof _0x2e7174 === "string") {
      _0x1c8262[_0x507975] = _0x253f7f || _0x2e7174;
    } else {
      if (_0x2e7174.caption) {
        _0x2e7174.caption = _0x253f7f || _0x2e7174.caption;
      } else {
        if (_0x2e7174.text) {
          _0x2e7174.text = _0x253f7f || _0x2e7174.text;
        }
      }
    }
    if (typeof _0x2e7174 !== "string") {
      _0x1c8262[_0x507975] = {
        ..._0x2e7174,
        ..._0x11463b
      };
    }
    if (_0x280f02.key.participant) {
      _0x3cac52 = _0x280f02.key.participant = _0x3cac52 || _0x280f02.key.participant;
    } else {
      if (_0x280f02.key.participant) {
        _0x3cac52 = _0x280f02.key.participant = _0x3cac52 || _0x280f02.key.participant;
      }
    }
    if (_0x280f02.key.remoteJid.includes("@s.whatsapp.net")) {
      _0x3cac52 = _0x3cac52 || _0x280f02.key.remoteJid;
    } else {
      if (_0x280f02.key.remoteJid.includes("@broadcast")) {
        _0x3cac52 = _0x3cac52 || _0x280f02.key.remoteJid;
      }
    }
    _0x280f02.key.remoteJid = _0x57bddd;
    _0x280f02.key.fromMe = _0x3cac52 === _0x3ee304.user.id;
    return proto.WebMessageInfo.fromObject(_0x280f02);
  };
  _0x3ee304.sendFile = async (_0x43aca8, _0x5720aa, _0x13d38c = '', _0x409196 = '', _0x22f01f, _0x41478c = false, _0x3dac9e = {}) => {
    let _0x148d21 = await _0x3ee304.getFile(_0x5720aa, true);
    let {
      res: _0x5c8056,
      data: _0x1f7316,
      filename: _0x510809
    } = _0x148d21;
    if (_0x5c8056 && _0x5c8056.status !== 0xc8 || _0x1f7316.length <= 0x10000) {
      try {
        throw {
          'json': JSON.parse(_0x1f7316.toString())
        };
      } catch (_0xe4a2dc) {
        if (_0xe4a2dc.json) {
          throw _0xe4a2dc.json;
        }
      }
    }
    let _0x114ac7 = {
      'filename': _0x13d38c
    };
    if (_0x22f01f) {
      _0x114ac7.quoted = _0x22f01f;
    }
    if (!_0x148d21) {
      _0x3dac9e.asDocument = true;
    }
    let _0x2fc16c = '';
    let _0x8c43f9 = _0x148d21.mime;
    let _0x1b6693;
    if (/webp/.test(_0x148d21.mime) || /image/.test(_0x148d21.mime) && _0x3dac9e.asSticker) {
      _0x2fc16c = 'sticker';
    } else {
      if (/image/.test(_0x148d21.mime) || /webp/.test(_0x148d21.mime) && _0x3dac9e.asImage) {
        _0x2fc16c = "image";
      } else {
        if (/video/.test(_0x148d21.mime)) {
          _0x2fc16c = "video";
        } else {
          if (/audio/.test(_0x148d21.mime)) {
            _0x1b6693 = await (_0x41478c ? toPTT : toAudio)(_0x1f7316, _0x148d21.ext);
            _0x1f7316 = _0x1b6693.data;
            _0x510809 = _0x1b6693.filename;
            _0x2fc16c = "audio";
            _0x8c43f9 = "audio/ogg codecs=opus";
          } else {
            _0x2fc16c = "document";
          }
        }
      }
    }
    if (_0x3dac9e.asDocument) {
      _0x2fc16c = 'document';
    }
    delete _0x3dac9e.asSticker;
    delete _0x3dac9e.asLocation;
    delete _0x3dac9e.asVideo;
    delete _0x3dac9e.asDocument;
    delete _0x3dac9e.asImage;
    let _0x4c3906 = {
      ..._0x3dac9e,
      'caption': _0x409196,
      'ptt': _0x41478c,
      [_0x2fc16c]: {
        'url': _0x510809
      },
      'mimetype': _0x8c43f9
    };
    let _0x44986e;
    try {
      _0x44986e = await _0x3ee304.sendMessage(_0x43aca8, _0x4c3906, {
        ..._0x114ac7,
        ..._0x3dac9e
      });
    } catch (_0x1ef12b) {
      _0x44986e = null;
    } finally {
      if (!_0x44986e) {
        _0x44986e = await _0x3ee304.sendMessage(_0x43aca8, {
          ..._0x4c3906,
          [_0x2fc16c]: _0x1f7316
        }, {
          ..._0x114ac7,
          ..._0x3dac9e
        });
      }
      _0x1f7316 = null;
      return _0x44986e;
    }
  };
  _0x3ee304.getFile = async (_0x1191aa, _0x1329a6) => {
    let _0x2b9fb2;
    let _0x46a858 = Buffer.isBuffer(_0x1191aa) ? _0x1191aa : /^data:.?\/.?;base64,/i.test(_0x1191aa) ? Buffer.from(_0x1191aa.split`,`[0x1], "base64") : /^https?:\/\//.test(_0x1191aa) ? await (_0x2b9fb2 = await getBuffer(_0x1191aa)) : fs.existsSync(_0x1191aa) ? (filename = _0x1191aa, fs.readFileSync(_0x1191aa)) : typeof _0x1191aa === 'string' ? _0x1191aa : Buffer.alloc(0x0);
    let _0x4f917f = (await FileType.fromBuffer(_0x46a858)) || {
      'mime': "application/octet-stream",
      'ext': '.bin'
    };
    filename = path.resolve(__dirname, './trashbase/src/' + new Date() * 0x1 + '.' + _0x4f917f.ext);
    if (_0x46a858 && _0x1329a6) {
      fs.promises.writeFile(filename, _0x46a858);
    }
    return {
      'res': _0x2b9fb2,
      'filename': filename,
      'size': await getSizeMedia(_0x46a858),
      ..._0x4f917f,
      'data': _0x46a858
    };
  };
  _0x3ee304.ev.on("messages.upsert", async _0x4b31a3 => {
    try {
      let _0x2def54 = _0x4b31a3.messages[0x0];
      if (!_0x2def54.message) {
        return;
      }
      _0x2def54.message = Object.keys(_0x2def54.message)[0x0] === "ephemeralMessage" ? _0x2def54.message.ephemeralMessage.message : _0x2def54.message;
      if (_0x2def54.key && _0x2def54.key.remoteJid === "status@broadcast") {
        return;
      }
      if (_0x2def54.key.id.startsWith("BAE5") && _0x2def54.key.id.length === 0x10) {
        return;
      }
      if (_0x2def54.key.id.startsWith("FatihArridho_")) {
        return;
      }
      let _0x145e58 = smsg(_0x3ee304, _0x2def54, _0xfcbc23);
      require("./XeonMain/XeonBug9.js")(_0x3ee304, _0x145e58, _0x4b31a3, _0xfcbc23);
    } catch (_0x528a73) {
      console.log(_0x528a73);
    }
  });
  _0x3ee304.ev.process(async _0x15c27d => {
    if (_0x15c27d["creds.update"]) {
      await _0x382b0a();
    }
  });
  _0x3ee304.ev.on("call", async _0x5d9936 => {
    console.log(JSON.stringify(_0x5d9936, undefined, 0x2));
  });
  return _0x3ee304;
}
tdxStart();
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});