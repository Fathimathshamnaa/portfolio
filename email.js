function sendMail(e){
  event.preventDefault();
  console.log(document.getElementById('name').value)
  console.log(document.getElementById('email').value)
  console.log(document.getElementById('msg').value)
  console.log(document.getElementById('subject').value)
  let loading=document.querySelector('.loading');var params={
        
    from_name:document.getElementById('name').value,
    email: document.getElementById('email').value,
    msg: document.getElementById('msg').value,
    subject:document.getElementById('subject').value
    
    
}
emailjs.send("service_746lcof","template_z7n0gj8",params).then(function(res){
alert("sucsess"+res.status)})



}






























// function sendMail(e) {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_746lcof";
//     const templateID = "template_z7n0gj8";
  
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!")
  
//       })
//       .catch(err=>console.log(err));
  
//   }


//   var templateParams = {
//     name: 'James',
//     notes: 'Check this out!'
// };
 
// emailjs.send('service_746lcof', 'template_z7n0gj8', templateParams)
//     .then(function(response) {
//        alert('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        alert('FAILED...', error);
//     });