Webcam.set({
width: 400,
height: 400,
image_format: 'png',
png_quality: 200
});
 
camera = document.getElementById("camera");
Webcam.attach('camera');


