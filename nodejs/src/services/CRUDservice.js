import db from '../models/index';
//hashpassword----
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
//hasspassword----
let createNewUser = async (data) => {

    console.log("--------------------------------------------------")
    console.log(data);
    console.log(data.firstName);
    console.log(data.email);
    const newpassword = await hashpasswordFunc(data.password);
    await db.User.create({
        email: data.email,
        password: newpassword,
        firstName: data.firstname,
        lastName: data.lastname,
        address: data.Address,
        gender: data.gender,
        roleType: data.roletype,
        roleKey: data.rolekey,
    })


}

let displaydata = () => {

    return new Promise((resolve, reject) => {
        resolve(db.User.findAll());
    })
}

let hashpasswordFunc = (password) => {
    return new Promise((resolve, reject) => {
        try {
            const hashPassWord = bcrypt.hashSync(password, salt);
            resolve(hashPassWord);
        }
        catch (e) {
            reject(e);
        }
    })
}


let getInforFromID = (id) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(db.User.findOne({ where: { id: id }, raw: true }));
        }
        catch (e) {
            reject(e);
        }
    })
}

let getInforFromEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(db.User.findOne({ where: { email: email }, raw: true }));
        }
        catch (e) {
            reject(e);
        }
    })
}

let updateUser = (data, condition) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: condition });
            if (user) {
                console.log(data.lastName);
                user.firstName = data.firstname;
                user.lastName = data.lastname;
                user.email = data.email;
                user.password = user.password;
                await user.save();
                resolve();
            }
            else reject(e);
        }
        catch (e) {
            console.log(e);
        }
    })
}

let deleteUser = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: id } });


            if (user) {
                await user.destroy();
            }
            resolve();
        }
        catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    hashpasswordFunc: hashpasswordFunc,
    getInforFromID: getInforFromID,
    displaydata: displaydata,
    updateUser: updateUser,
    deleteUser, deleteUser,
    getInforFromEmail: getInforFromEmail

}