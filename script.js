// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Step 1 a <p> with red text that says “Hey I’m red!”
const pRed = document.createElement('p');
pRed.textContent = "Hey I'm red!";
pRed.style.cssText = "color: red;";
container.appendChild(pRed);

// an <h3> with blue text that says “I’m a blue h3!”

const h3Blue = document.createElement('h3');
h3Blue.textContent = "I'm a blue h3";
h3Blue.style.cssText = "color: blue;";
container.appendChild(h3Blue);

// a <div> with a black border and pink background color with the following elements inside of it:
const otherDiv = document.createElement('div');
otherDiv.style.backgroundColor = "pink";
otherDiv.style.height = "100px";
otherDiv.style.border = "thick solid black";
container.appendChild(otherDiv);

// another <h1> that says “I’m in a div”
const otherH1 = document.createElement('h1');
otherH1.textContent = "I'm in a div";
otherDiv.appendChild(otherH1);

// a <p> that says “ME TOO!”
const otherP = document.createElement('p');
otherP.textContent = "ME TOO!";
otherDiv.appendChild(otherP);

// events
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  // commit
  // commit
  // commit
  // commit
  // commit
  // commit