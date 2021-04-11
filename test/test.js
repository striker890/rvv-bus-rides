const config = require('../res/config.json');
const app = require('../src/index');

app.getData(config.url).then(rides => {
    console.log(rides);
}).catch(err => {
    console.log(error);
});
