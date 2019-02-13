var fs = require('fs');
var showdown = require('showdown');

var baseHtml = `<!DOCTYPE html> +
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Web Components Library</title>
  </head>
  <body>
    <h1>Web Components Library</h1>
    <x-carousel>
      <x-carousel-page
        headertext="Hey Jude, don't make it bad"
        bodytext="Take a sad song and make it better. Remember to let her into your heart. Then you can start to make it better."
      >
      </x-carousel-page>
      <x-carousel-page
        headertext="Hey Jude, don't be afraid."
        bodytext="You were made to go out and get her. The minute you let her under your skin. Then you begin to make it better."
      >
      </x-carousel-page>
      <x-carousel-page
        headertext="And anytime you feel the pain, hey Jude, refrain."
        bodytext="Don't carry the world upon your shoulders. For well you know that it's a fool who plays it cool. By making his world a little colder. Nah nah nah nah nah nah nah nah nah."
      >
      </x-carousel-page>
      <!-- <x-carousel-page
        headertext="Hey Jude, don't make it bad"
        bodytext="Take a sad song and make it better. Remember to let her into your heart. Then you can start to make it better."
      >
      </x-carousel-page> -->
    </x-carousel>
    <hr />
    <x-icon></x-icon>
    <hr />
    <x-image></x-image>
  </body>
</html>`;

fs.writeFile('docs/index.html', baseHtml, function(err) {
  if (err) throw err;
  console.log('Saved!');
});

let output = '';
const componentsDir = './src/components';
const componentDirs = fs.readdirSync(componentsDir, (err, subDirs) => subDirs);
const converter = new showdown.Converter();

componentDirs.forEach(componentDir => {
  fs.readFile(
    `${componentsDir}/${componentDir}/README.md`,
    'utf8',
    (err, data) => {
      console.log(err);
      if (data) {
        const matches = data.match(/(?<=```\n)((.|\n)*)(?=\n```)/gm);
        console.log(matches);
      }
      const html = converter.makeHtml(data);
      console.log(html);
    },
  );
});

// function readMarkdown() {
//   return fs.readFileSync('./src/components/x-carousel/README.md', 'utf8');
// }
