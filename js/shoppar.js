feather.replace();

const controls = document.querySelector('.controls');
const cameraOptions = document.querySelector('.video-options>select');
const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const screenshotImage = document.querySelector('img');
const buttons = [...controls.querySelectorAll('button')];
let streamStarted = false;

const [play, pause, screenshot] = buttons;

const constraints = {
    video: {
        width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
        },
        height: {
            min: 720,
            ideal: 1080,
            max: 1440
        },
    }
};

const getCameraSelection = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    const options = videoDevices.map(videoDevice => {
        return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
    });
    cameraOptions.innerHTML = options.join('');
};

play.onclick = () => {
    if (streamStarted) {
        video.play();
        play.classList.add('d-none');
        return;
    }
    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
        const updatedConstraints = {
            ...constraints,
            deviceId: {
                exact: cameraOptions.value
            }
        };
        startStream(updatedConstraints);
        startInstructions();
    }
};

const startStream = async (constraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
};

const handleStream = (stream) => {
    video.srcObject = stream;
    play.classList.add('d-none');
    streamStarted = true;
};

getCameraSelection();

function startInstructions(){
    document.getElementById("ar-instr").innerHTML = "1. Click the Start button on the camera feed <i class=\"fas fa-check-square text-success\"></i><br><br>" +
        "2. Allow access to your camera to get started <i class=\"fas fa-check-square text-success\"></i>";

    document.getElementById("ar-instr").innerHTML += "<br><br>3. Stand a few feet away from your camera ";

    setTimeout(
        function () {
            document.getElementById("ar-instr").innerHTML += "<i class=\"fas fa-check-square text-success\"></i><br><br>4. Please wait for the calculations ";
        }, 10000
    );

    setTimeout(
        function () {
            document.getElementById("ar-instr").innerHTML += "<i class=\"fas fa-check-square text-success\"></i>";
            document.getElementById("ar-main").innerHTML += "<hr style=\"border-color: white;\">\n" +
                "<h5><i class=\"fas fa-tshirt\"></i> Recommended size:</h5>\n" +
                "<h2 class=\"font-weight-bold text-gold animate__animated animate__fadeInDown animate__delay-1s\">Medium</h2>" +
                "<button class=\"btn btn-success animate__animated animate__fadeIn animate__delay-2s\"type=\"button\" onclick=\"window.history.back();\">Return to Product</button>";
        }, 25000
    );

}