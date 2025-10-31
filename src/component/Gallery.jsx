import React from 'react'
import Profile from './profile'
function Gallery() {
const student=[
    {
    
    pic:"https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
    name:"Ankit Kumar",
    branch:'IT',
    section:'C',
    college:'Abes'},
    {pic:"https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
     name:"Amit Kumar",
    branch:'IT',
    section:'C',
    college:'Abes'},
    {pic:"https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
    name:"Ankit Kumar",
    branch:'DS',
    section:'C',
    college:'Abes'},
    {pic:"https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
    name:"Vansh Tomar",
    branch:'CSE',
    section:'C',
    college:'Abes'
}]

    return (
        <div>
         {/* <Profile name="Mishti" branch="IT" section="C" college="Abes"/> 
         <Profile name="Anant" branch="IT" section="C" college="Abes"/>   
          <Profile name="Navya" branch="IT" section="C" college="Abes"/>  */}
{/* <Profile data={student[1]}/> */}
{
student.map((ele,index)=>(
 <Profile data={ele} key={index}/>
))}
</div>
    )
}

export default Gallery