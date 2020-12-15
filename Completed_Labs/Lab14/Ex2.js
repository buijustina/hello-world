const fs = require('fs');

const user_data_filename = 'user_data.json';

//check if file exists before reading
if (fs.existsSync(user_data_filename)) {
    stats = fs.statSync(user_data_filename);
    console.log(`user_data.json has ${stats['size']}characters`);

    var data = fs.readFileSync(user_data_filename, 'utf-8');
    user_reg_data = JSON.parse(data);
    //if user exists, get their pass
    if (typeof user_reg_data['itm352'] != 'undefined') {
        console.log(user_reg_data['itm352']['password'] == 'XXX');
    }
} else {
    console.log(`ERR: ${user_data_filename} does not exist!!!`);
}

//console.log(user_data_filename, typeof user_reg_data, typeof data);