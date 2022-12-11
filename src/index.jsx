import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import './index.css';
import { persistor, store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={'Loading...'} persistor={persistor}>
      <BrowserRouter basename="/final-project/">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
