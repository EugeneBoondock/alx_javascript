function changeMode(size, weight, transform, background, color) {
  return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
  };
}

function main() {
  var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  const buttonsDiv = document.createElement('div');

  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.addEventListener('click', spooky);

  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark Mode';
  darkModeButton.addEventListener('click', darkMode);

  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream Mode';
  screamModeButton.addEventListener('click', screamMode);

  buttonsDiv.appendChild(spookyButton);
  buttonsDiv.appendChild(darkModeButton);
  buttonsDiv.appendChild(screamModeButton);

  document.body.appendChild(buttonsDiv);
}

main();
