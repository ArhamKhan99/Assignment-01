import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import AppRoute from './routes/Route';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { GET } from './utilities/ApiProvider';
import { addToAll } from './slices/recipeSlice';
function App() {
  const theme = extendTheme({
    colors: {
      primaryBlack: {
        100: '#1a1a1a',
      },
      primaryGreen: {
        100: '#0bd46e',
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await GET('https://dummyjson.com/recipes');
        if (response) {
          dispatch(addToAll(response?.recipes));
        } else {
          dispatch(addToAll([]));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
