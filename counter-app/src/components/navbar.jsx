import React from "react";

//Stateless functional component shortcut - SFC

const Navbar = ({ totalcounters }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalcounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

// class component

// class Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Navbar <span className="badge badge-pill badge-secondary">{this.props.totalcounters}</span>
//                 </a>
//             </nav>
//         );
//     }
// }

// export default Navbar;
