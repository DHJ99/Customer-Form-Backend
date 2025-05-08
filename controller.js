const users = [
    {
        id : 1,
        name: 'Amal'
    },
    {
        id:2,
        name:'Bimal'
    },
    {
        id:3 ,
        name: 'Nimal'
    }
];

const getUser= (cb) =>{
    cb(users);
};

const getUserById = () =>{
    const user = users.find(user => user.id == id);
    cd(user);
};

exports.getUsers = getUser;
exports.getUserById = getUserById;
