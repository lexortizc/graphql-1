import { useStar } from '../hooks/useStar';
import { IconButton } from '@mui/material';
import { StarRate, StarBorder } from '@mui/icons-material';

export const StartButton = ({ isStared, item, type }) => {
  const { addFavorite, removeFavorite } = useStar();
  const color = (isStared) ? "warning" : "default"

  const toggleStar = () => {
    if( !isStared ) {
      addFavorite(type, item)
    } else {
      removeFavorite(type, item)
    }
  }

  return (
    <IconButton aria-label="star" color={ color } onClick={ toggleStar }>
      { isStared ? <StarRate /> : <StarBorder /> }
    </IconButton>
  )
}