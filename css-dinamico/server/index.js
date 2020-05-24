const fs = require('fs');
const Handlebars = require("handlebars");

let idAliado = 'styles';

const dataHandlebars = { 
    mainColor: '#ffffff',
    primaryColor: '#2FC4F5',
    secondaryColor: '#F54676',
    editColor: '#4caf50',
    dangerColor: '#dd2c00',
    correctColor: '#4caf50',
    errorColor: '#dd2c00',
    cardColor: 'white'
};
var handlebars = fs.readFileSync('server/styles.hbs', 'utf8');
//console.log(handlebars);
//fs.writeFileSync('server/css/styles.css', handlebars)

const template = Handlebars.compile(handlebars);
const dataTemplate = template(dataHandlebars);
const pathFile = `server/css/${idAliado}.css`;

fs.writeFileSync(pathFile, dataTemplate);