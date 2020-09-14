export function loadImage(src, onLoad){
    const image = new Image()

    image.onload = function() {
        onLoad(this)
    }

    image.src = src

    return image
}