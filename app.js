'use strict'

class LHCanvas {
  constructor(selector="canvas") {

    this.canvas = document.querySelectorAll(selector)[0];
    this.ctx = this.canvas.getContext("2d");
    this.visibleElements = [];

    this.canvas.addEventListener("click",(event) => {
      console.log(event);
      this.addNewSprite(new Sprite("http://placekitten.com/200/200", 200, 200, event.layerX, event.layerY));
    })
  }

  render () {
    this.visibleElements.forEach((element) => {
      element.render(this.ctx)
    })
  }
  addNewSprite (sprite) {
    this.visibleElements.push(sprite);
  }

}


class Sprite {
  constructor(img="http://placekitten.com/200/200", height=200, width=200, x=0, y=0) {
    this.img = document.createElement("img");
    this.img.src = img;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  render (ctx) {
    console.log(this.img.src)
    ctx.drawImage(this.img, this.x, this.y);
  }
}

var canvas = new LHCanvas();
var kitty = new Sprite();
canvas.addNewSprite(kitty);

setInterval(function () {
  canvas.render();
}, 1000)
