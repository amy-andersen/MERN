import React from 'react'
import SubContents from './SubContents'
import Advertisement from './Advertisement'

const Main = () => {
    return(
        <div style={{
            display: "inline-block",
            backgroundColor: "red",
            margin: "10px",
            height: "390px",
            width: "380px"
        }}
        >
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </div>
    );
}

export default Main;