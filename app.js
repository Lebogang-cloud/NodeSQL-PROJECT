// // window.addEventLister("click",function() {
// //   function sendData() {
// //     const XHR = new XMLHttpRequest();
// //     const userObj = new FormData(form);

// //     XHR.addEventListener("click", function(event){
// //       alert(event.target.responseText);
// //     });
//     XHR.addEventListener("error",target, function(){
//       alert('oops! Something went wrong.');
//     });
//     XHR.open("POST","http:127.0.0.1:5500");
//     XHR.send(userObj);
//   }
//   const form = document.getElementById("myForm");
//   form.addEventListener("submit",function(event){
//     event.preventDefault();

//     sendData()
//   })

// })

// let visitorObj = {
//   visitorname: "Nandi",
//   age: 20,
//   gender: "anything"
// }

// const getVisitor = async () =>{
//   try {
//     let visitor = await fetch("http:127.0.0.1:5500")
//     let obj = await visitor.json()

//     document.getElementById("visitor name").innerHTML = obj.name
//   }catch (err) {
//     console.log(err);
//   }
// } 
