//install express and faker
const express = require("express");
const faker = require('faker');
const app = express();

//function to return a random user
const createUser = () => {
    const newUser = {
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

//function to return a random company
const createCompany = () => {
    const newCompany = {
        id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        street: faker.address.streetName(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
    return newCompany;
};

const newFakeUser = createUser();
console.log(newFakeUser);

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    const responseObject = {
        user: newFakeUser,
        company: newFakeCompany
    };
    res.json(responseObject);
});

//app.listen is the code that actually runs the server on a specified port 
const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);