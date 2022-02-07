const fs = require("fs");
const myArgs = process.argv.slice(2);
const { createCanvas, loadImage } = require ("canvas");
const {layers, width, height} = require("./input/config.js");
const canvas = createCanvas(width,height);
const ctx = canvas.getContext("2d");
//for number of images that you wanna generate mess around with edition
const edition = myArgs.length > 0 ? Number(myArgs[0]): 1;


const saveLayer = (_canvas, _edition) => {
    fs.writeFileSync(`./output/${_edition}.png`, _canvas.toBuffer("image/png"));
    console.log("Image created");

}

const drawLayer = async (_layer, _edition) => {
    let element = _layer.elements[Math.floor(Math.random() * _layer.elements.length)]; 
    const image = await loadImage(`${_layer.location}${element.fileName}`);
    ctx.drawImage(
        image,
        _layer.position.x,
        _layer.position.y,
        _layer.size.width,
        _layer.size.height
        );
    saveLayer(canvas, _edition);
};

for (let i=1; i<=edition; i++) {
    layers.forEach((layer) => {
        drawLayer(layer, i);
    })
    console.log("creating edition" + i);

} 
