import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    // provides the Apollo Client instance
    <ApolloProvider client={client}>
      <Router>
        <>
          {/* renders Navbar component */}
          <Navbar />

          {/* sets up routes */}
          <Routes>
            <Route path='/' element={<SearchBooks />} /> {/* render the SearchBooks component */}
            <Route path='/saved' element={<SavedBooks />} /> {/* render the SavedBooks component */}
            <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} /> {/* render a default error message for wrong page */}
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;