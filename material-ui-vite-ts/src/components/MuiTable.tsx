import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { TableData } from "./TableData";

export default function MuiTable() {
  return (
    <TableContainer component={Paper}>
      <Typography variant="body1" gutterBottom>
        Click on the name to view more details
      </Typography>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <Link
                  to={`/${row.name}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {row.name}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
