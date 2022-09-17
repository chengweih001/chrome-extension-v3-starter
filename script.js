document.getElementById("requestDevice").addEventListener("click", requestDevice);

function requestDevice() {
    console.log('requestDevice is clicked');
    navigator.hid.requestDevice({filters:[]});
}