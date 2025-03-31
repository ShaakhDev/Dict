import React from 'react';
import {Navigation} from './src/navigators';
import {Provider} from 'react-redux';
import {store} from '@/store';
import {ErrorBoundary} from '@/components';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
