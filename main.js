var canvas = new fabric.Canvas('canvas');
 var X= document.getElementById("myAudio");

function new_image()
{
	faric.Image.fromURL('BirthdayImage.jpg',function(Img){
    wish=Img;
    wish.scaleToWidth(600);
    wish.scaleToHeight(400);
    wish.set({
        top:0,
        left:0,
    })
    canvas.add(wish);
    })
	
}

function playSound(){
	X.play();
}