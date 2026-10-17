import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function MUITable() {
  const employees = [
    { id: 1, firstName: "Mert", lastName: "Gözübüyük", age: 21 },
    { id: 2, firstName: "Hasan", lastName: "Bacak", age: 30 },
    { id: 3, firstName: "Gizem", lastName: "Kaçar", age: 24 },
    { id: 4, firstName: "Rıza", lastName: "Demir", age: 34 },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>FIRST NAME</TableCell>
            <TableCell>LAST NAME</TableCell>
            <TableCell>AGE</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.firstName}</TableCell>
              <TableCell>{employee.lastName}</TableCell>
              <TableCell>{employee.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MUITable;
