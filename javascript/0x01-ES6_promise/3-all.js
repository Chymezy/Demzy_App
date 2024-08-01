/*
    In this file, import uploadPhoto and createUser from utils.js
    Knowing that the functions in utils.js return promises, use the prototype 
    below to collectively resolve all promises and log body firstName lastName to the console.
    function handleProfileSignup()
    In the event of an error, log Signup system offline to the console
*/
import { uploadPhoto, createUser, userCity } from "./utils";
export default function handleProfileSignup()
{
    Promise.all([uploadPhoto(), createUser(), Promise.resolve(userCity)])
        .then(([photoResponse, userResponse, cityResponse]) => {
            console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName} ${cityResponse}`)

        })
        .catch(() => {
            console.log('Signup system offline');
        });
}

