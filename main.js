const styles = require('./global/global.tokens.json');
const fs = require('fs');
const html = (list) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../build/css/_variables.css" />
    <title>Style Guide</title>
    <style>
    body { font-family: monospace; background: #eee; display: grid; gap:1rem; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));}
    div {display: grid;}
    .swatch { aspect-ratio: 1; }
    h2{ grid-column: 1/-1;}
    </style>
</head>
<body>
    ${list}
</body>
</html>
`;

const generateGuide = (tokenSet = 'global') => {
  const styleList = Object.entries(styles[tokenSet]).reduce(
    (list, [name, { type, value }]) => {
      if (type === 'color') {
        list += `\n<div><span class="swatch" style="background: var(--${tokenSet}-${name});"></span><span>${name}: ${value}</span></div> `;
      }

      return list;
    },
    `<h2>${tokenSet}</h2>`
  );

  fs.writeFileSync('./build/style-guide.html', html(styleList));
  console.log('File generated.');
};

module.exports = generateGuide();
