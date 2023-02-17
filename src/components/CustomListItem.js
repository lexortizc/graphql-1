
import { StartButton } from './StarButton';
import { ListItem } from '@mui/material';

export const CustomListItem = ({ children, text, item, isStared, type }) => {
  return (
      <ListItem>
        <StartButton isStared={ isStared } item={ item } type={ type } />
        { (text) ? text : children }
      </ListItem>
  )
}
