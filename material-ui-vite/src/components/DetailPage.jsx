import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import { TableData } from "./TableData";
import MuiList from "./MuiList";

export default function DetailPage() {
  const { value } = useParams(); // Get the person's name from the URL
  const person = TableData.find((item) => item.name === value);

  if (!person) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          No Details Found
        </Typography>
        <Link to="/">
          <Button variant="contained">Back</Button>
        </Link>
      </Box>
    );
  }

  const personDetails = [
    { label: "Name", value: person.name },
    { label: "Gender", value: person.gender },
    { label: "Age", value: person.age },
    { label: "Date of Birth", value: person.dob },
    {
      label: "Address",
      value: `${person.address}, ${person.city}, ${person.country}`,
    },
    { label: "Phone Number", value: person.phone_number },
  ];

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        {person.name}
      </Typography>
      <MuiList data={personDetails} />
      <Link to="/">
        <Button variant="contained" sx={{ mt: 2 }}>
          Back
        </Button>
      </Link>
    </Box>
  );
}
