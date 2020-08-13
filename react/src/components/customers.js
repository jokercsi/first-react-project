import React, { Component } from 'react';
import Customer from './customer';

class Customers extends Component{
    
    state = {
        customers: ""
    }

    componentDidMount() {
        this.callApi()
        .then(res => this.setState({customers:res}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
    }

    render() {
        return (
            <ul>
            {this.state.customers ? this.state.customers.map(c => {
                return (<Customer key ={c.id} id={c.id} name ={c.name}/>)
            }) : "" 
            }            
            </ul>
        );
    }
}

export default Customers;