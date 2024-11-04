
const fs = require('fs');

const leerJSON = (filename) => {
    return JSON.parse(fs.readFileSync(`./src/data/${filename}.json`, 'utf-8'));
};

const escribirJSON = (data, filename) => {
    fs.writeFileSync(`./src/data/${filename}.json`, JSON.stringify(data, null, 3), 'utf-8');
    return null;
};

module.exports = {
    leerJSON,
    escribirJSON,
};