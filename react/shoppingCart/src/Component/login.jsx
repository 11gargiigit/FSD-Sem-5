import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ logData }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function verification(e) {
    e.preventDefault();

    if (logData && logData.email === email && logData.password === password) {
      alert("Login successful!"); 
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div style={{ background: 'brown', color: 'white', paddingLeft: '5px' }}>
      <form onSubmit={verification}>
        
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="form-control" 
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;