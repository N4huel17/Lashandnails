import { readFileSync, writeFileSync } from 'fs';

export const leerJSON = (filename) => {
    return JSON.parse(readFileSync(`./src/data/${filename}.json`, 'utf-8'));
};

export const escribirJSON = (data, filename) => {
    writeFileSync(`./src/data/${filename}.json`, JSON.stringify(data, null, 3), 'utf-8');
    return null;
};