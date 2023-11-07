import HomePage from "./HomePage";
import { Link } from "react-router-dom";
function ErrorPage() {
    return (
      <>
        <div className="m-12">
          <h1>
            404: Dimension Not Found
          </h1>
          <p>Better head home</p>
          <Link to='/'>Home</Link>
        </div>
  
      </>
    );
  }
  
  export default ErrorPage;
  