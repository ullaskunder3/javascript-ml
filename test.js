const brain = require('brain.js')

const network = new brain.NeuralNetwork()

// network.train([
//     { input: [60, 150], output: [1] },
//     { input: [30, 60], output: [0] },
//     { input: [30, 60], output: [0] },
// ])

// const result = network.run([70, 200])

/**
 * pen = 13-14 cm, 8 grams => 1
 * 
 * pencil = 14 - 15 cm, 6 gram => 0
 */

network.train([
    {input: {height: 13, weight: 8}, output: {pen: 1} },
    {input: {height: 13, weight: 6}, output: {pencil: 0} },
    {input: {height: 14, weight: 8}, output: {pen: 1} },
    {input: {height: 15, weight: 6}, output: {pencil: 0} },
])

const result = network.run({height: 13, weight: 7})

console.log(result);
// { pen: 0.7718532681465149, pencil: 0.03233066201210022 }