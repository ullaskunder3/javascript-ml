const network = new brain.NeuralNetwork()

const input = document.querySelector('input');
const guess = document.querySelector('.guess');
const rgbDiv = document.querySelector('#container');

network.train([
    { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
    { input: { r: 0.10, g: 0.84, b: 0.72 }, output: { light: 1 } },
    { input: { r: 0.33, g: 0.24, b: 0.28 }, output: { dark: 1 } },
    { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
    { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
])

function getRGB(hex) {

    var shortHandRegx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shortHandRegx, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    } : null;
}


input.addEventListener('change', (e) => {
    const rgb = getRGB(e.target.value)
    // const result = network.run(rgb)
    // console.log(result);
    const mostLikly = brain.likely(rgb, network)
    console.log(mostLikly);
    rgbDiv.style.background = e.target.value
    rgbDiv.style.color = mostLikly === "dark" ? "white" : "black"

})