import React, {useState} from 'react';
import './DashBoard.css'
import Pro from './../../assets/img/hqdefault.jpg'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'



const DashBoard = ({title, body}) => {
 // const { receiveCookie, createCookie, setCookie } = useAuth()
    // console.log(createCookie)
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push("/login")
        } catch(error) {
            console.log(error);
            setError('Failed to log out')
        }
      }
  
  return (
    <div style={{dispaly:"flex"}}>
      <div className='fff'>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            <div className="card-container">
      <div className="card-content">
      <div className="image-container">
        <h3 className="profile"></h3>
        <img className="img-pro" src={Pro} alt=""/>
      </div>
      <div className="card-title">
        <h3></h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>

      </div>
      <div className="btn">
        <button>
          <a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias debitis fuga! Dolores, laboriosam quod at facilis ipsam ipsa ipsum harum, tempora natus excepturi esse praesentium. Libero optio exercitationem voluptatem.
  Earum culpa ipsa sit inventore eum qui recusandae. Quisquam illo consectetur nostrum provident! Fuga accusamus sunt inventore, rem minima dolor impedit expedita commodi soluta libero. Odit laboriosam itaque exercitationem tempore.
         </a>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
        </button>
        
       
       
    </div>
      </div>
  
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update profile</Link>
        </Card.Body>
    </Card>
    <div>
    <form className="inp-type" >
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </form>
    <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
    </div>
    </div>
    </div>
        {/* <button onClick={receiveCookie}>Receive Cookie</button>
        <button onClick={() => setCookie()}>Create Cookie</button> */}

  

    </div>
  );
};
export default DashBoard;