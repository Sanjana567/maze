var ball
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,
wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37


function setup(){
 ball = createSprite(220,315,15,15)
 ball.shapeColor="red"

 wall1 = createSprite(200,113,100,10)
 wall2 = createSprite(200,133,10,40)
 wall3 = createSprite(260,145,50,10)
 wall4 = createSprite(285,140,10,70)
 wall5 = createSprite(120,140,10,70)
 wall6 = createSprite(140,140,50,10)
 wall7 = createSprite(165,170,30,7)
 wall8 = createSprite(235,170,30,7)
 wall9 = createSprite(155,187,7,45)
 wall10 = createSprite(244,188,7,45)
 wall11 = createSprite(200,207,90,7)
 wall12 = createSprite(118,220,15,40)
 wall13 = createSprite(283,220,15,40)
 wall14 = createSprite(200,238,100,12)
 wall15 = createSprite(200,250,10,40)
 wall16 = createSprite(200,42,380,10)
 wall17 = createSprite(200,360,380,10)
 wall18 = createSprite(390,200,10,330)
 wall19 = createSprite(10,200,10,330)
 wall20 = createSprite(200,67,15,40)
 wall21 = createSprite(63,76,40,15)
 wall22 = createSprite(336,76,40,15)
 wall23 = createSprite(138,76,50,15)
 wall24 = createSprite(64,112,40,10)
 wall25 = createSprite(262,76,50,15)
 wall26 = createSprite(337,112,40,10)
 wall27 = createSprite(56,190,10,90)
 wall28 = createSprite(345,190,10,90)
 wall29 = createSprite(25,296,30,10)
 wall30 = createSprite(372,297,30,10)
 wall31 = createSprite(200,329,310,10)
 wall32 = createSprite(200,314,10,20)
 wall33 = createSprite(200,299,100,10)
 wall34 = createSprite(116,316,10,35)
 wall35 = createSprite(281,316,10,35)
 wall36 = createSprite(295,267,100,10)
 wall37 = createSprite(110,267,100,10)
}
function draw() {
  background(0)

  if(keyIsDown(DOWN_ARROW)){
    ball.y=ball.y+2
  }
  if(keyIsDown(UP_ARROW)){
    ball.y=ball.y-2
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.x=ball.x-2
  }
  if(keyIsDown(RIGHT_ARROW)){
    ball.x=ball.x+2
  }
ball.collide(wall1)
ball.collide(wall2)
ball.collide(wall3)
ball.collide(wall4)
ball.collide(wall5)
ball.collide(wall6)
ball.collide(wall7)
ball.collide(wall8)
ball.collide(wall9)
ball.collide(wall10)
ball.collide(wall11)
ball.collide(wall12)
ball.collide(wall13)
ball.collide(wall14)
ball.collide(wall15)
ball.collide(wall16)
ball.collide(wall17)
ball.collide(wall18)
ball.collide(wall19)
ball.collide(wall20)
ball.collide(wall21)
ball.collide(wall22)
ball.collide(wall23)
ball.collide(wall24)
ball.collide(wall25)
ball.collide(wall26)
ball.collide(wall27)
ball.collide(wall28)
ball.collide(wall29)
ball.collide(wall30)
ball.collide(wall31)
ball.collide(wall32)
ball.collide(wall33)
ball.collide(wall34)
ball.collide(wall35)
ball.collide(wall36)
ball.collide(wall37)


  drawSprites()
}