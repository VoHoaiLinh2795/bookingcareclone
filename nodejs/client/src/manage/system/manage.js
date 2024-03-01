import React, { useState, useEffect } from 'react';
import './manage.css';
import axios from 'axios';
import AddNewUser from './addNewUserCpn';

function Manage() {
    const [alldata, setAlldata] = useState([]);
    const [fixState, setFixState] = useState(false);



    const fetchData = async () => {

        await axios.post('http://localhost:8081/system/getAll').then(response => {
            console.log(response.data.data);
            setAlldata(response.data.data)
        }).catch(e => {
            console.log(e);
        })



    };


    const onclickAdd = async () => {
        await axios.post('http://localhost:8081/system/addNewUser').then(() => {
            fetchData();
        }).catch(e => {
            console.log(e);
        })
    }

    let listdata = alldata.map(item =>
    (
        <tr className='content'>
            <th>{item.firstName}</th>
            <th> {item.lastName}</th>
            <th> {item.email}</th>
            <th>
                <button >fix</button>
                <button>delete</button>
            </th>
        </tr>


    )

    )



    return (
        <div className='containerManage'>
            <button onClick={() => setFixState(pre => (!pre))}>AddNewUser</button>
            <button onClick={() => fetchData()}>click here</button>
            {fixState ? <AddNewUser setFixState={setFixState} /> : null}

            <table className="customers">
                <thead>
                    <tr className='headtitle'>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>email</th>
                        <th>modify</th>
                    </tr>
                </thead>
                <tbody>
                    {listdata}
                </tbody>



            </table>

        </div>
    );
}

export default Manage;
