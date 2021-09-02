import React, { useState } from 'react';


const Form = (props) => {

    const { inputs, setInputs } = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

    };

    return (
        <form>
            <div className="form">
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName" />
            </div>
            <br></br>
            <div className="form">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" />
            </div>
            <br></br>
            <div className="form">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email" />
            </div>
            <br></br>
            <div className="form">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="text" name="password" />
            </div>
            <br></br>
            <div className="form">
                <label htmlFor="confirmPassword">ConfirmPassword</label>
                <input onChange={onChange} type="text" name="confirmPassword" />
            </div>
        </form>
    );
};

export default Form;