sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.startCountdown(10)
    paper.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
})
let projectile: Sprite = null
let paper: Sprite = null
scene.setBackgroundColor(4)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 . . . . . 2 2 2 2 . . 
. . . . . 1 . . . 1 2 . . 2 . . 
. . . . . . 1 . 1 . 2 2 2 2 . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 . 1 . 2 2 2 2 . . 
. . . . . 1 . . . 1 2 . . 2 . . 
. . . . 1 . . . . . 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
paper = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
let boss = sprites.create(img`
. . . . . . 2 2 . . 2 2 . . . . 
. . . . . . 2 . . . . 2 . . . . 
. . . . . . 2 . . . . 2 . . . . 
. . 2 . . . f f f f f f . . . . 
. . 2 . . . f 2 f f 2 f . . . . 
2 . 2 . 2 . f f f f f f . . . . 
2 . 2 . 2 . f f 2 2 f f . . . . 
2 2 2 2 2 . . . f f . . . . . . 
. . 2 . . . . . f f . . . . . . 
. . 2 f f f f f f f . . . . . . 
. . 2 . . . . . f f . . . . . . 
. . 2 . . . . . f f . . . . . . 
. . 2 . . . . f f f f . . . . . 
. . . . . . f f . . f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
forever(function () {
    if (info.score() >= 10) {
        game.over(true)
    }
})
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, boss, Math.randomRange(-25, 25), Math.randomRange(-25, 25))
    projectile.lifespan = 3000
})
