import { useQuery } from '@apollo/client'
import { useSelector } from 'react-redux'
import { CustomListItem, FavoriteBox } from './components';
import { Box , Container, List, Typography } from '@mui/material'
import { ApolloQueries } from './data/apolloConstants';

const Continents = () => {
  const { continents:staredContinents } = useSelector((state) => state.favorites)
  const { loading, error, data } = useQuery(ApolloQueries.GET_CONTINENTS)

  if (loading) return <>loading...</>
  if (error) return <>error...</>

  const continents = data.continents

  return (
    <Container>
      <Typography variant='h1' sx={{ textAlign: 'center' }}>
        Continents
      </Typography>
      <Box>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {continents.length} Continents
        </Box>
        <FavoriteBox totalFav={ Object.keys(staredContinents).length } />

        <List>
          {continents.map((continent) => (
            <CustomListItem
              key={ continent.code }
              item={ continent }
              type="continents"
              isStared={ (staredContinents[continent.code]) ? true : false }
              text={ `${continent.code} - ${continent.name}` }
            />
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default Continents
