// import React, { Component } from "react";
// class Navbar extends Component {
//   state = {};
//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-light bg-light">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//            
//               Total Number of Counters
//               <span className="badge rounded-pill bg-secondary m-2">
//                 {this.props.totalCounts}
//               </span>
//             </a>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }

// export default Navbar;



//stateless functional component
// const Navbar = (props) => {
  //use object desturing
  const Navbar = ({totalCounts}) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          
            Total Number of Counters
            <span className="badge rounded-pill bg-secondary m-2">
              {totalCounts}
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}
 
export default Navbar;
