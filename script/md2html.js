const showdown = require('showdown');
const path = require('path');
const fs = require('fs');

function convertMd2Html() {
    const md = fs.readFileSync(path.resolve(__dirname, '../README.md'), 'utf-8');
    showdown.setFlavor('github');
    const converter = new showdown.Converter();
    const mdHtml = converter.makeHtml(md);
    const buildDir = path.resolve(__dirname, '../build');
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir)
    }
    require.resolve('picnic');

    // const style = fs.readFileSync(path.resolve(__dirname, '../script/style.css'), 'utf-8');
    const style = fs.readFileSync(require.resolve('picnic'), 'utf-8');
    const tpl = fs.readFileSync(path.resolve(__dirname, '../script/tpl.html'), 'utf-8');

    html = tpl
        .replace(/\{\{style\}\}/, `<style>${style}</style>`)
        .replace(/\{\{md\}\}/, mdHtml);

    fs.writeFileSync(path.resolve(buildDir, 'index.html'), html, 'utf-8');
    console.log('convert md to html success!');
}

module.exports = convertMd2Html;
process.argv[1] === __filename && convertMd2Html();