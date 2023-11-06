import HomePage from "./HomePage";
import { Link } from "react-router-dom";
function ErrorPage() {
    return (
      <>
        <div className="m-12">
          <h1 className="text-blue-400 text-center w-3/4 m-auto font-black text-7xl">
            Error! Page Not Found
          </h1>
          <Link to='/'>Home</Link>
        </div>
  
      </>
    );
  }
  
  export default ErrorPage;
  