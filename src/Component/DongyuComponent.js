import React  from 'react';


const Message =  () => (
  <div>
    <h2>This message comes from Component floder/DongyuComponent </h2>
    <h2>Get the image from api:</h2>
    {/* <img src={message} alt="dog" /> */}
    {/* <img src="https://images.dog.ceo/breeds/setter-gordon/n02101006_714.jpg" alt="dog" /> */}
  </div>
  )

export default Message


// import React, { Component } from "react";
// import axios from "axios";

// export default class Message extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         message:''
//     };
//     this.getMessage = this.getMessage.bind(this);
//   }

//   componentDidMount() {
//     this.getMessage();
//   }

//   async getMessage()
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
//           <>
//             <p>
//               {message}
//             </p>
//           </>
//         )
//   }
// }