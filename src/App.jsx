import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import "./mystyle.css"




export default function App() {
  let [user, setUser]=useState("");
  const onChangeUser=(event)=>{
    const user =event.target.value;
    setUser(user);
  }
 
  return( 
  <>
  <input type="text" value={user} onChange={onChangeUser}/>;
<h3>Welcome {user}</h3>

</>
  

  )
}







