// import React, { Component } from 'react'
import React from 'react'
import loading from "./loading.gif.gif"

const Spinner =()=> {

    return (
      <div className='text-center' >
        <img style={{width:"2vh"}} src={loading} alt="loading" />
      </div>
    )
  }

  export default Spinner;

//      for classedbased component

// export default class spinner extends Component {
//   render() {
//     return (
//       <div className='text-center' >
//         <img style={{width:"2vh"}} src={loading} alt="loading" />
//       </div>
//     )
//   }
// }