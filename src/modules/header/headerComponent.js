import React, { useState } from 'react'
import { Column, Row } from "simple-flexbox";
import { Button } from "@material-ui/core";
import CustomInput from "../../common/components/CustomInput";
import { history } from "../../managers/history";
import "../../assets/styles/custom.css";
// import "../../assets/styles/images";
import utility from '../../utility';
// import validator from 'validator';

export default function Header() {


    const handlePassword = () => {
        history.push('/forgot-password');
    }


    const [passwordValid, setPasswordValid] = React.useState("");
    const [emailValid, setEmailValid] = React.useState("");
    const [emailError, setEmailError] = useState('')


    // const validateEmail = (e) => {



    //     if (validator.isEmail(emailValid)) {

    //         history.push('/dashboard')

    //     }

    //     else {

    //         setEmailError('Please enter a valid email address')

    //     }
    // }



    return (
        <div className="header-div">
            


        </div>

    )
}

