import { useDispatch } from 'react-redux';
import { addContinent, addCountry, addLanguage } from '../store/favoriteSlice';
import { removeContinent, removeCountry, removeLanguage } from '../store/favoriteSlice';


export const useStar = () => {
  const dispatch = useDispatch()

  const addFavorite = (type, payload) => {
    switch (type) {
      case 'continents':
        dispatch(addContinent(payload))
        break;
      case 'countries':
        dispatch(addCountry(payload))
        break;
      case 'languages':
        dispatch(addLanguage(payload))
        break;
      default:
        break;
    }
  }

  const removeFavorite = (type, payload) => {
    switch (type) {
      case 'continents':
        dispatch(removeContinent(payload))
        break;
      case 'countries':
        dispatch(removeCountry(payload))
        break;
      case 'languages':
        dispatch(removeLanguage(payload))
        break;
      default:
        break;
    }
  }

  return {
    addFavorite,
    removeFavorite
  }

}