loadSprite("acheve1","https://image2url.com/r2/default/images/1771118824634-2a3b46b9-a73c-4191-9f04-3513f415bd1e.png")
scene("achevements",()=>{
if(acheve.isUnlocked("f8an9dj")){
add([
rect(760,90,{radius:40}),

pos(10,20)
])
  add([
  sprite("acheve1"),
      scale(0.55),
          anchor("center"),
      pos(70,60)
    
  ])
}else{
add([
rect(760,90,{radius:40}),

pos(10,20)
])
    add([
  sprite("acheve1"),
    scale(0.5),
      anchor("center"),
      pos(50,70)
  ])
}
})













