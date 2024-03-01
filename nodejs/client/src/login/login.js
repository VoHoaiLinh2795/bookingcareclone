import React from "react";
import './login.css';
import axios from 'axios';
import { loginsuccess } from "../actions/loginsuccess";
import { connect } from 'react-redux';




class Login extends React.Component {

    state = {
        username: '',
        password: '',
        wrongcode: '',
    }

    handleOnChange = (event, condition_name) => {
        console.log(this.state.username)
        if (condition_name === "Username") {
            this.setState({
                username: event.target.value
            });
            console.log(this.state.username)
        }
        else {
            this.setState({
                password: event.target.value
            });
            console.log(this.state.password)
        }
    }

    handleonclick = async () => {
        console.log(this.state.username, this.state.password);
        await axios.post('http://localhost:8081/api/login',
            {
                username: this.state.username,
                password: this.state.password,
            }
        ).then(async response => {
            console.log(response.data);
            alert("success");
            await this.props.loginsuccess();
        }).catch(error => {
            console.log(error);
            if (error.response.data.errcode == 1) {
                alert("unvalid username")
            }
            if (error.response.data.errcode == 3) {
                alert(error.response.data.message)
            }

            if (error.response.data.errcode == 4) {
                alert(error.response.data.message)
            }

        })



    }

    render() {
        return (
            <div id="backgroudd">
                <div id="loginform">
                    <FormHeader title="Login" />
                    <Form handleonclick={this.handleonclick} handleOnChange={this.handleOnChange} />
                    <OtherMethods />
                </div>
            </div>
        )
    }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

const Form = props => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" handleOnChange={props.handleOnChange} />
        <FormInput description="Password" placeholder="Enter your password" type="password" handleOnChange={props.handleOnChange} />
        <FormButton title="Log in" handleonclick={props.handleonclick} />
    </div>
);

const FormButton = props => (
    <div id="button" className="row">
        <button type="button" onClick={() => { props.handleonclick() }}>{props.title}</button>
    </div>
);

const tagforwrongcode = props => (

    <div>aaa</div>

);
const FormInput = props => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder} onChange={(event) => {
            props.handleOnChange(event, props.description);
        }} />
    </div>
);

const OtherMethods = props => (
    <div id="alternativeLogin">
        <label>Or sign in with:</label>
        <div id="iconGroup">
            <Facebook />
            <Twitter />
            <Google />
        </div>
    </div>
);

const Facebook = props => (
    <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
    <a href="#" id="twitterIcon"></a>
);

const Google = props => (
    <a href="#" id="googleIcon"></a>
);

const mapDispatchToProps = (dispatch) => {
    return {
        loginsuccess: () => dispatch(loginsuccess()),
    };
};

export default connect(null, mapDispatchToProps)(Login);
