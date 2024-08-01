// //  Synchronous Callbacks
// const greet = (name, callback) => {
//     console.log(`Hello ${name}`);
//     callback();
// }
// const goodbye = () => console.log("Goodbye!");
// greet('Josh', goodbye)

// Asynchronous Callbacks
// const fetchData = (callback) => {
//     setTimeout(() => {
//         console.log('Data fetched');
//         callback();
//     }, 1000);
// }

// const processData = () => {
//     console.log('processing data');
// }
// fetchData(processData);

const fetchData2 = (callback) => {
    setTimeout(() => {
        const data = 'API data';
        callback(data);
    }, 1000);
}
fetchData2((data) => {
    console.log(data);
});
