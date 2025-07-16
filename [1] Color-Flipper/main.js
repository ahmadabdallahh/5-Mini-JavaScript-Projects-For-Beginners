// TODO: Color Flipper Project [1]

const body = document.querySelector('body');
const backgroundColor_content = document.querySelector('.backgroundColor-text');

function setColor(color) {
  body.style.backgroundColor = color;
  backgroundColor_content.textContent = `Background Color : ${
    color[0].toUpperCase() + color.slice(1, color.length)
  }`;
}

function randomColor() {
  // NOTE: Tip
  //   return '#' + Math.floor(Math.random() * 255).toString();
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let myColor = `rgb(${red} , ${green} , ${blue})`;
  body.style.backgroundColor = myColor;
  backgroundColor_content.textContent = `Background Color : ${myColor}`;
}
