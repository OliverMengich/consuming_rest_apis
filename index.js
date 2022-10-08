const fetch = require('node-fetch');
const util = require('util');
const a = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_ten', {
        method: 'GET'
    });
    console.log('I am here ')
    const data = await response.json();
    let x = JSON.stringify(data)
    let y = '{"jokes" : ' + x + " }";
    y = JSON.parse(y);

};
const jokesFile = util.promisify(a);
jokesFile((data) => {
    console.log(data.jokes[0]);
})
    .catch(err => {
        console.log('Error occured ' + err)
    })
// const jokesFile = util.promisify(a);
// jokesFile((data)=>{
//     module.exports = data.jokes[0];
// })
// .catch(err=>{
//     console.log('Error occured '+err)
// })
// console.log('End Of Start')

//======================================================= the HTTPS modulle=======================