sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Life += -1
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    list.push(Score)
    for (let index = 0; index <= list.length - 1; index++) {
        Sum += list[index]
        Count += 1
    }
    Average = Sum / Count
    Score = 0
    game.showLongText("You lost but here’s your average!!!", DialogLayout.Center)
    game.splash(Average)
    Life += 1
})
let monster: Sprite = null
let Average = 0
let Count = 0
let Sum = 0
let Score = 0
let list: number[] = []
list = []
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let Life = 1
Score = 0
tiles.setCurrentTilemap(tilemap`level1`)
game.showLongText("In this game you will be getting chased by enemies and a new one spawns every 3 seconds. GoodLuck!!", DialogLayout.Center)
forever(function () {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
forever(function () {
    if (Life == 1) {
        pause(3000)
        Score += 1
        monster = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        monster.setPosition(randint(30, 100), randint(30, 100))
        monster.follow(mySprite, 50)
    }
})
