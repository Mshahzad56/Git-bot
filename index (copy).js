
// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const { default: random } = require('random');
// const simpleGit = require("simple-git");
// const random = require('random')

// const FILE_PATH = './data.json';
// const makeCommit = n =>{
//     if(n===0) return simpleGit().push();
//     const x = random.int(0,54);
//     const y = random.int(0,6);

//     const DATE = moment().subtract(1,"d")
//                     add.(x, 'w').add(y,'d').format();

//     const data = {
//         data: DATE
//     };
//     console.log(DATE)
    
//     jsonfile.writeFile(FILE_PATH, data ()=>{
//         simpleGit().add([FILE_PATH]).commit(DATE,{'--date': DATE }, 
//         makeCommit.bind(this, --n));
    
//     });
    
// }
// makeCommit(100)



// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const random = require('random')
// const simpleGit = require('simple-git');

// const FILE_PATH = './data.json';

// const makeCommit = (n) => {
//     if (n === 0) return simpleGit().push();

//     const x = random.int(0, 54);
//     const y = random.int(0, 6);

//     const DATE = moment().subtract(1, 'd').add(x, 'w').add(y, 'd').format();

//     const data = {
//         data: DATE
//     };

//     console.log(DATE);

//     jsonfile.writeFile(FILE_PATH, data, (err) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log('Data has been written to data.json');

//             const git = simpleGit();
//             git.add([FILE_PATH]).commit(`Update data: ${DATE}`, {'--date': DATE}).push();
//             makeCommit(--n);
//         }
//     });
// };

// makeCommit(100);

// const { writeFile } = require('jsonfile');

import jsonfile from 'jsonfile';
import moment from 'moment';
import random from 'random';
import simpleGit from 'simple-git';

const FILE_PATH = './data.json';
const makeCommit = (n) => {
    if (n === 0) return simpleGit().push();

    const x = random.int(0, 54);
    const y = random.int(0, 6);

    const DATE = moment().subtract(1, 'd').add(x, 'w').add(y, 'd').format();

    const data = {
        data: DATE
    };
    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
    });
};

makeCommit(500);









