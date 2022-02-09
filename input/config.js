const fs = require ("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;

// You need to mention in the image file whether the image that needs to appear is _r = rare, normal or _sr = superrare, example: one layer image file can have the name redsunglasses_sr which is means, the images that contain the red sunglasses is super rare. 
const rarity = [
    {key:"", val: "original"},
    {key:"_r", val:"rare"},
    {key:"_sr", val:"superrare"}
    
];

const addRarity = (_str) => {
    let itemRarity;
    rarity.forEach((r)=>{
        itemRarity = r.val;
    });
    return itemRarity;
} 


const cleanName = (_str) => {
    let name = _str.slice(0,-4);
    rarity.forEach((r)=> {
        name = name.replace(r.key, "");
    });
}

const getElements = (path) => {
    return fs
        .readdirSync(path)
        .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
        .map((i,index) => {
            return{
                id: index+1,
                name: cleanName(i),
                fileName: i,
                rarity: addRarity(i),
            };
        });  
};

const layers = [{
    id: 1,
    name: "background",
    location: `${dir}/background/`,
    elements: getElements(`${dir}/background/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},
{
    id: 2,
    name: "body_structure",
    location: `${dir}/body_structure/`,
    elements: getElements(`${dir}/body_structure/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},
{
    id: 3,
    name: "layer_1",
    location: `${dir}/layer_1/`,
    elements: getElements(`${dir}/layer_1/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},
{
    id: 4,
    name: "layer_2",
    location: `${dir}/layer_2/`,
    elements: getElements(`${dir}/layer_2/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},
{
    id: 5,
    name: "layer_3",
    location: `${dir}/layer_3/`,
    elements: getElements(`${dir}/layer_3/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},
{
    id: 6,
    name: "layer_4",
    location: `${dir}/layer_4/`,
    elements: getElements(`${dir}/layer_4/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},{
    id: 7,
    name: "layer_5",
    location: `${dir}/layer_5/`,
    elements: getElements(`${dir}/layer_5/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},

/*
{
    id: 8,
    name: "layer_6",
    location: `${dir}/layer_6/`,
    elements: getElements(`${dir}/layer_6/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},{
    id: 9,
    name: "layer_7",
    location: `${dir}/layer_7/`,
    elements: getElements(`${dir}/layer_7/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},{
    id: 10,
    name: "layer_8",
    location: `${dir}/layer_8/`,
    elements: getElements(`${dir}/layer_8/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},{
    id: 11,
    name: "layer_9",
    location: `${dir}/layer_9/`,
    elements: getElements(`${dir}/layer_9/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},
{
    id: 12,
    name: "layer_10",
    location: `${dir}/layer_10/`,
    elements: getElements(`${dir}/layer_10/`),
    position: {x:0,y:0},
    size: {width: 1000, height:1000},

},
*/
];

console.log(layers);
module.exports = {layers,width,height}