import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); //default value user hasn't submitted form yet

    const createUser = (e) => {
        e.preventDefault(); //prevent default refresh of browser to keep data from being reset

        const newUser = {firstName, lastName, email, password, confirmPassword}; //build an object 
        //clear form data after submitted
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setHasBeenSubmitted( true );
    };

    //display form 
    return(
        <form onSubmit={ createUser }>
            <div className="container">
                {hasBeenSubmitted 
                ? <h3>Thank you for submitting the form!</h3> 
                : <h3>Welcome, please submit the form.</h3>}
                <div className="form">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value) } /> 
                </div>
                {firstName.length < 2 && firstName.length > 0 
                ? <p>First Name must be at least 2 characters.</p>
                : null}
                <div className="form">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                {lastName.length < 2 && lastName.length > 0 
                ? <p>Last Name must be at least 2 characters.</p>
                : null}
                <div className="form">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                {email.length < 5 && email.length > 0 
                ? <p>Email must be at least 5 characters.</p>
                : null}
                <div className="form">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                {password.length < 8 && password.length > 0 
                ? <p>Password must be at least 8 characters.</p>
                : null}
                <div className="form">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="text" name="confirmPassword" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                {confirmPassword !== password 
                ? <p>Passwords must match</p> 
                : null}
                <div>
                    <input type="submit" value="Creat User" />
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