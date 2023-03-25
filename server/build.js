// build.js
const exe = require('@angablue/exe');

const build = exe({
    entry: './main.js',
    out: './build/Gameflip Rocket League Items Bot.exe',
    pkg: ['-C', 'GZip'], // Specify extra pkg arguments
    productVersion: '2.4.2',
    fileVersion: '2.4.2',
    target: 'latest-win-x64',
    icon: './assets/icon.ico', // Application icons must be in .ico format
    properties: {
        FileDescription: 'Gameflip Rocket League Items Bot',
        ProductName: 'Gameflip Rocket League Items Bot',
        LegalCopyright: 'AngaBlue https://anga.blue',
        OriginalFilename: 'Gameflip Rocket League Items Bot.exe'
    }
});

build.then(() => console.log('Build completed!'));