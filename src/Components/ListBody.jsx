import { useState, useEffect} from 'react'
import ListHeader from './ListHeader';
//ok got filtering working bare minimum level. problem is it refreshes page immdiately so unless you type quickly, you can only get one letter in. need to fix that. also ideally you can search by any field, not just name.
//also need to add delete functionality

const ListBody = ({prospects}) => {
  const [filter, setFilter]  = useState('');
// console.log(prospects)
// console.log(filter)
  const finalProspects = prospects.filter(prospect => prospect.name.toLowerCase().includes(filter.toLowerCase()))


  //could theoretically put the id as a react hook, but doesnt seem worth it.
  const handleDelete = (id) => {
    console.log("need to set up database properly for this to work. handledelete")
  //  finalProspects.remove(id)
  //     .then(res => {
  //       console.log(res)
  //       jobs = jobs.filter(job => job.id !== id)
  //     })
  }

    return (
      <div className="listBody parent container">
        <ListHeader setFilter={setFilter} />
        <section>
        {finalProspects.map((prospect) => {
          return (
          <ul className='prospectRow' key={prospect.id}> 
            <h3>Company:   {prospect.name}</h3>  
            <button onClick={() => handleDelete(prospect.id)}>Delete</button>
            <li >{prospect.type}: Salary:{prospect.salary} Location: </li>
            <li >Note: {prospect.location} - {prospect.note}</li>
            <li >Tags:{prospect.tags.join(", ")}</li>
          </ul>
          )
        })}
        </section>
      </div>
    )
};
  
export default ListBody


// <Add jobName={jobName} jobLocation={jobLocation} jobSalary={jobSalary} jobNameFunc={handleNewJobName} jobLocationFunc={handleNewJobLocation} jobSalaryFunc={handleNewJobSalary} onSubmit={pushToDataBase} />

// <ViewCompany filter={filter} jobs={jobs} deleteFunc={removeFromDatabase}/>

