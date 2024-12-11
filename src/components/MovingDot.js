import React from "react";

const MovingDot = ({position})=>{
    return(
        <div style={{
           position: 'absolute',
        border: '5px solid red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: 5,
        top: 3,
        width: 20,
        height: 20,
        }}></div>
    )
}
export default MovingDot;