
const ListHeader = ({filter, handleFilterChange, selector, handleSelectChange}) => {
 
    return (
      <section className= "listHeader parent">
        <h1>Charles' Hitlist</h1>
        <label>
        Filter by:
          <select name="filterSelector" onChange={handleSelectChange} value={selector}>
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="salary">Salary</option>
            <option value="location">Location</option>
            <option value="note">Note</option>
            <option value="tags">Tags</option>
            <option value="priority">Priority</option>
          </select>
        </label>
        <input onChange={handleFilterChange} value={filter} type="text" placeholder='Enter text to filter by'/>
      </section>
    )
};
  
export default ListHeader



/* <button onClick={() => handleDelete(prospect.id)}>Delete</button> */


// <Add jobName={jobName} jobLocation={jobLocation} jobSalary={jobSalary} jobNameFunc={handleNewJobName} jobLocationFunc={handleNewJobLocation} jobSalaryFunc={handleNewJobSalary} onSubmit={pushToDataBase} />

// <ViewCompany filter={filter} jobs={jobs} deleteFunc={removeFromDatabase}/>

