"use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
 let car1 = {
    company: "honda",
    colour: "black",
    year: "2003"
};
let car2 = {
    company: "kia",
    colour: "white",
    year: "2004"
};
var cars = [car1, car2];
console.log("car", cars);
//////////////////////////
// var  car = [{
//     company : "honda",
//     color : "black",
// //     model : 2004
// },
//  {
//     company : "kia",
//     color : "white",
//     model : 2000
// },
// {
//     company : "city",
//     color : "gray",
//     model : 2019
// }
// ]
// console.log("car",car[1].color)
// console.log("car",car[0].color)
// console.log("car",car[1].model)
// console.log("car",car[2].company)
// console.log("car",car)
//object type 
//type keyword (things : "you add")
//only thhose things you can add which you mention in object 
////////////////////////////////////////
const index_2_js_1 = require("./index.2.js");
console.log(index_2_js_1.car, index_2_js_1.age);
// chalk
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.red("maira"));
//to stop code
const login = () => {
    setTimeout(() => {
        console.log("print");
    }, 1000);
};
console.log("start");
login();
console.log("end");
