document.getElementById("numDevices").addEventListener("click", numDevices);
document.getElementById("openDevice0").addEventListener("click", openDevice0);
document.getElementById("closeDevice0").addEventListener("click", closeDevice0);
document.getElementById("openDevice1").addEventListener("click", openDevice1);
document.getElementById("closeDevice1").addEventListener("click", closeDevice1);
document.getElementById("openTabForRequestDevice").addEventListener("click", openTabForRequestDevice);

function numDevices(){
    chrome.runtime.sendMessage({cmd: 'num_devices'}, (response) => {
        console.log('received num_devices', response);
    });
}

function openDevice(idx){
      chrome.runtime.sendMessage({cmd: 'open_device', data: idx}, (response) => {
          console.log('received open_device idx:',idx, response);
      });
}

function closeDevice0() {
    closeDevice(0);
}

function openDevice0() {
    openDevice(0);
}

function closeDevice1() {
    closeDevice(1);
}

function openDevice1() {
    openDevice(1);
}

function closeDevice(idx){
    chrome.runtime.sendMessage({cmd: 'close_device', data: idx}, (response) => {
        console.log('received close_device idx:',idx, response);
    });
}

function openTabForRequestDevice() {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
}