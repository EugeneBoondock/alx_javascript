#!/usr/bin/node

function changeMode(size, weight, transform, background,  color) {
  return function() {
    document.body.style.font-size = size + 'px';
    document.body.style.font-weight = weight;
    document.body.style.text-transform = transform;
    document.body.style.background-color = background;
    document.body.style.color = color;
  };
}

function main() {
  var spooky = changeMode(9, bold, uppercase, pink, green);
  var darkMode = changeMode(12, bold, capitalize, black, white);
  var screamMode = changeMode(12, normal, lowercase, white, black);

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';

  document.body.appendChild(paragraph);

  const buttonsDiv = document.createElement('div');

  const spookyButton = document.createElement('button')
  spookyButton.textContent = 'Spooky';
  spookyButton.addEventListener('click', spooky);
  

  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'DarkMode';
  darkModeButton.addEventListener('click', darkMode);
  
  const screamModeButton= document.createElement('button');
  screamModeButton.textContent = 'ScreamMode';
  screamModeButton.addEventListener('click', screamMode);

  buttonsDiv.appendChild(spookyButton);
  buttonsDiv.appendChild(darkModeButton);
  buttonsDiv.appendChild(screamModeButton);

  document.body.appendChild(buttonsDiv);
}
main();
