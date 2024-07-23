function setup() {
canvas=createCanvas(300,300);
canvas.center();
background("white");
canvas.mouseReleased(xdxdxd)
}
function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}

function draw(){
    strokeWeight(20);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    
    }
}
function clearCanvas(){
    background("white");
}
function xdxdxd(){
    classifier.classify(canvas,xdxdxdxd);
}
function xdxdxdxd (parameter) {
document.getElementById("label").innerHTML=parameter[0].label;
document.getElementById("confidence").innerHTML=parameter[0].confidence;
}