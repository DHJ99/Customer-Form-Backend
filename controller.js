

const getUser= (cb) =>{
    cb(users);
};

const getUserById = () =>{
    const user = users.find(user => user.id == id);
    cd(user);
};

exports.getUsers = getUser;
exports.getUserById = getUserById;
