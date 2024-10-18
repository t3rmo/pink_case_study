/* 
Redirect to this page, when route could not be matched.
*/

import { Link } from "react-router-dom";

export default function NotFoundView() {
  return (
    <>
      <div>The URL you tried to access could not be found!</div>
      <button type="button">
        <Link to="/">Go to Patient List View</Link>
      </button>
    </>
  );
}
