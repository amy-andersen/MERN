import React from 'react'

const List = (props) => {

    const{toDoList, setToDoList} = props;

    const deleteItemById = (idFromBelow) => {
        //user filter to return a new array where condition is met. In this case not= id we want to delete
        setToDoList(toDoList.filter((item, index)=> item.id !== idFromBelow))
    };

    const completeToDo = (id,isCompleted) => {
        setToDoList(toDoList.map(toDo=> toDo.id===id?{...toDo,completed:!isCompleted}:toDo))
    };

    return(
        <div className="col-5 mx-auto bg-dark text-info p-5 rounded mt-2">
            <h3>Your tasks:</h3>
            {
                toDoList.map((item, index) => {
                    return (
                        <div key={index} className="d-flex justify-content-between align-items-center text-light list-group-item bg-dark">
                            <input className="align-middle" type="checkbox" checked={item.completed} onChange={()=>completeToDo(item.id,item.completed)}></input>                           
                            {
                                item.completed?
                                    <p className="Strikethrough">{item.item}</p>
                                    :
                                    <p>{item.item}</p>
                            }
                            <button className="btn btn-danger" onClick={()=>deleteItemById(item.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default List