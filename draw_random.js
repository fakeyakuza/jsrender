var Sphere = {
radius: 30,
        centerX: 0,
        centerY: 0,
        centerZ: 50
};


var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var imgData=ctx.getImageData(0,0,500,500);
for (i=0; i<imgData.width*imgData.height*4;i+=4)
{
    // Do nothing with the colors red and green, set blue=255, and alpha=255:
    imgData.data[i]=Math.random() * 255;
    imgData.data[i+1]=Math.random() * 255;
    imgData.data[i+2]=Math.random()* 255;
    imgData.data[i+3]=Math.random()*255;
//    console.log(i);
}
ctx.putImageData(imgData,0,0);
