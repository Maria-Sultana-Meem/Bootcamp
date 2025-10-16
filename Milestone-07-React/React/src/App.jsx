
import { Suspense } from 'react'
import './App.css'
import Users from './components/Users'


const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

function App() {
 

  return (
    <>
         <Suspense fallback={<h2>Loading....</h2>}>

           <Users fetchUsers={fetchUsers} />
         </Suspense>
          
    </>
  )
}

export default App
