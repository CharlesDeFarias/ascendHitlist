import { useState, useEffect} from 'react'
import ListHeader from './ListHeader';
//ok I somehow completely messed this up. But the structures good i think so i dont want to revert. Basically soemthing's wrong with the way i'm passing state. When i select an option in the dropdown, even though console.log says i've got the right e.target.value, the state doesn't update. Also when i type into the input, it a) immediately starts filtering after one character is entered making it so you cant type a full word and b) seems to be delayed by a full character.
//i've somehow messed up both the state and rendering, likely through the same mistake.
//also need to add delete functionality
//I need to break this up a little more. Lift listHeader up into hitlist. don't need to i guess, but i would like to.

const ListBody = ({prospects}) => {
  const [filter, setFilter]  = useState('');
  const [selector, setSelector] = useState('name')

  const handleFilter = (e) => {
    setFilter(e.target.value)
    }
  
  const handleSelect = (e) => {
    setSelector(e.target.value)
  } 

  let isTags = false;

  const sanitizedProspects = prospects.map(prospect => {
    return Object.keys(prospect).reduce((newObj, key) => {
      if(key === "tags"){
        console.log(prospect[key])
        newObj[key] = prospect[key].join(", ")
      } 
      if(typeof prospect[key] === "string"){
      newObj[key] = prospect[key].toLowerCase();
      }
      console.log({newObj})
      return newObj;
  
    }, {});
  })

  const finalProspects = sanitizedProspects.filter(prospect => prospect[selector].includes(filter.toLowerCase()))

    return (
      <div className="listBody parent container">
        <ListHeader 
          filter={filter} 
          handleFilterChange={handleFilter} 
          selector={selector} 
          handleSelectChange={handleSelect}
          />
        <section>
        {finalProspects.map((prospect) => {
          return ( 
          <ul className='prospectRow' key={prospect.id}> 
            <h3>Company: {prospect.name}</h3>  
            <button onClick={() => handleDelete(prospect.id)}>Delete</button>
            <li>Type: {prospect.type} Salary:{prospect.salary} Location: {prospect.location} </li>
            <li>Note: {prospect.location} Note: {prospect.note}</li>
            <li>Priority: {prospect.priority} Tags:{prospect.tags}</li>
          </ul>
          )
        })}
        </section>
      </div>
    )
};
  
export default ListBody
