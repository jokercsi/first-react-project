import React, { Component } from 'react';

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
        const response = await fetch('/api/cutomers');
        const body = await response.json();
        return body;
    }

    render() {
      return (
        {this.state.customers ? this.state.customers.map(c => {
            return (<p key ={c.id} id={c.id} name ={c.name}></p>);
        }) : "" 
        }
    }
}

export default Customers;