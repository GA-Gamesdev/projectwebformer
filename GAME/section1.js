//a bunch of section 1 code is done. but there is some stuff i would like to add

kaplay({
  width:800,
height:600,
crisp:true,
letterbox:true,
stretch:true

});

canvas:{

}

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
loadSprite("exit","https://image2url.com/r2/default/images/1770669800026-2b510a95-dfb3-40b3-8740-2760680a6aaf.png")




loadBitmapFont("happy", "https://image2url.com/r2/default/images/1769024704895-b60f3428-ba8b-408c-ae0c-7dc49ba24c07.png", 28, 37);


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
"#        ^   6  ^      DDDD^^^^^^^^^^^^^^^^^^^",
"=======================DDDD===================",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
],
///level base below
[
"                                             ", 
"                                             ",
"                           T                 ",
"                                    X        ",
"                                  =====              ",
"                   ^^   ======    YYYYY      ",
"                  ====                       ",
"           !!!                               ",
"#      =========!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
"=======DDDDDDDDD=============================",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
],

["                    DDDDDDDDDDDDD                        ", 
"                     D G         D",
"      DDDDDDDDDDDDDDDD          DDDDDDDDDDD     ",
"                    G                    X    ",
"                         ^  6 ^ L            ",
"                       ==========                      ",
"                    DD DDDDDDDDDD            ",
"                       DDDDDDDDDD     X      ",
"#     L                DDDDDDDDDD            ",
"=======================DDDDDDDDDD!!!!!!!!!!!!",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
"DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
],

["                             ^^^^^^^^^^^^         ", 
"                DDDDDDD                       ",
"                                             ",
"                                             ",
"                                          !   ",
"                L                   !   ===   ",
"          !  ! ===               ====        ",
"     !  ! ====                               ",
"#    ====                                    ",
"===                         G",
"",
"",
"",
"",
"",
"",
"",
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
        area(),
	pos(0,0),
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
localStorage.setItem("webformerlv", mapID);
go("main menu")
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
const optionsY = [255, 305,365]

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
mapID=1
go("game")
}
})
onKeyPress("space",()=>{
if(selected===1){
mapID=Number(localStorage.getItem("webformerlv"));
go("game")

}
})

onKeyPress("space",()=>{
if(selected===2){
mapID=toNumber(localStorage.getItem("webformercon"));
setBackground(184, 255, 248)
go("game")

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

go("main menu")
