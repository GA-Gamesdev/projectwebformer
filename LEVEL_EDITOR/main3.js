kaplay({
  width:800,
height:600,
crisp:true,
letterbox:true,
stretch:true

});

function setChar(arr, x, y, char) {
    if (!arr[y]) return

    arr[y] =
        arr[y].slice(0, x) +
        char +
        arr[y].slice(x + 1)
}

let LEVEL = [
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'
'"                                               ",'



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


//asset loader
loadSprite("11", "https://image2url.com/r2/default/images/1769366189633-2e8678da-fd68-45d2-b153-1bd5b2b80a93.png",{
    sliceX: 3, // how many sprites are in the X axis
    sliceY: 3, // how many sprites are in the Y axis
    anims: {
        "9":{from: 5, to: 5},
        "3":{from: 6, to: 6},
        "2":{from: 7, to: 7},
     "4":{from: 0, to: 0},
     "7":{from: 1, to: 1},
     "6":{from: 2, to: 2},
     "5":{from: 3, to: 3},
     "8":{from: 4, to: 4},
     "1":{from: 8, to: 8},

    },

})

loadSprite("rdhouse", "https://image2url.com/r2/default/images/1769389402332-154eb064-0b14-4ac9-ab12-237619ae7c56.png")


loadBitmapFont("happy", "https://image2url.com/r2/default/images/1769024704895-b60f3428-ba8b-408c-ae0c-7dc49ba24c07.png", 28, 37);

//aaahahhah

let selected = 1
let X = 0
let Y = 0
let menu = "false"

scene("editor",()=>{

addLevel(LEVEL,mapconfig)

setBackground(184, 255, 248)

const cursor = add([
sprite("rdhouse"),
pos(X,Y),
opacity(0.5),
area(),
scale(1),
])

add([
rect(100,130),
pos(20),
color(61, 61, 61),
 fixed(),
])

const postxt = add([
text("X:0  Y:0",{font:"happy"}),
pos(20,550),
color(61, 61, 61),
 fixed(),
])

const select = add([
sprite("11",{
 anim: "1",
}),
pos(38,50),
 fixed(),

])




onKeyPress("right",()=>{
if(menu==="true"){
if(selected===9){
selected=1
select.play(selected.toString())

}else{

selected+=1
select.play(selected.toString())

}}})

onKeyPress("left",()=>{
if(menu==="true"){
if(selected===1){
selected=9
select.play(selected.toString())

}
else{
selected-=1
select.play(selected.toString())
}}})




onKeyPress("space",()=>{
if(menu==="false"){
if(selected===1){
setChar(LEVEL, X, Y, "=")
}
if(selected===2){
setChar(LEVEL, X, Y, "#")
}
if(selected===3){
setChar(LEVEL, X, Y, "^")
}
if(selected===4){
setChar(LEVEL, X, Y, "X")
}
if(selected===5){
setChar(LEVEL, X, Y, "D")
}
if(selected===6){
setChar(LEVEL, X, Y, "L")
}
if(selected===7){
setChar(LEVEL, X, Y, "G")
}
if(selected===8){
setChar(LEVEL, X, Y, "6")
}
if(selected===9){
setChar(LEVEL, X, Y, "$")
}
add([
    sprite("11", { anim: selected.toString() }),
    pos(cursor.pos.x, cursor.pos.y),
    area(),
    "tile",
])


}})

onKeyPress("right",()=>{
if(menu==="false"){
if(X!=47){
X+=1
cursor.pos.x=X*64
}}})

onKeyPress("left",()=>{
if(menu==="false"){
if(X!=0){
X-=1
cursor.pos.x=X*64
}}})

onKeyPress("down",()=>{
if(menu==="false"){
if(Y!=14){
Y+=1
cursor.pos.y=Y*64
}}})

onKeyPress("up",()=>{
if(menu==="false"){
if(Y!=0){
Y-=1
cursor.pos.y=Y*64
}}})

cursor.onUpdate(()=>{
setCamPos(cursor.pos)
postxt.text="X: "+X+"  Y: "+Y
})


onKeyPress("delete", () => {
if(menu==="false"){
setChar(LEVEL, X, Y, " ")
    get("tile").forEach(t => {
        if (
            t.pos.x === cursor.pos.x &&
            t.pos.y === cursor.pos.y
        ) {
            destroy(t)
        }
    })
}})


onKeyPress("escape",()=>{
if(menu==="false"){
menu="true"
}else{
menu="false"}
})

onKeyPress("s",()=>{
go("save")
})

})



scene("save",()=>{

onKeyPress("escape",()=>{
go(editor)
})

onKeyPress("space",()=>{
downloadJSON("mylevel",LEVEL)
})

})


go("editor")
