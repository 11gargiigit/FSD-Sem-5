
// const div = document.getElementsByTagName('div');
// div[0].innerText="helloworld";
// div[0].style.color="white";
// div[0].style.backgroundColor="blue";
// console.log(div);


const container = document.getElementsByClassName("container");
container[0].innerHTML = "<h2>heading</h2>";
console.dir(container);

const h2 = document.createElement("h2");
// console.log(h2);
h2.innerText="ABES Engineering College";
h2.style.color="white";
h2.style.backgroundColor="blue";
console.log(h2);
container[0].appendChild(h2);

const img = document.createElement("img")
img.src="https://img-cdn.pixlr.com/image-generator/demo/pixlr-image-generator-example-3.webp"
img.setAttribute('height','200px')
img.setAttribute('width','500px')
console.log(img);
container[0].appendChild(img);



const but = document.getElementById("btn");

function msg(){
  const div1 =document.createElement("div");
  div1.innerText = "loading";
  div1.style.color="black";
  div1.style.backgroundColor="blue";
  container[0].appendChild(div1);
  setTimeout(function() {
    console.log(img.src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=")
  },1000);
  // container[0].appendChild(div1);
}

but.addEventListener("click",msg)



