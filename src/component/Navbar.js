import React  from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link  } from 'react-router-dom'



const Navbar =()=> {
  // const navigate = useNavigate();
  // const handle=()=>{
  //   localStorage.removeItem('token');
  //   navigate("/login")
  //   }}

 
    return (
      <>
      
      <div><nav  className="navbar navbar-expand-lg navbar-dark fixed bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/general">News+</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{color:"red"}} to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{color:"yellow"}} to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{color:"#8f8de7"}} to="/general">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{color:"#4abb86"}} to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{color:"#bdb1b2"}} to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{color:"#e7d9ae"}} to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{color:"pink"}} to="/technology">Technology</Link>
            </li>
          </ul>
          
           
          {/* {!localStorage.getItem('token')?       
  <form className="d-flex">
  <Link className="btn btn-outline-success mx-2" to="/login" role="button">Login</Link>
  <Link className="btn btn-outline-success mx-2" to="/signup" role="button">Signup</Link>:
  </form>: <button onClick={handle} className="btn btn-outline-success mx-2 " > Logout</button> 
       } */}
          
        
        </div>
      </div>
    </nav></div>
    </>
      )
      
  }

export default  Navbar
