let obstacles = 0
let bird: game.LedSprite = null
input.onButtonPressed(Button.A, () => {
    bird.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, () => {
    bird.change(LedSpriteProperty.Y, -1)
})
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
obstacles = 0
