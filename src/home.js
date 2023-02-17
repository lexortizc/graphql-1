import { useSelector } from 'react-redux'
import { Container, Typography, Box, Divider } from '@mui/material';

const Home = () => {
  const favorites = useSelector((state) => state.favorites)
  const continents = Object.values(favorites.continents)
  const countries = Object.values(favorites.countries)
  const languages = Object.values(favorites.languages)
  const totalFav = continents.length + countries.length + languages.length

  return (
    <Container>
      <Typography variant='h1' sx={{ textAlign: 'center' }}>
        Home page
      </Typography>

      <Box
        sx={{
          width: 'full',
          backgroundColor: 'grey.200',
          textAlign: 'center',
          marginTop: '2rem',
          paddingY: '1rem',
          borderRadius: '1rem'
        }}
      >
        <Typography variant="body1">
        { totalFav === 1 && `${ totalFav } favorite`}
        { totalFav !== 1 && `${ totalFav } favorites`}
        </Typography>

        <Divider sx={{ margin: '1rem' }} />

        <Typography variant="body1">
          Continents: { continents.join(', ') }
        </Typography>
        <Typography variant="body1">
          Countries: { countries.join(', ') }
        </Typography>
        <Typography variant="body1">
          Languajes: { languages.join(', ') }
        </Typography>
      </Box>
    </Container>
  )

}

export default Home
