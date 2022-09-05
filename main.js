function setup() 
{  
  canvas = createCanvas(280, 280);
  canvas.center(); 
  //6...place the canvas at the center
  //7....set the background color of the canvas in white
  background("white");
  canvas.mouseReleased(classifyCanvas);
  synth=window.speechSynthesis;
}
function preload()
  {
classifier=ml5.imageClassifier('DoodleNet');
  }
  function draw()
    {
       strokeWeight(10);
       stroke(0);
       if(mouseIsPressed)
       {
         line(pmouseX,pmouseY,mouseX,mouseY);
       }
    }
    function classifyCanvas()
    {
      classifier.classify(canvas,gotResult);
    }
    function gotResult(error,results)
    {
      if(error)
      {
        console.error(error);
      }
      console.log(results);
      document.getElementById('label').innerHTML='object name'+results[0].label;
      utterThis=new SpeechSynthesisUtterance(results[0].label);
      synth.speak(utterThis);
    }
  



//8....Clear the canvas
function clearCanvas() {

  background("white");
}
