import './App.css';
import React, {useState, useEffect} from "react";
import {SearchField} from "./components/search-component/search-component";
import axios from 'axios'
import {ItemsPage} from "./pages/item-page";


function App() {
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
   const handleChange = e =>{
    setSearch(e.target.value)
   }

   useEffect(() => {
     async function fetchMyAPI() {
      try{
        let response = await axios.get('https://619651f3af46280017e7dfa2.mockapi.io/api/users/users',  {headers:{'Access-Control-Allow-Origin': '*'}})
        setUsers(response.data)
      }catch (e) {
        console.log(e.message)
      }
      }
      fetchMyAPI()
   },[])

  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );
console.log(filteredUsers)
  return (
    <div className="App">
      <SearchField handleChange = {handleChange} />
      <ItemsPage users = {filteredUsers} />
    </div>
  );
}

export default App;
