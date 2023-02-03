import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";


const DetailsPage = () => {
  const [details, setDetails] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <>
      {/* { details.map((data) => { */}
      {/* <TableContainer component={Paper}>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">contact</TableCell>
              <TableCell align="left">city</TableCell>
              <TableCell align="left">state</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
              <TableRow>
                <TableCell align="left">23333</TableCell>
                <TableCell align="left">bhojpur</TableCell>
                <TableCell align="left">uk</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer> */}
      {/* }) */}
      {/* } */}

      <Paper>
      
      </Paper>
    </>
  );
};

export default DetailsPage;
