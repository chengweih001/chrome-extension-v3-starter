// This file can be imported inside the service worker,
// which means all of its functions and variables will be accessible
// inside the service worker.
// The importation is done in the file `service-worker.js`.

console.log("External file is also loaded!")

getHidDevices = async function() {
    console.log('getHidDevices: ready to call');
    let devices = await navigator.hid.getDevices();
    console.log('getHidDevices', devices);
    return devices;
}