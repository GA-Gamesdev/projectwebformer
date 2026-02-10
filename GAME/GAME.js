

scene("game", () => {
const level = addLevel(MAPS[mapID],mapconfig)
setBackground(184, 255, 248)
//level display and coin display and deaths counter


const levelcount = add([
text("level 1",{font:"happy"}),
pos(10,10),
    color(0, 0, 0),
 fixed(),
scale(0.6)

])



const coins = add([
text("coins: 0",{font:"happy"}),
pos(10,35),
    color(0, 0, 0),
 fixed(),

])


//player
const player = level.get("player")[0]
onKeyDown("right",()=>{
player.move(speed,0)
})

onGamepadStick("left",(v)=>{
player.move(v.x*speed,0)
})

onKeyDown("left",()=>{
player.move(-speed,0)
})

onKeyDown("space",()=>{
if(player.isGrounded()){
if(gravityflipped = "false"){
player.jump(580)
}}})

onGamepadButtonDown("south",()=>{
if(player.isGrounded()){
if(gravityflipped = "false"){
player.jump(580)
}}})

player.onUpdate(()=>{
setCamPos(lerp(getCamPos(), player.pos, 0.1))



if(player.pos.y >= 3000){
addKaboom(player.pos),
player.pos=vec2(10,512),
attempts+=1
}
})




//spike/death conditions
const spike = level.get("spike")[0]
onCollide("player","spike",()=>{
player.pos=vec2(10,512)
addKaboom(player.pos),
attempts+=1
})

onKeyPress("r",()=>{
player.pos=vec2(10,512)
addKaboom(player.pos),
attempts+=1
player.gravityScale= 1
player.angle=0
})

onGamepadButtonPress("north",()=>{
player.pos=vec2(10,512)
addKaboom(player.pos),
attempts+=0.5
})

//goal
const goal = level.get("goal")[0]
onCollide("player","goal",()=>{
onKeyPress("space",()=>{
player.destroy()
goal.destroy()
mapID+=1
localStorage.setItem("webformerlv", mapID);
go("loading")
})})

onCollide("player","exit",()=>{
onKeyPress("space",()=>{
player.destroy()

localStorage.setItem("w1", "1");
go("hubworld")
})})


//coin
const coin = level.get("coin")[0]
player.onCollide("coin",(f)=>{
destroy(f)
coinamnt+=1
localStorage.setItem("webformercon",coinamnt)
coins.text = "coins: "+coinamnt
})

coins.text = "coins: "+coinamnt



//enemy movement logic
const SOLIDS = level.get("solid")[0]
const enemy = level.get("enemy")[0]


onCollide("player","enemy",()=>{
player.pos=vec2(10,512)
addKaboom(player.pos),

attempts+=1
})

//gravity flip
 
const ladder = level.get("ladder")[0]
const flip = level.get("flip")[0]

onCollide("player","ladder",()=>{
player.gravityScale= -1
player.angle=180
})

onCollide("player","flip",()=>{
player.gravityScale= 1
player.angle=0

})

const key = level.get("key")[0]
const wall = get("wall")[40]

onKeyPress("escape",()=>{
if(w1!="1"){
localStorage.setItem("webformerlv", mapID);
go("main menu")}
if(w1==="1"){
localStorage.setItem("webformerlv", mapID);
go("hubworld")
exitfrom="1"

}
})

const terr = get("evil tree")[0]
onCollide("player","evil tree",()=>{
go("scary")
})

onCollide("player","meany",()=>{
localStorage.removeItem("webformerlv")
go("scary")
})

//level names
if(mapID===1){
    levelcount.text="level: 1-1 hey thats the roof"
} else if(mapID===2){
    levelcount.text="level: 1-2 very scary level"
} else if(mapID===3){
    levelcount.text="level: 1-3 look at me, im on the roof"
} else if(mapID===4){
    levelcount.text="level: 1-4 hell"
} else if(mapID===0){
    levelcount.text="level: null"
}

// etc...

})
