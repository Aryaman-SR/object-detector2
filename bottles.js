img="";
status="";


function preload()
{
    img=loadImage('bottles.jpeg')
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

    object_d=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded()
{
    console.log('Model is Loaded');
    status=true;
    object_d.detect(img,gotresult);

}

function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}

function draw()
{
   
    image(img,0,0,640,420);
    fill('red');
    text("Dog",45,75);
    noFill();
    stroke('brown');
    rect(30,60,450,350);

    fill('red');
    text("cat",330,80);
    noFill()
    stroke('grey');
    rect(300,70,270,330);

}

function back()
{}