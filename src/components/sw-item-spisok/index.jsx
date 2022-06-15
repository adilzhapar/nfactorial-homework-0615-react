import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const ItemSpisok = ({ children, theme }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={children} />
      </ListItemButton>
    </ListItem>
  );
};
