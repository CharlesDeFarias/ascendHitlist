import { useState} from 'react'
//ok got filtering working bare minimum level. problem is it refreshes page immdiately so unless you type quickly, you can only get one letter in. need to fix that. also ideally you can search by any field, not just name.
const ListHeader = ({setFilter}) => {

  const handleFilter = (e) => {
  console.log(e.target.value)
  setFilter(e.target.value)
  }

  const FilterInput = () => {
    return <>
      <h4>Filter by Company Name</h4>
      <input onChange={handleFilter} type="text" placeholder='Enter company name'/>
    </>
  }

    return (
      <section className= "listHeader parent">
        <h1>Charles' Hitlist</h1>
        <FilterInput/>
      </section>
    )
};
  
export default ListHeader



/* <button onClick={() => handleDelete(prospect.id)}>Delete</button> */


// <Add jobName={jobName} jobLocation={jobLocation} jobSalary={jobSalary} jobNameFunc={handleNewJobName} jobLocationFunc={handleNewJobLocation} jobSalaryFunc={handleNewJobSalary} onSubmit={pushToDataBase} />

// <ViewCompany filter={filter} jobs={jobs} deleteFunc={removeFromDatabase}/>

