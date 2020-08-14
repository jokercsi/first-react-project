import React, { Component } from 'react';
import Customer from './customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
            <div className ="customers-table">
            <Table>
            <TableHead>
              <TableRow>
                <TableCell>이름</TableCell>
                <TableCell>번호</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
                return (<Customer key ={c.id} id={c.id} name ={c.name}/>)
            }) : "" 
            }     
            </TableBody>
            </Table>
            </div>
        );
    }
}

export default Customers;