img="";
status="";


function preload()
{
    img=loadImage('bedroom.jpeg')
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
    text("pillow",45,75);
    noFill();
    stroke('brown');
    rect(30,60,300,300);

    fill('red');
    text("bed",150,80);
    noFill()
    stroke('grey');
    rect(100,70,500,330);

}

function back()
{}