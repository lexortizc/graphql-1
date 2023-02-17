
import { Box } from '@mui/material';

export const FavoriteBox = ({ totalFav }) => {

  return (
    <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
      { totalFav > 1 && `${ totalFav } favorites`}
      { totalFav === 1 && `${ totalFav } favorite`}
    </Box>
  )
}