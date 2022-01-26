// Oppgave 1

/* prøvde først med endring i htmlfil-> <button id="remove-btn" onclick="removeBtn()">Fjern teksten over</button>
function removeBtn() {
    let myBtn = document.getElementById("remove");
    myBtn.remove();
}*/

const removeText = document.getElementById('remove');
const removeBtn = document.getElementById('remove-btn');

const remove = () => {
    removeText.innerHTML = null;
    removeBtn.innerHTML = "borte vekk";
};

removeBtn.addEventListener('click', remove);

// Oppgave 2
const changeText = document.getElementById('change');
const changeBtn = document.getElementById('change-btn');

const change = () => {
    changeText.innerHTML = "Nå har jeg valgt en helt ny tekst, som erstatter den tidligere teksten.";
};

changeBtn.addEventListener('click', change);

// Oppgave 3
const input = document.getElementById('input');
const inputText = document.getElementById('input-text');


const removeStandardText = () => {
    inputText.innerHTML = null;
};

removeStandardText();

const newUserInput = (event) => {
    let word = event.key;
    inputText.innerHTML += word;
};

input.addEventListener('keyup', newUserInput);

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const list = document.getElementById('ul');
const listBtn = document.getElementById('write-list');

const printElements = () => {
    const liElements = myList.map((listElement) => `<li>${listElement}</li>`); //holy smokes
    list.innerHTML = liElements.join('');
}

listBtn.addEventListener('click', printElements);

// Oppgave 5
const placeholder = document.getElementById('placeholder');
const select = document.getElementById('select');
const text = document.getElementById('text');
const createBtn = document.getElementById('create');

const creativeMode = () => {
    const wordStyle = select.value;
    const creativeText = text.value;
    placeholder.innerHTML += `<${wordStyle}>${creativeText}</${wordStyle}>`;
};

createBtn.addEventListener('click', creativeMode);

// Oppgave 6
const removeLi = document.getElementById('list');
const removeLiBtn = document.getElementById('remove-li');

const removeList = () => {
  const previous = removeLi.lastElementChild;
  if (previous) {
    removeLi.removeChild(previous);
  }
};

removeLiBtn.addEventListener('click', removeList);

// Oppgave 7
const userName = document.getElementById('name');
const orderBtn = document.getElementById('order');

const inputName = () => {
    const name = userName.value;
    if (name && name.length >= 4){
        orderBtn.disabled = true;
        orderBtn.style = 'border:3px solid red';
    } else {
        orderBtn.disabled = false;
        orderBtn.style = 'border:3px solid green';
    }
};

userName.addEventListener('keyup', inputName);

// Oppgave 8 fuckings helt jævlig

const ulKlasseListe = document.querySelector('.children');
const ulKlasseBarn = ulKlasseListe.querySelectorAll('li');
const colorBtn = document.getElementById('color');

const addBorder = () => {
  Array.from(ulKlasseBarn).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = 'border: 3px solid pink; margin-bottom: 10px; padding: 5px;';
    } else {
      li.style = 'border: 3px solid green; margin-bottom: 10px; padding: 5px;';
    }
  });
};

colorBtn.addEventListener('click', addBorder);