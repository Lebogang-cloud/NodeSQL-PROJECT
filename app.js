const btn = document.querySelector("button");
const result = document.querySelector("#result");
btn.addEventListener("click", addNewVisitor);
const url = "http://localhost:5001/";

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

function selectVisitor() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var str = xhr.responseText;
      var obj = JSON.parse(str);
      result.innerHTML = obj.value;
    }
  };
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send();
  return xhr;
}

selectVisitor(url, function (data) {
  var json = JSON.parse(data);
  console.log(json);
});

function addNewVisitor() {
  let xhr = new XMLHttpRequest();
  xhr.open("Post", url, true);
  xhr.onload = function () {
    xhr.setRequestHeader("Content-Type", "application/json");
    if (this.status == 200) {
      let jsonData = JSON.parse(this.response);
      console.log(jsonData);
    }
  };

  let name = document.getElementById("name").value;
  let assistedby = document.getElementById("assistedby").value;
  let age = document.getElementById("age").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let comment = document.getElementById("comment").value;

  let data = JSON.stringify({
    name: name,
    assistedby: assistedby,
    age: age,
    date: date,
    time: time,
    comment: comment,
  });
  xhr.send(data);
}
