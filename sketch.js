kaboom ({
  scale: 1,
background: [10,150,200]
})

loadBean()

let score = 0

let player = add([
  sprite("bean"),
  pos(50,300),
  body(),
  area(),
])

let platform = add([
 rect(500,50),
  pos(0,400),
  area(),
  solid(),
  "platform"
])

let platform2 = add([
  rect(800,50),
  pos(500,300),
  area(),
    solid(),
      "platform2"
])

let platform3 = add([
  rect(800,50),
  pos(800,300),
  area(),
    solid(),
      "platform3"
])

let platform4 = add([
  rect(800,50),
  pos(900,300),
  area(),
    solid(),
      "platform4"
])
  
add([
  "enemy",
  rect(50,50),
  pos(300,200),
   area(),
   body(),
   color(100,0,0)
 ])                   
   


add([
  "coin",
  rect(50,50),
  pos(400,100),
  area(),
  color(200,200,0)
])

let scoreLabel = add([
  text("score: 0"),
  pos(0,0)
])

onUpdate("enemy",(e) => {
 e.move(-100,0)                 
})

player.onCollide("enemy", () => {
  addKaboom(player.pos)
  destroy(player)
})

player.onCollide("coin", (c) =>{
   destroy(c)
   score += 10
  scoreLabel.text = "Score: "+score
 })
 


const SPEED = 250

player.onUpdate(() => {
  camPos(player.pos)
})
onKeyDown("space",() => {
  player. jump()
})

onKeyDown("a",() => {
  player.move(-300,0)
})

onKeyDown("d",() => {
  player.move(300,0)
})

