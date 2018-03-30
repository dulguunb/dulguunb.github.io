
var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
console.log(document.childNodes[1])
document.childNodes[1].appendChild(app.view);

var container = new PIXI.Container();
app.stage.addChild(container);

var texture = PIXI.Texture.fromImage('daniel.png');

// Create a 5x5 grid of bunnies
for (var i = 0; i < 25; i++) {
    var bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    var radius = 100
    bunny.x =(radius*Math.cos(360+i));
    bunny.y =(radius*Math.sin(360+i));
   // console.log("x: " + (i + radius*Math.cos(Math.pi*i))  + "," + "y:" + (i + radius*Math.sin(Math.pi*i)) );
    
    container.addChild(bunny);
}

// Center on the screen
container.x = (app.screen.width - container.width) / 2;
container.y = (app.screen.height - container.height) / 2;
app.ticker.add(function(delta)
{
	container.rotation-=0.01*delta;
});

