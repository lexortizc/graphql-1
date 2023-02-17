import { useQuery } from '@apollo/client'
import { useSelector } from 'react-redux';
import { CountryDetailsModal, CustomListItem, FavoriteBox } from './components';
import { Typography, Container, List, Box } from '@mui/material'
import { Link } from 'react-router-dom';
import { useModal } from './hooks/useModal';
import { ApolloQueries } from './data/apolloConstants';

const Countries = () => {
  const state = useSelector((state) => state.favorites)
  const { isOpen, selectedItem, handleModal } = useModal()

  const { loading, error, data } = useQuery(ApolloQueries.GET_COUNTRIES)
  if (loading) return <>loading...</>
  if (error) return <>error...</>

  const countries = data.countries
  const countriesWithStates = countries.filter(
    country => country.states.length > 0
  )

  return (
    <Container>
      <Typography variant='h1' sx={{ textAlign: 'center' }}>
        Countries
      </Typography>
      <Box>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {countries.length} Countries
        </Box>
        <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
          {countriesWithStates.length} Countries with states
        </Box>
        <FavoriteBox totalFav={ Object.keys(state.countries).length } />
        <List>
          {countries.map((country) => (
            <CustomListItem
              key={ country.code }
              item={ country }
              type="countries"
              isStared={ (state['countries'][country.code]) ? true : false }
            >
              <Link to='#' onClick={ () => handleModal(country, true) }>
                {country.emoji} {country.name}{' '}
                {country.states.length > 0 && country.states.length}{' '}
                {country.states.length > 1 && 'States'}
                {country.states.length === 1 && 'State'}
              </Link>
            </CustomListItem>
          ))}
        </List>
      </Box>

      <CountryDetailsModal country={ selectedItem } isOpen={ isOpen } handleModal={ handleModal } />
    </Container>
  )
}

export default Countries
