import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
let handlogin = async (req, res) => {
    console.log(req.body.email)
    let username = req.body.username;
    let password = req.body.password;
    //missing
    if (!username || !password) {
        return res.status(500).json({
            errcode: 2,
            message: "missing"
        })
    }
    //unvalid email
    if (!validateEmail(username)) {
        return res.status(500).json({
            errcode: 1,
            message: "unvalid username"
        })
    }
    //check database
    let user = await checkdatabase(username);
    if (!user) {
        return res.status(500).json({
            errcode: 3,
            message: "not existing"
        })
    }

    //check password
    if (await checkpassword(username, password) == false) {

        return res.status(500).json({
            errcode: 4,
            message: "wrong password"
        })
    }

    return res.status(200).json(user)
}

let validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputEmail);
    return isValid;
};

let checkdatabase = async (username, password) => {
    const userData = await CRUDservice.getInforFromEmail(username);
    return userData;
};

let checkpassword = async (email, passwordd) => {
    const user = await checkdatabase(email);
    const newpassword = await CRUDservice.hashpasswordFunc(passwordd);
    console.log("--------/-*////////////*/-*/--/");
    console.log("passwordriel", passwordd);
    console.log(user.password, "and", newpassword);
    // for easier , that wrong , below true , true
    if (newpassword === user.password)
        return true;
    else return true;
}

let addNewUser = async (req, res) => {
    let data = req.body;
    console.log(req.body);
    try {
        await db.User.create({
            email: data.email,
            password: newpassword,
            firstName: data.firstname,
            lastName: data.lastname,

        })
    } catch (e) {
        return res.status(400).json({ message: e })
    }

    return res.status(200).json({
        message: 'success'
    })
}

let modifyUser = async (req, res) => {

    let data = req.body;
    try {
        let user = await db.User.findOne({ where: { email: data.email }, raw: true });
        if (user) {
            console.log(data.lastName);
            user.firstName = data.firstname;
            user.lastName = data.lastname;
            user.email = data.email;
            await user.save();
            return res.status(200).json({
                message: "success"
            })

        }

    } catch (e) {
        return res.status(400).json({ message: e })
    }
}

let getAllUser = async (req, res) => {
    let data
    try {
        data = await db.User.findAll();
        console.log(data);
    } catch (e) {
        return res.status(400).json({
            message: e
        })
    }
    return res.status(200).json({
        message: 'success',
        data: data,
    })
}



module.exports = {
    handlogin: handlogin,
    addNewUser: addNewUser,
    modifyUser: modifyUser,
    getAllUser: getAllUser,
}