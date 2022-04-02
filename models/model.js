/* eslint-disable require-jsdoc */
let models = [];

const fs = require('fs');
const {resolve} = require('path');
const path = require('path');

module.exports = class Model {
  // eslint-disable-next-line require-jsdoc
  constructor(name, life, strength, mana) {
    this.name = name;
    this.life = life;
    this.strength = strength;
    this.mana = mana;
  }

  static async fetchAll() {
    models = [];
    const p = path.join(path.dirname(require.main.filename),
        'data', 'models.json');
    return new Promise((resolve) => {
      fs.readFile(p, (err, fileContent) => {
        console.log(fileContent);
        if (!err) {
          models = JSON.parse(fileContent);
          // console.log(models);
          resolve(models);
        }
        resolve(models);
      });
    });
    // console.log(`RETURNING ${models}`);
    // return models;
  }


  async save() {
    models = await Model.fetchAll();
    console.log(`models ${models}`);
    const p = path.join(path.dirname(require.main.filename),
        'data', 'models.json');
    models.push(this);
    fs.writeFile(p, JSON.stringify(models), (err) => {
      console.log(err);
    });
  }
};
