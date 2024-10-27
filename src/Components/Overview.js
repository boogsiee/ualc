import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import axios from 'axios';  // Import axios directly

const columns = [
  { width: 100, label: 'Student ID', dataKey: 'student_id' },
  { width: 100, label: 'First Name', dataKey: 'first_name' },
  { width: 100, label: 'Last Name', dataKey: 'last_name' },
  { width: 150, label: 'Email', dataKey: 'email' },
  { width: 100, label: 'Contact Number', dataKey: 'contact_number' },
  { width: 100, label: 'ROTC Unit', dataKey: 'rotc_unit' },
  { width: 150, label: 'Date of Registration', dataKey: 'date_of_registration' },
  { width: 100, label: 'Username', dataKey: 'username' }
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align="left"
          style={{ width: column.width }}
          sx={{ backgroundColor: 'background.paper' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell key={column.dataKey} align="left">
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function Overview() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/api/students')  // Use the full URL for the endpoint
      .then((response) => {
        setRows(response.data);  // Sets the data for the table rows
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
