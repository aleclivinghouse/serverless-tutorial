const Responses = require('../common/API_Responses');

exports.handler = async event => {
    console.log('event', event);
    if(!event.pathParameters || !event.pathParameters.ID){
        return Responses._400({message: 'Missing the ID from the path'})
    }

    let ID = event.pathParameters.ID;
    if(data[ID]){
        return Responses._200(data[ID]);
    }

    return Responses._400({message: 'no ID in data'});
} 

const data = {
    1234: {name: 'Anna Jones', age: 25, job: 'journalist'},
    7893: {name: 'Bob Smith', age: 52, job: 'Truck Driver'},
    5132: {name: 'Jane Turner', age: 45, job: 'Librarian'}
}