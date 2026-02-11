//a bunch of section 1 code is done. but there is some stuff i would like to add

kaplay({
  width:800,
height:600,
crisp:true,
letterbox:true,
stretch:true

});

layers(["background", "game", "foreground"], "game")

let w1 = localStorage.getItem("w1")
let exitfrom = 0

loadSprite("player", "https://image2url.com/r2/default/images/1767393290724-f4cd0b10-37ed-49fc-b7a1-c28fc273a3c1.png")
loadSprite("ground","https://image2url.com/r2/default/images/1767393265499-2c1de6bd-257b-4b0e-b211-44365e8585da.png")
loadSprite("spike", "https://image2url.com/r2/default/images/1767393236351-b79257ed-5d6c-4177-9e43-c52f999a00f5.png")
loadSprite("jump", "https://image2url.com/r2/default/images/1767393218976-05dcea83-001c-4998-b2d3-e176a3e28758.png")
loadSprite("goal", "https://image2url.com/r2/default/images/1767236104411-ba54dbab-0aaf-4ace-99af-ce6e1610716b.png")
loadSprite("crate", "https://image2url.com/r2/default/images/1767393183587-ebbbb814-1966-46d2-b50e-5b913baa45d7.png")
loadSprite("coin", "https://image2url.com/r2/default/images/1767393103110-b41c3d06-760d-499f-bc6e-7635eac902ce.png")
loadSprite("enemy", "https://image2url.com/r2/default/images/1767393076731-674bdd0d-c817-4943-b490-1ba161a7c236.png")
loadSprite("tree", "https://image2url.com/r2/default/images/1767393042998-ea2bdc5c-212f-4710-b284-334cbceb27e3.png")
loadSprite("dirt", "https://image2url.com/r2/default/images/1767392907228-72810848-2323-43e2-a6d0-6200431e02ab.png")
loadSprite("ladder", "https://image2url.com/r2/default/images/1767392874973-0f462676-b9f4-47b7-abd0-a307d29ab2f2.png")
loadSprite("flip", "https://image2url.com/r2/default/images/1767392785338-9544f032-69b9-4d05-b596-2315a2c0c648.png")
loadSprite("wall", "https://image2url.com/r2/default/images/1768961826409-c79a6f60-31d0-4084-9b69-c199ae9b13f6.png")
loadSprite("key", "https://image2url.com/r2/default/images/1767392639254-f6b006f0-eafc-4724-a4f3-c88a8dbb3f8b.png")
loadSprite("scary","https://image2url.com/r2/default/files/1770412488233-90b351ce-a5da-4c7e-9a2c-1595d2d9a2e6.png")
loadSprite("mean","https://image2url.com/r2/default/files/1770412885351-0fda7981-2285-4b05-92f9-18966dac9442.png")
loadSprite("exit","https://image2url.com/r2/default/images/1770773879373-5fdae88b-7e2e-46a8-8910-b87df2524aaa.png")
loadSprite("space","https://image2url.com/r2/default/images/1770772571956-5af3da3a-e88f-4d6f-8cae-a1bb11d1a982.png")
loadSprite("TRIGGER","https://image2url.com/r2/default/images/1770774288425-55888ce7-94cf-4f00-86ff-ff04a4bacd41.png")
loadSprite("snow","https://image2url.com/r2/default/images/1770849818347-33110018-e069-4c3d-a32f-6994330c0b0b.png")
loadSprite("ICE","https://image2url.com/r2/default/images/1770850198036-56a123da-f3b9-405a-b42c-9c7b0a667c7b.png")

loadBitmapFont("happy", "https://image2url.com/r2/default/images/1769024704895-b60f3428-ba8b-408c-ae0c-7dc49ba24c07.png", 28, 37);

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
const speed=300

let mapID = 1
let coinamnt = 0
let attempts = 0
const climbspeed = 150
let gravityflipped = "false"
keyCollected = "false"

////load assets





const MAPS = [
["                                             ", 
"                                             ",
"                                             ",
"                                             ",
"                                             ",
"                                             ",
"                                             ",
"                                             ",
"#                                            ",
"=============================================",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
],
[
"                                X   $$", 
"                               ===  ==",
"                                        ^",
"                                    $$ ===",
"                    $               ^^",
"                               ^^  ====",
"                    T         ====     ",
"                       ==== ",
"#        ^   6  ^      dDDd^^^^^^^^^^^^^^^^^^^",
"=======================DDDD===================",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
],
///level base below
[
"                                             ", 
"                           $                 ",
"                           T                 ",
"                                    X        ",
"                   $$             =====              ",
"            $      ^^   ======    YYYYY      ",
"                  ====                       ",
"           !!!                               ",
"#      =========!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
"=======DDDDDDDDD=============================",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
],

["                    dddddddddddd                        ", 
"                     d G  $$$   d",
"      dddddddddddddddd          ddddddddddd     ",
"                    G                    X    ",
"                         ^  6 ^ L            ",
"                       ==========                      ",
"                    dd dDDDDDDDDd     $      ",
"                       dDDDDDDDDd    $X$     ",
"#     L                dDDDDDDDDd            ",
"=======================dDDDDDDDDd^^^^^^^^^^^^",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
"dDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd",
],

["                         G           ^^^         ", 
"                ddddddd                       ",
"                  $$$                        ",
"                                             ",
"                                G     $  E!   ",
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
"----------------------------------------------",
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

        "-": () => [
            sprite("snow"),
            area(),
	scale(1),
	body({isStatic:true}),
offscreen({hide:true}),
"solid"
        ],

        "I": () => [
            sprite("ICE"),
            area(),
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
} else if(mapID===5){
    levelcount.text="level: 2-1 the place where is snowed"
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


let selected = 0
const optionsY = [255, 305,]

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



})





//ui asset loading

loadSprite("title","https://image2url.com/r2/default/images/1769034760468-66770a9e-1e8d-4689-bc7b-615faf8fb72f.png")
loadSprite("itme","https://image2url.com/r2/default/images/1769125886850-bf4bbde8-313d-4606-aba8-7968a7902f0f.png")


scene("scary",()=>{
setBackground(0, 0, 0)
add([
text("boo!")
])
loadSound("boo!","https://image2url.com/r2/default/files/1770411402922-fbb20c36-388e-48b1-ab36-50aaff5ea908.mp3")
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


go("main menu")
