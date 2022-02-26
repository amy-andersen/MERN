import React, {useState} from 'react'

const Form = (props) => {

    const{toDoList, setToDoList} = props;

    const [item, setItem] = useState("");

    const addItem = (e) => {
        e.preventDefault();
        //use spread to make a copy of the array and then add new item
        setToDoList([...toDoList,
            {
                item: item,
                completed: false,
                id: Math.floor(Math.random() * 10000).toString()
            }
        ])
        //clear out the form after submitting
        setItem(""); 
    }

    return(
        <div className="col-5 mx-auto bg-dark text-info p-5 rounded">
            <h3>Add a task!</h3>
            <form onSubmit={(e)=>addItem(e)} className="form-group">
                <label htmlFor="item" className="d-flex text-start">Task:</label>
                <input type="text" name="item" className="form-control" value={item} onChange={ (e) => setItem(e.target.value) } /> 
                <input type="submit" className="btn btn-warning mt-4" value="Add" />
            </form>
        </div>
    )

}

export default Form