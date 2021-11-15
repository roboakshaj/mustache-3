function preload(){
    clown_image=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas=createCanvas(400,300);

canvas.center();

video=createCapture(VIDEO);
video.size(400,300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
image(video, 0,0,400,300);
image(clown_image, noseX, noseY, 30, 30);
}

function take_snapshot(){
save('gkwhfyugvrhkgbywkh.png');

}

function modelLoaded(){
    console.log('Posenet is initialized');
}

function gotPoses(results){

     if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+results[0].pose.nose.x);
        console.log("noseY="+results[0].pose.nose.y);
        }
 
}










