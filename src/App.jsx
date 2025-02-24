import { useState, useEffect } from 'react'
import './App.css'
import Hitlist from './Components/Hitlist.jsx'
import axios from 'axios'

// Do: Build a Hitlist using React (JS or TS)
// Definition of Done:
// Companies should be saved in JSON Server. (https://www.npmjs.com/package/json-server)
// User should be able to add companies.
// User should be able to delete companies.
// User should be able to filter companies based on criteria of the developer’s choice (e.g., by priority, location, or name).
// Implement error handling for at least one API request

// Component: Hitlist body where companies show up. Users can delete companies and filter them based on various criteria.
// Component: New company form where users can add new companies.
// Component: Error handling component that shows up when an API request fails.

function App() {
  const [prospects, setProspects] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/Prospects')
      .then(response => {
        console.log('promise fulfilled')
        setProspects(response.data)
      })
  }, [])
  console.log('render', prospects.length, 'notes')

  return (
    <>
    <Hitlist prospects={prospects}/>
    </>
  )
}

export default App
