import uploadPhoto from './5-photo-reject'

uploadPhoto('guillaume.png')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error.message)
    });
