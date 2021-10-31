
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <Auth0Provider
    domain="autopartes1.us.auth0.com"
    clientId="1k8tVBbECR0t0024U1M8p9AH0RGCro53"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>
  );
}

export default App;
