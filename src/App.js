import './App.css';
import React from 'react';
import persistConfig from './store/store';
import { Provider } from "react-redux";
import Poll from './components/poll';
import { PersistGate } from 'redux-persist/integration/react'

console.log(persistConfig);
const {store, persistor} = persistConfig();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Poll></Poll>
      </PersistGate>
    </Provider>
  );
}

export default App;