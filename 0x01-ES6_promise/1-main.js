import ChymezyAPI from './1-promise';
import getResponseFromAPI from './1-promise';

// console.log(ChymezyAPI(true));
// console.log(ChymezyAPI(false));

ChymezyAPI(true)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error.message);
    });

ChymezyAPI(false)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error.message);
    });

// console.log(getResponseFromAPI(true));