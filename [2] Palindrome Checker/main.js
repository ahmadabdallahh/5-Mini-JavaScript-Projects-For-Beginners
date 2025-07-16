// TODO: Palindrome Checker Project

const submitBtn = document.querySelector('.submitBtn');
const palindromeInput = document.querySelector('#palindrome-input');
const successTxt = document.querySelector('.success');
const errorTxt = document.querySelector('.error');
const resultCon = document.querySelector('.result');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let myValue = palindromeInput.value.toLowerCase();
  let myReverseValue = myValue.split('').reverse().join('');

  // Always hide both messages first
  successTxt.style.display = 'none';
  errorTxt.style.display = 'none';

  if (myValue === myReverseValue) {
    successTxt.style.display = 'block';
  } else {
    errorTxt.style.display = 'block';
  }
  //   NOTE: Ternary Operator
  //   console.log(myValue === myValue.split('').reverse().join(''));
});
