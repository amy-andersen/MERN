import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const AllAuthors = (props) => {

    //setting up state to keep all authors
    const [authorList, setAuthorList] = useState([]);

    //make get request to API upon loading
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err)=>console.log(err))
    }, []);

    //delete request to delete one author
    const deleteAuthor = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res.data);
                setAuthorList(authorList.filter(author=>author._id !== idFromBelow));
            })
            .catch((err)=>console.log(err))
    }

    //return table of all authors, with options to edit and delete
    return (
        <div className="col-8 mx-auto border border-5 border-dark p-5 rounded mt-5 ">
            <h1 className="text-info">Favorite authors</h1>
            <Link to="/new">Add an author</Link>
            <h3>We have quotes by:</h3>
            <table className="table table-info table-striped">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                {
                authorList.map((author, index) => (
                    <tr key = {author.id}>
                        <td>{author.name}</td>
                        <td>
                            <Link className="mx-2 btn btn-warning" to={`/edit/${author._id}`}>Edit</Link>
                            <button className="btn btn-danger" onClick={()=>deleteAuthor(author._id)}>Delete</button>
                        </td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;