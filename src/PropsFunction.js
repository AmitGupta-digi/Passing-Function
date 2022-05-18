import React from "react";
export default function Props(props){
    return(
        <>
        <h3>This is the example of passing function as props </h3>
        <button onClick={props.time}>Call month as function{props.mo} </button></>
    )
}