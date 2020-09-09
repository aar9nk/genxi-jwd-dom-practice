// Mouse Over
// When the mouse hovers over the image with id "light-bulb", change
// the "src" attribute of the image to "images/light-bulb-on.png"
// When the mouse leaves, change the "src" attribute to "images/light-bulb-off.png"

const lightBulb = document.querySelector('#light-bulb');

lightBulb.onmouseenter = () => {
    lightBulb.src = 'images/light-bulb-on.png';
};

lightBulb.onmouseleave = () => {
    lightBulb.src = 'images/light-bulb-off.png';
}