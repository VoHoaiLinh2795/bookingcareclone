import React from "react";
import './addNewUserCpn.css';
import { useState } from "react";
import axios from "axios";
function AddNewUser(props) {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send data to backend
        console.log(formData);
        await axios.post('http://localhost:8081/system/addNewUser', {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        }).catch(e => {
            console.log(e);
        })
        // Reset form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
    };

    const cacelAction = () => {
        props.setFixState(pre => !pre)
    }

    return (
        <form onSubmit={handleSubmit} className="addnewusertable">
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">add</button>
            <button onClick={() => cacelAction()}>cancel</button>
        </form>
    )
}

export default AddNewUser;