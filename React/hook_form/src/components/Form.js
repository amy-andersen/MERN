import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");

    const createUser = (e) => {
        e.preventDefault(); //prevent default refresh of browser to keep data from being reset

        const newUser = {firstName, lastName, email, password, confirmPassword}; //build an object 
        //clear form data after submitted
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    //display form 
    return(
        <form onSubmit={ createUser }>
            <div className="container">
                <div className="form">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value) } /> 
                </div>
                <div className="form">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className="form">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="form">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="form">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="text" name="confirmPassword" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
            </div>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {confirmPassword} </p>
            </div>
        </form>
    );
};

export default Form;