import { useQuery } from '@apollo/client'
import { useSelector } from 'react-redux';
import { CustomListItem, FavoriteBox } from './components';
import { Box , Container, List, Typography } from '@mui/material'
import { ApolloQueries } from './data/apolloConstants';

const Languages = () => {
  const { languages:staredLanguages } = useSelector((state) => state.favorites)
  const { loading, error, data } = useQuery(ApolloQueries.GET_LANGUAGES)

  if (loading) return <>loading...</>
  if (error) return <>error...</>

  const languages = data.languages

  return (
    <Container>
      <Typography variant='h1' sx={{ textAlign: 'center' }}>
        Languages
      </Typography>
      <Box sx={{ textAlign: 'center', padding: '.5rem' }}>
        {languages.length} Languages
      </Box>
      <FavoriteBox totalFav={ Object.keys(staredLanguages).length } />

      <List>
        {languages.map((language) => (
          <CustomListItem
            key={ language.code }
            item={ language }
            type="languages"
            isStared={ (staredLanguages[language.code]) ? true : false }
            text={ `${language.code} - ${language.name}` }
          />
        ))}
      </List>
    </Container>
  )
}

export default Languages
