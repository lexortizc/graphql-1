import { gql } from '@apollo/client';

const CONTINENTS = gql`
query Continents {
  continents {
    code
    name
  }
}
`

const COUNTRIES = gql`
query Countries {
  countries {
    code
    name
    phone
    languages {
      code
      name
      native
    }
    currency
    emoji
    emojiU
    states {
      name
      code
    }
  }
}
`

const LANGUAGES = gql`
query Languages {
  languages {
    code
    name
    native
    rtl
  }
}
`

export const ApolloQueries = {
  GET_CONTINENTS: CONTINENTS,
  GET_COUNTRIES: COUNTRIES,
  GET_LANGUAGES: LANGUAGES,
}