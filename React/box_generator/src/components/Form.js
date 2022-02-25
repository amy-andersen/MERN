import React, { useState } from 'react'

const Form = (props) => {

    //destructure getter/setter props to use the keys as variables
    const {blockList, setBlockList} = props;

    const [color, setColor] = useState("");

    const submitForm = (e) => {
        e.preventDefault(); //prevent refresh upon submission

        //use spread to make a copy and then add new block to list
        setBlockList([...blockList,
            {color: color}
        ])
        
        setColor(""); //clear out the form once submitted
    }

    return(
        <form onSubmit={(e) => submitForm(e)}>
            <label>Color: </label>
            <input 
            onChange={(e)=>{
            setColor(e.target.value);
            }}
            value={color}
            type="text" />
            <button className="">Add</button>
        </form>
    )

}

export default Form;