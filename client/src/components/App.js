import React from 'react';
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage'
import Dashboard from './Dashboard'


const App = props => {
  const [id, setId] = useLocalStorage('id')

return (
   id ? <Dashboard id={id}/> : <Login onIdSubmit={setId}/>
 )
}
export default App;
