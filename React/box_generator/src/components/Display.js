import React, { useState } from 'react'

const Display = (props) => {

    //destructure getter props to use the keys as variables
    const {blockList} = props;

    return(
        <div>
            {
                blockList.map((block, index) => (
                        <div key={index} style={{
                            display: "inline-block",
                            backgroundColor: block.color,
                            margin: "10px",
                            height: "100px",
                            width: "100px"
                            }}
                        >
                        </div>
                ))
            }
        </div>
    );

}
export default Display;