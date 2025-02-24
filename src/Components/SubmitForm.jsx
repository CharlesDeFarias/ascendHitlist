import { useState } from 'react'
import axios from 'axios'

// Do: Build a Hitlist using React (JS or TS)
// Definition of Done:
// Companies should be saved in JSON Server. (https://www.npmjs.com/package/json-server)
// User should be able to add companies.
// User should be able to delete companies.
// User should be able to filter companies based on criteria of the developer’s choice (e.g., by priority, location, or name).
// Implement error handling for at least one API request


const SubmitForm = () => {
    const [newProspect, setNewProspect] = useState({
        name:"",
        type:"",
        salary:"",
        location:"",
        note:"",
        tags:[],
        priority: "0"
    })

    const addNewProspect = (event) => {
        console.log(newProspect)
        event.preventDefault()
        console.log('button clicked', event.target)
        // this is where i would add any extra fields if i wanted to.
        const baseProspect = {...newProspect}
        axios
        .post('http://localhost:3001/Prospects', baseProspect)
        .then(response => {
        console.log(response)
        })
    }

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        let finalValue = name === "tags" ? value.split(", ") : value
        console.log(finalValue)
        const babyProspect = {...newProspect, [name]: finalValue}
        setNewProspect(babyProspect)
        console.log(newProspect)
    }

    return ( 
      <>
      <p>NOICE, Nabbed a new one? Add it here</p>
      <form onSubmit={addNewProspect}>
        <input name="name" placeholder="Prospect Name" onChange={handleInputChange}/> 
        <input name="type" placeholder="Part/Full-time, contract" onChange={handleInputChange}/>
        <input name="salary" placeholder="Annual Salary" onChange={handleInputChange}/>
        <input name="location" placeholder="Location" onChange={handleInputChange}/>
        <input name="note" placeholder="Any notes?" onChange={handleInputChange}/> 
        <input name="priority" placeholder="priority number" onChange={handleInputChange}/>
        <input name="tags" placeholder="Tags separated by comma. Like, this" onChange={handleInputChange}/>
        <button type="submit">save</button>
      </form>  
      </>
    )
  };
  
  export default SubmitForm
  

  

