import { Outlet, Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1 className="main-div">Services</h1>
      <p><Link to="new">Go to New</Link></p>
      <Outlet />
    </div>
  );
};

export default Services;
