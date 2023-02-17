import { Dialog, List, ListItem } from '@mui/material';

export const CountryDetailsModal = ({ country, isOpen, handleModal }) => {
  const { code, name, currency, emoji, phone, states } = country

  return (
    <Dialog onClose={ () => { handleModal(country, false)} } open={ isOpen }>
      <List sx={{ pt: 0 }}>
        <ListItem> code: {code} </ListItem>
        <ListItem> name: {name} </ListItem>
        <ListItem> currency: {currency} </ListItem>
        <ListItem> emoji: {emoji} </ListItem>
        <ListItem> phone: {phone} </ListItem>
        <ListItem> states: {states?.length} </ListItem>
      </List>
    </Dialog>
  );
}