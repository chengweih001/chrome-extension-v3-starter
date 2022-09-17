// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log("This prints to the console of the service worker (background script)")

// Importing and using functionality from external files is also possible.
importScripts('service-worker-utils.js')

// If you want to import a file that is deeper in the file hierarchy of your
// extension, simply do `importScripts('path/to/file.js')`.
// The path should be relative to the file `manifest.json`.

let devices;

// devices = getHidDevices();
navigator.hid.getDevices().then(devs => {devices = devs});

// Example of a simple user data object
const user = {
    username: 'demo-user'
  };

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('receive msg:', message);
    let cmd = message.cmd;
    let data = message.data;
    if (cmd === 'num_devices') {
      sendResponse(devices.length);
    } else if (cmd == "open_device") {
        let idx = data;
        if (idx >= devices.length)  {
            sendResponse('Not enough num of devices:', devices.length);
        }

        devices[idx].open().then(() => {
            sendResponse('device opened for idx:', idx);
        });
        // await devices[idx].open();
        // sendResponse('device opened for idx:', idx);
    } else if (cmd == "close_device") {
        let idx = data;
        if (idx >= devices.length)  {
            sendResponse('Not enough num of devices:', devices.length);
        }

        devices[idx].close().then(() => {
            sendResponse('device closed for idx:', idx);
        });
        // await devices[idx].close();
        // sendResponse('device closed for idx:', idx);
    }
    // https://github.com/mozilla/webextension-polyfill/issues/130
    return true;
  });