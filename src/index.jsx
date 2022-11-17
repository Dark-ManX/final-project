import App from 'components/App/App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={'Loading...'} persistor={persistor}>
      <BrowserRouter basename='/Final-project'>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
