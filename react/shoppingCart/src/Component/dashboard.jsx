import React, { useEffect,useState } from 'react'

function Dashboard() {
const [data,setData]=useState([]);
  useEffect(()=>{
    async function getData(){
      const response=await fetch ("https://fakestoreapi.com/products");
      const resData=await response.json();
      setData(resData);
      console.log(resData);
    }
    getData();
  },[])

  function addToCart(){
    alert("item added to cart");
  }
  return (
    <div>

      {data.length===0?(
        <h2>Data not found</h2>
      ):(
        <div>{
          data.map((ele)=>(
            <div style={{border:'2px dashed brown',height:'600px',width:'450px',float:'left',margin:'10px',padding:'10px',backgroundColor:'beige'}}>
              <img src={ele.image} height={100} width={100}/>
              <h3>{ele.title}</h3>
              <p>{ele.description}</p>
              <h2>{ele.price}</h2>
              <button onClick={addToCart}>Add to cart</button>
              </div>
          ))
        }</div>
      )
          }
        
     {/* {JSON.stringify(data)} */}
    </div>
  )
}

export default Dashboard