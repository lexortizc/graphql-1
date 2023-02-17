import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Home from './home'
import Languages from './languages'
import Layout from './layout'
import Countries from './countries'
import Continents from './continents';
import './index.css'

const privateClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://countries.trevorblades.com/graphql`
})

export default function App () {
  return (
    <ApolloProvider client={privateClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/countries' element={<Countries />} />
            <Route path='/languages' element={<Languages />} />
            <Route path='/continents' element={<Continents />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}
