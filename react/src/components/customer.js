import React, { Component } from 'react';

var Customer = (props) => {
    return(
        <li>
            <span>{props.name},{props.id}</span>
        </li>
    )
}



export default Customer;