import React from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

/**
 * Person's details: name, age, gender, dob, address, phone number
 * @param {*} param0 - data of the person
 * @returns {JSX.Element} - List of a person's details
 */
export default function MuiList({ data }) {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef", mx: "auto" }}>
      <List>
        {data.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={item.label} secondary={item.value} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
