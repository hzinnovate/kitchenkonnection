import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { Main } from './components/Main';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}
