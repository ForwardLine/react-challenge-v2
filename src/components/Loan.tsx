import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState, useEffect } from "react";

function LoanPage() {


  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Loan List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Loan Name</strong>
              </TableCell>
              <TableCell>
                <strong>Amount</strong>
              </TableCell>
              <TableCell>
                <strong>Rate</strong>
              </TableCell>
              <TableCell>
                <strong>Monthly Payment</strong>
              </TableCell>
              <TableCell>
                <strong>Agent ID</strong>
              </TableCell>
              <TableCell>
                <strong>Client Type</strong>
              </TableCell>
              <TableCell>
                <strong>First Contact</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={'id'}>
              <TableCell></TableCell>
            </TableRow >
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default LoanPage;
