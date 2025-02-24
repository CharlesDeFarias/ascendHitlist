import ListBody from "./ListBody";
import SubmitForm from "./SubmitForm";
import ErrorHandler from "./ErrorHandler";

// Do: Build a Hitlist using React (JS or TS)
// Definition of Done:
// Companies should be saved in JSON Server. (https://www.npmjs.com/package/json-server)
// User should be able to add companies.
// User should be able to delete companies.
// User should be able to filter companies based on criteria of the developer’s choice (e.g., by priority, location, or name).
// Implement error handling for at least one API request

// Component: New company form where users can add new companies.
// Component: Error handling component that shows up when an API request fails.

const Hitlist = () => {
  return (
    <>
    <ListBody />
    <SubmitForm />
    <ErrorHandler />
    </>
  )
};

export default Hitlist
