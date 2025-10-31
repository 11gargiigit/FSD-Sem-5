// const parent=document.getElementById('container');
// console.log(parent);
// const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2",{ style: { backgroundColor: "blue", color: "white" } },"ABES Engineering College");
// const myName = <h2 style={{backgroundColor:"Red",color:"black"}}>Name: gargi</h2>
// root.render(myName);

const newer = document.getElementById('form');
console.log(newer);
const root1 = ReactDOM.createRoot(newer);
const h1 = React.createElement("h2",{ style: { backgroundColor: "blue", color: "white" } },"Student");
const name = <h4  style={{backgroundColor:"Red",color:"black"}} > Name : Gargi Singh</h4>
const rollno =  <h4  style={{backgroundColor:"Red",color:"black"}} >Roll no. : 141</h4>
const branch =  <h4  style={{backgroundColor:"Red",color:"black"}} >Branch : IT</h4>
const section =  <h4  style={{backgroundColor:"Red",color:"black"}} >section : B</h4>
const college =  <h4  style={{backgroundColor:"Red",color:"black"}} >College: ABES Engineering
</h4>
root1.render(
  <div>
    {h1}
    {name}
    {rollno}
    {branch}
    {section}
    {college}
  </div>
);


