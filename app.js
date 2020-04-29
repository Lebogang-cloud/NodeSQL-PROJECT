const btn = document.querySelector("button");
const result = document.querySelector("#result");
btn.addEventListener("click", selectVisitor);
const url = "http://localhost:5001/selectVisitor/";

function selectVisitor() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url,);
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) success(xhr.responseText); {
        var str = xhr.responseText; 
}
  }
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.send();
return xhr

}  

selectVisitor("http://localhost:5001/", function(data){
  var json = JSON.parse(data);
  console.log(json);
})

function addNewVisitor(){
  let data = new FormData;
  data.append('name', document.getElementById('name').value);
  data.append('assistedby',document.getElementById('assistedby').value)
  data.append('age',document.getElementById('age').value);
  data.append('date',document.getElementById('date').value);
  data.append('time',document.getElementById('time').value);
  data.append('comment',document.getElementById('comment').value);

  let xhr = new XMLHttpRequest
  xhr.open('Post', url, true);
  xhr.onload = function(){
    if(this.status==200){
      let res =JSON.parse(this.response);
      if(res.status==true){

      }else{
        console.log(res.message);
      }
    }else{
      alert("ERROR LOADING FILE")
    }
  }
  xhr.send(data);
  return false;
}
