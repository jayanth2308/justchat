import { UserContextProvider } from './Usercontext';
import axios from 'axios'
import { Routes } from './Routes';

function App() {
  axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.withCredentials = true;
  return (
    <>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
      {/* <LoginorRegister/> */}
    </>
  )
}

export default App
