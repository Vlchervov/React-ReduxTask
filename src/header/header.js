import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: Gilroy;

  button {
    font-family: Gilroy;
    font-size: 23px;
    height: 45px;
    width: 140px;
    font-weight: normal;
    margin-top: 105.5px;
    background: #f2f2f2;
    border-radius: 10px;
  }
`;

const Date = styled.h1`
  font-family: Gilroy;
  margin-top: 98.8px;
  height: 47px;
  font-style: normal;
  font-size: 46px;
  margin-left: 63px;
`;

// export default class Modal extends React.Component {
//   state = {
//     isOpen: false,
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <Header>
//           <Date>Сегодня</Date>
//           <button
//             className="renameButton"
//             onClick={() => this.setState({ isOpen: true })}
//           >
//             Править
//           </button>
//         </Header>

//         {this.state.isOpen && (
//           <div className="modal">
//             <div className="modal-body">
//               <h1>Modal title</h1>
//               <p>Hello everyone!</p>
//               <button onClick={() => this.setState({ isOpen: false })}>
//                 Close Modal
//               </button>
//             </div>
//           </div>
//         )}
//       </React.Fragment>
//     );
//   }
// }

const AppHeader = () => {
  return (
    <Header>
      <Date>Сегодня</Date>
      <button
        onClick={() => {
          console.log("hellO!");
        }}
      >
        Править
      </button>
    </Header>
  );
};

export default AppHeader;
