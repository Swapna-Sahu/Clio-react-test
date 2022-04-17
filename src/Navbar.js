import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
      
        <div className="links">
        
          <NavLink to="/home" activeClassName="active">Home</NavLink>
        
        
          <NavLink to="/bookmark" activeClassName="active" >Bookmark</NavLink>
        
      </div>
    </nav>
       
    );
  }
   
  export default Navbar;