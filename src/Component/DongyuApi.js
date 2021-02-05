import React  from 'react';

const Message = () => (
  <div>
    <h2>This message comes from Component floder/DongyuApi </h2>
  </div>
)

export default Message






// import React, { Component } from "react";
// import axios from "axios";

// export default class Book extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         message:''
//     };
//     this.loadBooks = this.loadBooks.bind(this);
//   }

//   componentDidMount() {
//     this.loadBooks();
//   }

//   async loadBooks()
//   {    
//     const promise = await axios.get("http://localhost:8000/users");
//     const {status} = promise;
//     console.log(promise.data)
  
//     if(status===200)
//     {
//       const {data} = promise;
//       this.setState({
//         message:data
//         });
//     }
//   }

//   render() {
//         const {message} = this.state;
//         return(
//           <div>
//             <h1>Hi, this is dongyu page</h1>
        

//             <h1>从本地后端取回的信息为：</h1>
//             <p>
//               {message}
//             </p>
        
//           </div>
//         )
//   }
// }