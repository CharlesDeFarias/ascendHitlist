import ListBody from "./ListBody";
// import prospects from '.../db.json';
import SubmitForm from "./SubmitForm";
import ErrorHandler from "./ErrorHandler";

// Do: Build a Hitlist using React (JS or TS)
// Companies should be saved in JSON Server. (https://www.npmjs.com/package/json-server)


// Implement error handling for at least one API request

// Component: New company form where users can add new companies.
// Component: Error handling component that shows up when an API request fails.

const Hitlist = ({prospects}) => {
  return (
    <>
    <ListBody prospects={prospects}/>
    <SubmitForm />
    {/* <ErrorHandler /> */}
    </>
  )
};

export default Hitlist
