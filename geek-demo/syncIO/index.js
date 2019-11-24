
interview(function(err, res) {
    if (err) {
        return console.log('cry 1st round', res)
    }
    console.log('smile');
})

function interview(callback) {
    setTimeout(() => {
        if( Math.random() < 0.5 ) {
            callback(null, 'success');
        } else {
            callback(new Error('fail'), 'fali');
        }
    }, 500);
}