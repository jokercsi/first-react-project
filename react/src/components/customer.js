import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

var Customer = (props) => {
    return(
        <TableRow>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.id}</TableCell>
        </TableRow>
    )
}



export default Customer;