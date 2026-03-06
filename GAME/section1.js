const CURRENT_VERSION = "0.0.3 image quk fix";


//a bunch of section 1 code is done. but there is some stuff i would like to add

acheve.load("localStorage")
kaplay({
  width:800,
height:600,
crisp:true,
letterbox:true,
stretch:true,
    maxFPS: 120,
});

async function checkForUpdate() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/GA-Gamesdev/G.AGamesUpdatecheck/main/main/webformer.json",
      { cache: "no-store" } // VERY important
    );

    const data = await res.json();

    if (data.version !== CURRENT_VERSION) {
      console.log(`Update available! Latest: ${data.version}`);

      // optional UI
add([
      text("new version availiable",{font:"happy"}),
pos(20,560),
scale(0.70)
])

      // optional auto refresh
      // location.reload(true);
    } else {
      console.log("Game is up to date");
add([
text("game up to date!",{font:"happy"}),
pos(20,500),
scale(0.89)
])
    }
  } catch (e) {
    console.warn("Could not check for updates");
add([
text("error 1 : couldn't fetch version",{font:"happy"}),
pos(20,500),
scale(0.89)
])
  }
}

checkForUpdate();


layers(["background", "game", "foreground"], "game")

let w1 = localStorage.getItem("w1")
let exitfrom = 0

loadSprite("player", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/player.png")
loadSprite("ground","https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/ground.png")
loadSprite("spike", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/spike.png")
loadSprite("goal", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/goal.png")
loadSprite("coin", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/coin.png")
loadSprite("enemy", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/enemy.png")
loadSprite("tree", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/tree.png")
loadSprite("dirt", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/dirt.png")
loadSprite("ladder", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/ladder.png")
loadSprite("flip", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/flip.png")
loadSprite("scary","https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/scary.png")
loadSprite("mean","https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/mean.png")
loadSprite("space","https://image2url.com/r2/default/images/1770772571956-5af3da3a-e88f-4d6f-8cae-a1bb11d1a982.png")
loadSprite("TRIGGER","https://image2url.com/r2/default/images/1770774288425-55888ce7-94cf-4f00-86ff-ff04a4bacd41.png")

loadBitmapFont("happy", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/happy_font.png", 28, 37);


loadMusic("mainmusic","https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/mainmusic.mp3")
//this is from kaplayjs.com
function enemy(speed = 60, dir = 1) {
	return {
		id: "patrol",
		require: [ "pos", "area" ],
		add() {
			this.on("collide", (solid, col) => {
				if (col.isLeft() || col.isRight()) {
					dir = -dir
				}
			})
		},
		update() {
			this.move(speed * dir, 0)
		},
	}
}


//this is not from kaplayjs.com

    function addDialog() {
        const h = 160;
        const pad = 16;
// Add this function before your scene definitions
function addDialog() {
    const dialogBox = add([
        rect(700, 120),
        pos(50, 450),
        color(0, 0, 0),
        opacity(0.8),
        fixed(),
        z(100),
        "dialog"
    ])

    const dialogText = add([
        text("", { font: "happy", size: 20 }),
        pos(70, 470),
        color(255, 255, 255),
        fixed(),
        z(101),
        "dialog"
    ])

    const continuePrompt = add([
        text("Press SPACE to continue", { font: "happy", size: 16 }),
        pos(550, 550),
        color(200, 200, 200),
        fixed(),
        z(101),
        "dialog"
    ])

    return {
        say(msg) {
            dialogText.text = msg
        },
        dismiss() {
            destroyAll("dialog")
        }
    }
}
}

setGravity(1000)
const speed=325

let mapID = 1
let coinamnt = 0
let attempts = 0
const climbspeed = 150
let gravityflipped = "false"
keyCollected = "false"

////load assets





const MAPS = [
["                                                              b", 
"                                                              b",
"              b                                               b",
"              b                                               b",
"              b                                               b",
"              b                                               b",
"              b                                               b",
"              b                                               b",
"              b #                                             b",
"---------------===============================================----------------------------------------",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
],
[
"                                                X   $$        b", 
"                                               ===  ==        b",
"              b                                        ^      b",
"              b                                    $$ ===     b",
"              b                             $      ^^         b",
"              b                               ^^  ====        b",
"              b                    T         ====             b",
"              b                        ====                   b",
"              b #        ^   6  ^      dDDd^^^^^^^^^^^^^^^^^^^b",
"---------------========================DDDD-----------------------------------------------------------",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
],
///level base below
[
"              b                                              b", 
"              b                            $                 b",
"              b                            T                 b",
"              b                                     X        b",
"              b                    $$             =====      b",
"              b             $      ^^   ======    YYYYY      b",
"              b                   ====                       b",
"              b            !!!                               b",
"              b #      =========!!!!!!!!!!!!!!!!!!!!!!!!!!!!!b",
"---------------========DDDDDDDDD----------------------------------------------------------------------",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
],

["             b                      dddddddddddd               b", 
"              b                      d G  $$$   d               b",
"              b       dddddddddddddddd          ddddddddddd     b",
"              b                     G                    X      b",
"              b                          ^  6 ^ L               b",
"              b                        ==-====-==               b",
"              b                     dd dDDDDDDDDd     $         b",
"              b                        dDDDDDDDDd    $X$        b",
"              b #     L                dDDDDDDDDd               b",
"---------------========================dddddddddd^^^^^^^^^^^^^^^^^^^^--------------------------------",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
],


["                         G           ^^^         ", 
"                ddddddd                       ",
"                  $$$                        ",
"                                             ",
"                                G     $  X!   ",
"           $$   L                   !   ===   ",
"      $$  !  ! ===               ====        ",
"     !  ! ====                               ",
"#    ====                                    ",
"===                         L",
"",
"",
"",
"",
"",
"",
"",
],
["                                             ", 
"                                             ",
"                                             ",
"                                             ",
"                                             ",
"                                             ",
"                                             ",
"                                             ",
"#                                            ",
"-------------------------III-----------------",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
],


]

const mapconfig = {
tileWidth: 64,
tileHeight: 64,

pos:(0,0),

    tiles:{
        "=": () => [
            sprite("ground"),
            area(),
	scale(1),
	body({isStatic:true}),
offscreen({hide:true}),
"solid"
        ],

        "b": () => [
            sprite("ground"),
            area(),
	scale(1),
opacity(0),
	body({isStatic:true}),
offscreen({hide:true}),
"solid"
        ],

        "-": () => [
            sprite("ground"),
            
	    offscreen({hide:true}),

        ],



        "I": () => [
            sprite("ICE"),
            area({ shape: new Rect(vec2(0,-1),50, 56,50)  }),
	scale(1),
	body({isStatic:true}),
offscreen({hide:true}),
"ice"
        ],





       

        "#": () => [
        sprite("player"),
        area(),
	pos(10,20),
	scale(1),
	body(),
offscreen({hide:true}),
"player"
        ],

        "6": () => [
        sprite("enemy"),
        area({ shape: new Rect(vec2(23,18), 21, 46)  }),
	pos(10,20),
	scale(1),
	body(),

    enemy(),
"enemy",
"solid"
        ],

        "^": () => [
        sprite("spike"),
	 area({ shape: new Rect(vec2(20,10), 25, 56)  }),
	pos(0,0),
	scale(1),
offscreen({hide:true}),
body({isStatic:true}),
"spike",
"solid"


        ],

        "!": () => [
        sprite("mean"),
	 area({ shape: new Rect(vec2(20,10), 25, 56)  }),
	pos(0,0),
	scale(1),
offscreen({hide:true}),
body({isStatic:true}),
"meany",
"solid"
],

        "P": () => [
        sprite("jump"),
        area(),
	pos(0,0),
offscreen({hide:true}),
	scale(1),
"plate"
        ],

        "X": () => [
        sprite("goal"),
        area(),
	pos(0,0),
offscreen({hide:true}),
	scale(1),
"goal",
"solid"
        ],
        "@": () => [
        sprite("crate"),
        area(),
	pos(0,0),
	scale(1),
offscreen({hide:true}),
	body(),
"crate",
"solid"
        ],

        "$": () => [
        sprite("coin"),
        area(),
	pos(0,0),
offscreen({hide:true}),
	scale(1),
"coin"
        ],

        "L": () => [
        sprite("ladder"),
        area(),
	pos(0,0),
offscreen({hide:true}),
	scale(1),
"ladder"
        ],

        "0": () => [
        sprite("wall"),
        area(),
	pos(0,0),
offscreen({hide:true}),
	scale(1),
body({isStatic:true}),
"Wall",

        ],

        "G": () => [
        sprite("flip"),
        area(),
	pos(0,0),
offscreen({hide:true}),
	scale(1),
"flip"
        ],

        "T": () => [
        sprite("tree"),
offscreen({hide:true}),
	scale(1.1),

        ],

        "Y": () => [
        sprite("scary"),
        area(),
	pos(0,0),
offscreen({hide:true}),
	scale(1.1),
"evil tree"
        ],

        "D": () => [        sprite("dirt"),

 
	
	

offscreen({hide:true}),

        ],

        "d": () => [        sprite("dirt"),

 
	pos(0,0),
	scale(1),
body({isStatic:true}),
offscreen({hide:true}),
	area()
        ],

        "K": () => [
        sprite("key"),
        area(),
	pos(0,0),
offscreen({hide:true}),
	scale(1),
"key"
        ],


        "E": () => [
        sprite("exit"),
        area(),
	pos(0,0),
offscreen({hide:true}),
	scale(1),
"exit"
        ],



}
}





let PLRleft = false
let PLRright = false
let PLRmoving = false
let PLRjumping = false
let onice=false
let icemove="right"
scene("game", () => {
const level = addLevel(MAPS[mapID],mapconfig)
const music = play("mainmusic", {
    loop: true
})
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
if(onice===false){

onKeyDown("right",()=>{
PLRright= true
PLRmoving = true

})

onKeyRelease("right",()=>{
PLRright= false
PLRmoving = false





})
onKeyDown("left",()=>{
PLRleft= true
PLRmoving = true

})

onKeyRelease("left",()=>{
PLRleft= false
PLRmoving = false

})

}
onUpdate(()=>{
if(PLRright){
player.move(speed,0)
}
if(PLRleft){
player.move(-speed,0)
}})
onKeyDown("space",()=>{
if(player.isGrounded()){
if(gravityflipped = "false"){
player.jump(580)
tween(1,1.30,0.1,(twen)=>{player.scale.y=twen},easings.elasticOut)
tween(1,0.93,0.1,(twenx)=>{player.scale.x=twenx},easings.elasticOut)
wait(0.2,()=>{
tween(player.scale.y,0.92,0.1,(twen)=>{player.scale.y=twen},easings.bounceOut)
tween(player.scale.x,1.1,0.1,(twenx)=>{player.scale.x=twenx},easings.bounceOut)
wait(0.2,()=>{
tween(player.scale.y,1,0.2,(twen)=>{player.scale.y=twen},easings.bounceOut)
tween(player.scale.x,1,0.2,(twenx)=>{player.scale.x=twenx},easings.bounceOut)
})
})
}}})

onKeyDown("up",()=>{
if(player.isGrounded()){
if(gravityflipped = "false"){
player.jump(580)

tween(1,1.30,0.1,(twen)=>{player.scale.y=twen},easings.elasticOut)
tween(1,0.93,0.1,(twenx)=>{player.scale.x=twenx},easings.elasticOut)
wait(0.2,()=>{
tween(player.scale.y,0.92,0.1,(twen)=>{player.scale.y=twen},easings.bounceOut)
tween(player.scale.x,1.1,0.1,(twenx)=>{player.scale.x=twenx},easings.bounceOut)
wait(0.2,()=>{
tween(player.scale.y,1,0.2,(twen)=>{player.scale.y=twen},easings.bounceOut)
tween(player.scale.x,1,0.2,(twenx)=>{player.scale.x=twenx},easings.bounceOut)
})
})
}}})



if(player.isGrounded()){
if(player.scale.y===1.40){
tween(player.scale.y,1,0.1,(twen)=>{player.scale.y=twen})
tween(player.scale.x,1,0.1,(twenx)=>{player.scale.x=twenx})
}}
onGamepadButtonDown("south",()=>{
if(player.isGrounded()){
if(gravityflipped = "false"){
player.jump(580)
tween(1,1.30,0.1,(twen)=>{player.scale.y=twen},easings.elasticOut)
tween(1,0.93,0.1,(twenx)=>{player.scale.x=twenx},easings.elasticOut)
wait(0.2,()=>{
tween(player.scale.y,0.92,0.1,(twen)=>{player.scale.y=twen},easings.bounceOut)
tween(player.scale.x,1.1,0.1,(twenx)=>{player.scale.x=twenx},easings.bounceOut)
wait(0.2,()=>{
tween(player.scale.y,1,0.2,(twen)=>{player.scale.y=twen},easings.bounceOut)
tween(player.scale.x,1,0.2,(twenx)=>{player.scale.x=twenx},easings.bounceOut)
})
})
}}})
onGamepadButtonDown("dpad-right",()=>{
player.move(speed/2,0)
})
onGamepadButtonDown("dpad-left",()=>{
player.move(-speed/2,0)
})


player.onUpdate(()=>{
setCamPos(lerp(getCamPos(), player.pos, 0.1))



if(player.pos.y >= 3000){
addKaboom(player.pos),
player.pos=vec2(10,512),
attempts+=1
}

if(player.pos.y <= -2999){
addKaboom(player.pos),
player.pos=vec2(10,512),
attempts+=1
}
})




//spike/death conditions
const spike = level.get("spike")[0]
onCollide("player","spike",()=>{
player.pos=vec2(1152,512)
addKaboom(player.pos),
attempts+=1
})

onKeyPress("r",()=>{
player.pos=vec2(1152,512)
addKaboom(player.pos),
attempts+=1
player.gravityScale= 1
player.angle=0
})

onGamepadButtonPress("north",()=>{
player.pos=vec2(1152,512)
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

onCollide("player","goal",()=>{
onGamepadButtonPress("south",()=>{
player.destroy()
goal.destroy()
mapID+=1
localStorage.setItem("webformerlv", mapID);
go("loading")
})})



onCollide("player","exit",()=>{
onKeyPress("space",()=>{
player.destroy()
acheve.grant("f8an9dj")
localStorage.setItem("w1", "1");
go("hubworld")
})})


//coin
const coin = level.get("coin")[0]
player.onCollide("coin",(f)=>{

coinamnt+=1
localStorage.setItem("webformercon",coinamnt)
coins.text = "coins: "+coinamnt
destroy(f)
})

coins.text = "coins: "+coinamnt



//enemy movement logic
const SOLIDS = level.get("solid")[0]
const enemy = level.get("enemy")[0]


onCollide("player","enemy",()=>{
player.pos=vec2(1152,512)
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
localStorage.removeItem("w1")
w1=0
go("scary")
})

//ice
const ice = get("ICE")[0]
onCollideUpdate("player","ICE",()=>{
onice=true
if(PLRleft){
icemove="left"
}
if(PLRright){
icemove="right"
}

console.log("on ice")
})

onCollideEnd("player","ICE",()=>{
onice=false
PLRright=false
PLRleft=false
})



onUpdate("player",()=>{
if(onice===true){

if(icemove==="right"){
PLRright=true
}



}


if(icemove==="left"){
PLRleft=true
}

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
} else if(mapID===5){
    levelcount.text="level: 2-1 the place where it snowed"
}

// etc...

})

let titlepos = center()-1002

scene("main menu",()=>{



setBackground(3, 9, 168)
add([
sprite("title"),
scale(0.4),
anchor("center"),
pos(400,100),

])

const cursor = add([
sprite("itme"),
scale(0.4),
anchor("center"),
pos(300,255),
area()

])

add([
text("new game",{font:"happy"}),
pos(400,250),
anchor("center"),
scale(0.7),


])

add([
text("continue",{font:"happy"}),
pos(400,300),
anchor("center"),
scale(0.7),




])

add([
text("achevements",{font:"happy"}),
pos(400,350),
anchor("center"),
scale(0.7),




])


let selected = 0
const optionsY = [255, 305,350]

onKeyPress("down", () => {
    selected++
})

onKeyPress("up", () => {
    selected--
})



cursor.onUpdate(() => {
    selected = clamp(selected, 0, optionsY.length - 1)
    cursor.pos.y = optionsY[selected]
if(selected===2){
cursor.pos.x=260}
else{
cursor.pos.x=300
}
})



onKeyPress("space",()=>{
if(selected===0){
localStorage.removeItem("webformerlv")
localStorage.setItem("webformerlv", "1");
localStorage.setItem("w1", "0");
w1=0
coinamnt=0
mapID=1
go("game")
}
})
onKeyPress("space",()=>{
if(selected===1){
mapID=Number(localStorage.getItem("webformerlv"));
if(w1=== "1"){
go("hubworld")
}if(w1!="1"){
go("game")
}

}
})
onKeyPress("space",()=>{
if(selected===2){
go("achevements")
}
})



})





//ui asset loading

loadSprite("title","https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/logo.png")
loadSprite("itme","https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/cursor.png")


scene("scary",()=>{
setBackground(0, 0, 0)
add([
text("boo!")
])
loadSound("boo!","https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/boo.mp3")
play("boo!")

onKeyPress("space",()=>{
go("main menu")
})
})

scene("loading",()=>{

go("game")

})

scene("hubworld",()=>{


add([
sprite("space"),
fixed(),
layer("background")
])
loadSprite("floor","https://image2url.com/r2/default/images/1770675204930-556f0493-24df-4565-9316-45db2ee50059.png")



const wrldmap = [
["                                             ", 
"                                             ",
"                                             ",
"                                             ",
"                                             ",
" =================================",
" =                                       ",
" =                                                    ",
" =#      1        2                                   ",
" ==========================================================",

],


]

const mapconfig = {
tileWidth: 64,
tileHeight: 64,

pos:(0,0),

    tiles:{
        "=": () => [
            sprite("floor"),
            area(),
	scale(1),
	body({isStatic:true}),
offscreen({hide:true}),
"solid"
        ],

        "#": () => [
        sprite("player"),
        area(),
	pos(10,20),
	scale(1),
	body(),
offscreen({hide:true}),
"player"
        ],

        "1": () => [
        sprite("exit"),
        area(),
	pos(0,0),
	scale(1),
offscreen({hide:true}),
"exit1"
        ],

        "2": () => [
        sprite("exit"),
        area(),
	pos(0,0),
	scale(1),
offscreen({hide:true}),
"exit2"
        ],

        "C": () => [
        sprite("TRIGGER"),
        area(),
	pos(0,0),
	scale(1),
opacity(0),
offscreen({hide:true}),
"camera"
        ],

}
}

mapID2 = 0
let CAM=1

const levelname = add([
text("",{font:"happy"}),
scale(1.5),
pos(40,500),
fixed()
])

const cleared = add([
text("",{font:"happy"}),
scale(0.7),
pos(70,550),
fixed()
])

add([
text("press up to enter a world",{font:"happy"}),
scale(0.7),
pos(0,0),
fixed()
])

const map = addLevel(wrldmap[mapID2],mapconfig)

setBackground(0,0,0)

//player
const player = map.get("player")[0]
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
if(CAM=1){
setCamPos(lerp(getCamPos(), player.pos, 0.1))
}



if(player.pos.y >= 3000){
addKaboom(player.pos),
player.pos=vec2(138,512),
attempts+=1
}




const exit1 = map.get("exit1")[0]



})

if(exitfrom==="1"){
player.pos=vec2(576,512)
}






onKeyPress("escape",()=>{
localStorage.setItem("webformerlv", mapID);
go("main menu")
})




let canEnter = false

onCollide("player", "exit1", () => {
    canEnter = true
levelname.text="world 1"



if(w1==="1"){
cleared.text="CLEAR"
}else{
cleared.text="not clear..."
}
})

onCollideEnd("player", "exit1", () => {
    canEnter = false
levelname.text=""
cleared.text=""



})

onKeyPress("up", () => {
    if (canEnter) {
        mapID = 1
        go("game")
    }
})





//22222222222222222222222222222222
let canEnter2 = false

onCollide("player", "exit2", () => {
    canEnter2 = true
levelname.text="world 2"



if(w1==="2"){
cleared.text="CLEAR"
}else{
cleared.text="not clear..."
}
})

onCollideEnd("player", "exit2", () => {
    canEnter2 = false
levelname.text=""
cleared.text=""



})

onKeyPress("up", () => {
    if (canEnter2) {
        mapID = 5
        go("game")
    }
})









onCollide("player","camera",()=>{
CAM = "0"
})


CAM = "1"

})

//gagames start for kaplay

scene("loadgame",()=>{
setBackground(0,0,0)
loadSprite("ga", "https://cdn.jsdelivr.net/gh/GA-Gamesdev/projectwebformer/assets/gagames.png")
add([
sprite("ga"),
anchor("center"),
pos(400,300),
scale(0.3)
])
add([
text("made by"),
anchor("center"),
pos(400,150),
scale(0.88)
])

wait(3, () => {
   go("main menu")
})
})
go("loadgame")


