
const geektime = require('./lib');

geektime.addListener('new lesson', (res) => {
    if (res.price < 80) {
        console.log('buy!', res);
    }
})