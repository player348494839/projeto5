var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","d511d638-5dfd-49aa-9c56-534f362efc6b","02739830-a7ca-4674-a14c-4d741bb010fc"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"ball","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png","frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":4,"version":"puolLO4doMl4RTPDSrsaYzAXHkb6tJcQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"robot","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png","frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":4,"version":"qZgGnbHoZB0qkzv4NlK2Q3egsh5mHlHB","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"player","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png","frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"TETG4vkDDYXgOIC1rqSpyvqGTytvVg2h","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"player_kick","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":"cq07d9wZwfNx9EFPPg1xidQ7EWPukK72","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"player_fall","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png","frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":4,"version":"5T32aqRsPxIJGf03ScgW4U5vglEwKjas","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"d511d638-5dfd-49aa-9c56-534f362efc6b":{"name":"little_robot_1","sourceUrl":null,"frameSize":{"x":25,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"iBazDp8AKYk07iSXZxe5.N4NDLGGLF7x","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":47},"rootRelativePath":"assets/d511d638-5dfd-49aa-9c56-534f362efc6b.png"},"02739830-a7ca-4674-a14c-4d741bb010fc":{"name":"baby_robot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/96dctbYxFW5wNybomhBpG9RbT5KeXuKO/category_robots/baby_robot.png","frameSize":{"x":240,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"96dctbYxFW5wNybomhBpG9RbT5KeXuKO","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/96dctbYxFW5wNybomhBpG9RbT5KeXuKO/category_robots/baby_robot.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var raqueteJogador= createSprite(370,200,10,100);
raqueteJogador.shapeColor="blue";
raqueteJogador.setAnimation("player");

var raqueteCpu= createSprite(35,200,10,100);
raqueteCpu.shapeColor="red";
raqueteCpu.setAnimation("baby_robot_1");
raqueteCpu.scale = 0.3;
var bola= createSprite(200,200,10,10);
bola.shapeColor="yellow";
bola.setAnimation("ball");

function draw() {
  background("white");
  
  if(keyDown("space"))
  {
     bola.velocityX=2;
     bola.velocityY=3;
  }
  
  raqueteJogador.y = World.mouseY;
  raqueteCpu.y=bola.y;

  drawnet();
  
  
    
  createEdgeSprites();
  
  if(bola.isTouching(topEdge) || bola.isTouching(bottomEdge))
  {
    playSound("assets/wall_hit.mp3");
  }  
  if(bola.isTouching(raqueteJogador) || bola.isTouching(raqueteCpu))
  {
   playSound("assets/hit.mp3");
  }  
  if(bola.x > 400 || bola.x < 0)
  {
    playSound("assets/score.mp3");
    bola.x=200;
    bola.y=200;
    bola.velocityX=0;
    bola.velocityY=0;
  }
  bola.bounceOff(topEdge);
  bola.bounceOff(bottomEdge);
  bola.bounceOff(raqueteCpu);
  bola.bounceOff(raqueteJogador);
  drawSprites();
  
}



function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
