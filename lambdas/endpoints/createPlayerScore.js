const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo');
const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);
    if(!event.pathParameters || !event.pathParameters.ID){
        return Responses._400({message: 'Missing the ID from the path'})
    }

    let ID = event.pathParameters.ID;
    const user = JSON.parse(event.body);
    user.ID = ID

    const newUser = await Dynamo.write(user, tableName).catch(err => {
        console.log("this is the error in createPlayerScore: ", err);
        return null;
    })

    if(!newUser){
        return Responses._400({message: 'Failed to get user by ID'})
    }

    return Responses._200({newUser});
} 
