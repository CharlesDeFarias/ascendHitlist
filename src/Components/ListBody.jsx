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

 const prospectsMock= [
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
    }
  ];

const ListBody = ({prospects, filter, handleDelete}) => {
  prospects=prospectsMock
  filter = filter.toLowerCase();

  const finalProspects = prospects.filter(prospect => prospect.name.toLowerCase().includes(filter))
  console.log(finalProspects)

    return (
      <div className="listBody parent container">
        <h1>Charles' Hitlist</h1>
        <section>
        {finalProspects.map((prospect) => {
          return (
          <ul className='prospectRow' key={prospect.id}> 
            <h3>Company:   {prospect.name}</h3>  
            <li >Location: {prospect.location}</li>
            <li >Type:     {prospect.type}</li>
            <li >Salary:   {prospect.salary}</li>
            <li >Tags:     {prospect.tags.join(", ")}</li>
            <li >Note:     {prospect.note}</li>
          </ul>
          )
        })}
        </section>
      </div>
    )
};
  
export default ListBody

