import { useState, useEffect} from 'react'
import ListHeader from './ListHeader';
//ok got filtering working bare minimum level. problem is it refreshes page immdiately so unless you type quickly, you can only get one letter in. need to fix that. also ideally you can search by any field, not just name.
//also need to add delete functionality
 let prospectsMock= [
    {
      "id": "000001",
      "name": "Tilinger's Concierge",
      "location": "Boston, Ma",
      "type": "Full-time",
      "salary": "TBD",
      "tags": ["Consulting", "CiC", "Hybrid"],
      "note": "High effort, high reward. In pitch stage as of 2.24.25"    
    },
    {
      "id": "000002",
      "name": "Brazusa Cleaning",
      "location": "Boston, Ma",
      "type": "Part-time",
      "salary": "30,000",
      "tags": ["Consulting", "CiC", "virtual"],
      "note": "Significant amount of work done, need to create case study."
    },
    {
      "id": "000003",
      "name": "Brazusa Services",
      "location": "Boston, Ma",
      "type": "Part-time",
      "salary": "TBD",
      "tags": ["Consulting", "Virtual", "Entrepreneurship"],
      "note": "High effort, investment costs, high reward. Need to register & create promo materials"
    },
    {
      "id": "000004",
      "name": "Charles in Charge Consulting",
      "location": "Boston, Ma",
      "type": "Full-time",
      "salary": "TBD",
      "tags": ["consulting", "CiC", "Hybrid", "Entrepreneurship"],
      "note": "High effort, investment costs, high reward. Need to register & create promo materials"
    },
    {
      "id": "000005",
      "name": "test",
      "location": "Boston, Ma",
      "type": "Full-time",
      "salary": "TBD",
      "tags": ["consulting", "CiC", "Hybrid", "Entrepreneurship"],
      "note": "High effort, investment costs, high reward. Need to register & create promo materials"
    }
  ];

const ListBody = ({prospects}) => {
  const [filter, setFilter]  = useState('');
  prospects=prospectsMock

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

