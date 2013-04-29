 var Sphere = {
radius: 150,
center: [0, 0, 200],
color: [255, 0, 0],
reflection: [0.8, 0.8, 0.8]
};

var degree = 30.0;
var radius = Math.sqrt(2);
var vectorX = radius * Math.cos(degree / 180 * Math.PI);
var vectorY = radius * Math.sin(degree / 180 * Math.PI);


(function() {

var f = arguments.callee;

var Light = {
lightVector: [vectorX/Math.sqrt(2), 0/Math.sqrt(3), vectorY/Math.sqrt(2)],
intensity: [1, 1, 1]
}

var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var imgData=ctx.getImageData(0,0,500,500);
for (var i=0; i<imgData.width*imgData.height*4;i+=4)
{
    var rayX = (i%(4 * 500)/4);
    rayX -= 250; 
    var rayY = Math.floor(i/(4 * 500));
    rayY -= 250;


    var vectorNormalization = 
        (Math.pow(Sphere.radius,2) - Math.pow(rayX,2) - Math.pow(rayY,2));
    var distance;
    if(vectorNormalization>= 0){
        distance = Sphere.center[2] - Math.sqrt(vectorNormalization);
    }else{
        distance = -100;
    }


    if( distance >= 0){

        var normalX = (rayX - Sphere.center[0])/Sphere.radius;
        var normalY = (rayY - Sphere.center[1])/Sphere.radius;
        var normalZ = (distance - Sphere.center[2])/Sphere.radius;

        var lightStrengthR = Sphere.reflection[0] *
            (normalX * Light.lightVector[0]
             + normalY * Light.lightVector[1] 
             + normalZ * Light.lightVector[2]);
        var lightStrengthG = Sphere.reflection[1] * 
            (normalX * Light.lightVector[0] 
             + normalY * Light.lightVector[1] 
             + normalZ * Light.lightVector[2]);
        var lightStrengthB = Sphere.reflection[2] * 
            (normalX * Light.lightVector[0] 
             + normalY * Light.lightVector[1] 
             + normalZ * Light.lightVector[2]);

        imgData.data[i]   = Sphere.color[0] * lightStrengthR * Light.intensity[0];
        imgData.data[i+1] = Sphere.color[1] * lightStrengthG * Light.intensity[1];
        imgData.data[i+2] = Sphere.color[2] * lightStrengthB * Light.intensity[2];
        imgData.data[i+3]=255;
    }else{
        imgData.data[i+3]=255;
    }
}
ctx.putImageData(imgData,0,0);
var finished = 1;
degree += 5;
if(degree === 360){
    degree = 0;
}
vectorX = radius * Math.cos(degree / 180 * Math.PI);
vectorY = radius * Math.sin(degree / 180 * Math.PI);

if (finished) setTimeout(f, 50);
}());
