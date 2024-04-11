import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import "./mystyle.css"




export default function App() {
  let [user, setUser] = useState({
    name: "",
    age: "",
    education:""
  })

  const onChangeUser = ({target:{name, value}}) => {
    setUser({...user, [name]:value})
    }

  return (
    <div className="container m-5">
      <h4> user Name :</h4>
      <input type="text" name="name" value={user.name} onChange={onChangeUser}/>

      <h4> user Age :</h4>
      <input type="number" name="age" value={user.age} onChange={onChangeUser}/>

      <h4> user Education :</h4>
      <input name="education" value={user.education} onChange={onChangeUser}/>

      {user.name && user.age && user.education && (
        <h3> Dear, {user.name} you are {user.age} years old and education is {user.education}. </h3>
      )}
    </div>

  );
}











