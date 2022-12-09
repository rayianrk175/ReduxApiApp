

import React from 'react';
import { Text, View } from 'react-native';
import  store  from './src/Reduxs/store/store';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
// import configureStore from '../RedxuApiAAp/src/Navigation/Redux/store/Store';
// const store = configureStore();

const App = () => {
  return (

    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </Provider>

  );
}
export default App;