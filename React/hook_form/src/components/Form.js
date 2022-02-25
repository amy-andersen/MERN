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
            <div className="col-5 mx-auto bg-dark text-info p-5 rounded">
                {hasBeenSubmitted 
                ? <h3>Thank you for submitting the form!</h3> 
                : <h3>Welcome, please submit the form.</h3>}
                <div className="form-group">
                    <label htmlFor="firstName" className="d-flex text-start">First Name:</label>
                    <input type="text" name="firstName" className="form-control" value={firstName} onChange={ (e) => setFirstName(e.target.value) } /> 
                    {firstName.length < 2 && firstName.length > 0 
                    ? <p className="text-light">First Name must be at least 2 characters.</p>
                    : null}
                    <label htmlFor="lastName" className="d-flex text-start">Last Name:</label>
                    <input type="text" name="lastName" className="form-control" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                    {lastName.length < 2 && lastName.length > 0 
                    ? <p className="text-light">Last Name must be at least 2 characters.</p>
                    : null}
                    <label htmlFor="email" className="d-flex text-start">Email:</label>
                    <input type="text" name="email" className="form-control" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    {email.length < 5 && email.length > 0 
                    ? <p className="text-light">Email must be at least 5 characters.</p>
                    : null}
                    <label htmlFor="password" className="d-flex text-start">Password:</label>
                    <input type="text" name="password" className="form-control" value={password} onChange={ (e) => setPassword(e.target.value) } />
                    {password.length < 8 && password.length > 0 
                    ? <p className="text-light">Password must be at least 8 characters.</p>
                    : null}
                    <label htmlFor="confirmPassword" className="d-flex text-start">Confirm Password:</label>
                    <input type="text" name="confirmPassword" className="form-control" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                    {confirmPassword !== password 
                    ? <p className="text-light">Passwords must match</p> 
                    : null}
                    <input type="submit" class="btn btn-warning mt-4" value="Creat User" />
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