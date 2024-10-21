/* 
Redirect to this page, when route could not be matched.
*/

import { Link } from "react-router-dom";

export default function NotFoundView() {
  return (
    <div className="d-flex flex-column text-center ">
      <h2>404 - The URL you tried to access could not be found!</h2>
      <button type="button" className="align-self-center">
        <Link to="/">Return to Patient List View</Link>
      </button>
    </div>
  );
}
