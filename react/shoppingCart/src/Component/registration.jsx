import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration({regData}){
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Submitted!');
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Password:', password);

  function getData(e){
    e.preventDefault();
    const data={
      name,
      email,
      password
    };
      console.log(data);
    }


  return (
    <>
    <h2>registration</h2>
    <form>
      <div class="name">
    <label for="exampleInputName1">Name</label>
    <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
      </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  )
};

export default Registration