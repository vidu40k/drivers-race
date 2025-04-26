import React from 'react';
import { AppNavigation } from './src/navigation';
import { store } from './src/store';
import { Provider } from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
