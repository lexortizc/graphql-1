import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'star',
  initialState: {
    continents: {},
    countries: {},
    languages: {}
  },
  reducers: {
    addContinent: (state, action) => {
      return {
        ...state,
        continents: {
          ...state.continents,
          [action.payload.code]: action.payload.name
        }
      }
    },
    addCountry: (state, action) => {
      return {
        ...state,
        countries: {
          ...state.countries,
          [action.payload.code]: action.payload.name
        }
      }
    },
    addLanguage: (state, action) => {
      return {
        ...state,
        languages: {
          ...state.languages,
          [action.payload.code]: action.payload.name
        }
      }
    },
    removeContinent: (state, action) => {
      const { [action.payload.code]: toDelete, ...rest  } = state.continents

      return {
        ...state,
        continents: {
          ...rest
        }
      }
    },
    removeCountry: (state, action) => {
      const { [action.payload.code]: toDelete, ...rest  } = state.countries

      return {
        ...state,
        countries: {
          ...rest
        }
      }
    },
    removeLanguage: (state, action) => {
      const { [action.payload.code]: toDelete, ...rest  } = state.languages

      return {
        ...state,
        languages: {
          ...rest
        }
      }
    }
  }
})

export default favoriteSlice.reducer

export const {
  addContinent,
  addCountry,
  addLanguage,
  removeContinent,
  removeCountry,
  removeLanguage
} = favoriteSlice.actions
