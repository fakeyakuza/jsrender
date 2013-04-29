var Sphere = {
radius: 100,
        centerX: 0,
        centerY: 0,
        centerZ: 500,
        kd: 0.5
    
};


var Light = { 
lx: -1,
ly: 1,
lz: -1
  }


var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var imgData=ctx.getImageData(0,0,500,500);
for (var i=0; i<imgData.width*imgData.height*4;i+=4)
{
    var px = (i%(4 * 500)/4);
    px -= 250; 
    var py = Math.floor(i/(4 * 500));
    py -= 250;

    var t = -100;
    var temp = (Math.pow(Sphere.radius,2) - Math.pow(px,2) - Math.pow(py,2));

    if(temp >= 0){
        t = Sphere.centerZ - Math.sqrt(temp);
    }else{
        t = -100;
    }


    if( t >= 0){
        imgData.data[i]= 255;
        imgData.data[i+3]=255;
    }else{
        imgData.data[i+3]=255;
    }
    //    console.log(i);
}
ctx.putImageData(imgData,0,0);
