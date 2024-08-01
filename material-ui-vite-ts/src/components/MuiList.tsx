import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Detail } from "./DetailPage";

interface MuiListProps {
  data: Detail[];
}

/**
 * Person's details: name, age, gender, dob, address, phone number
 * @param param0 - data of the person
 * @returns - List of a person's details
 */
export default function MuiList({ data }: MuiListProps) {
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
