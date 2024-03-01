import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('-------------------------')
        console.log(data);
        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    }
    catch (e) {

        console.log(e);
    }
}

let getsth = (req, res) => {
    return res.render('./about/test')
}

let getcrud = async (req, res) => {
    await CRUDservice.createNewUser(req.body);
    return res.render('crud.ejs');
}

let display = async (req, res) => {
    let data = await CRUDservice.displaydata();
    console.log('-----------------');
    console.log(data);
    console.log('-----------------');

    return res.render('display.ejs', {
        datatable: data
    });
}

let edit_CRUD = async (req, res) => {
    let userID = req.query.id;
    if (userID) {
        let userData = await CRUDservice.getInforFromID(userID);
        if (userData) {
            console.log('===================================')
            console.log(userData)
            return res.render('putCRUD.ejs', {
                userData: userData,
            })
        }
        else return res.send('not found')
    }
    else { return res.send('not found') }
}

let put_CRUD = async (req, res) => {

    await CRUDservice.updateUser(req.body, { id: req.body.id });
    console.log("=============================")
    console.log(req.body);
    let userData = await CRUDservice.getInforFromID(req.body.id);
    let data = await CRUDservice.displaydata();
    return res.render('display.ejs', {
        datatable: data
    });


}
let delete_CRUD = async (req, res) => {

    console.log('delete is running')

    await CRUDservice.deleteUser(req.query.id);
    let data = await CRUDservice.displaydata();
    return res.render('display.ejs', {
        datatable: data
    });


}




module.exports = {
    getHomePage: getHomePage,
    getsth: getsth,
    getcrud: getcrud,
    display: display,
    edit_CRUD: edit_CRUD,
    put_CRUD: put_CRUD,
    delete_CRUD: delete_CRUD,
}