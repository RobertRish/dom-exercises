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