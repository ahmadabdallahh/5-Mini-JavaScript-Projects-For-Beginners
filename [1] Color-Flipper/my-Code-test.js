// TODO: Color Flipper Project

const body = document.getElementsByTagName('body')[0];
const btnRed = document.getElementsByClassName('btn-red')[0];
const btnGreen = document.getElementsByClassName('btn-green')[0];
const btnBlue = document.getElementsByClassName('btn-blue')[0];
const btnRandom = document.getElementsByClassName('btn-random')[0];
const backgroundColorText = document.getElementsByClassName(
  'backgroundColor-text'
)[0];

body.style.backgroundColor = localStorage.getItem(myColor);

document.addEventListener('load', () => {
  if (localStorage.getItem('color') == '') {
    localStorage.setItem('color', 'white');
  } else {
    btnRed.onclick = () => {
      //   body.style.backgroundColor = 'red';
      localStorage.setItem('color', 'red');
      backgroundColorText.textContent = `Background Color : ${btnRed.textContent}`;
    };

    btnBlue.onclick = () => {
      body.style.backgroundColor = 'blue';
      backgroundColorText.textContent = `Background Color : ${btnBlue.textContent}`;
      localStorage.setItem('color', 'blue');
    };

    btnGreen.onclick = () => {
      body.style.backgroundColor = 'green';
      localStorage.setItem('color', 'green');
      backgroundColorText.textContent = `Background Color : ${btnGreen.textContent}`;
    };

    function randomColor() {
      // NOTE: Tip
      //   return '#' + Math.floor(Math.random() * 255).toString();
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);

      let myColor = `rgb(${red} , ${green} , ${blue})`;
      return myColor;
    }

    btnRandom.onclick = () => {
      body.style.backgroundColor = randomColor();
      backgroundColorText.textContent = `Background Color : ${randomColor()}`;
      myColor.setItem('color', `${randomColor()}`);
    };
  }
});
