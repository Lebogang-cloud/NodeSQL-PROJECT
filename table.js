function update_row(no) {
    document.getElementById("update_button"+no).style.display="none";

    let name= document.getElementById("name_row"+no);
    let assistedby= document.getElementById("assistedby_row"+no);
    let age = document.getElementById("age_row"+no);
    let date = document.getElementById("date_row"+no);
    let time = document.getElementById("time_row"+no);
    let comment = document.getElementById("comment_row"+no);

    let name_data= name.innerHTML;
    let assistedby_data= assistedby.innerHTML;
    let age_data= age.innerHTML;
    let date_data= date.innerHTML;
    let time_data= time.innerHTML;
    let comment_data= comment.innerHTML;

    name.innerHTML= "<input type='text' id='name_text"+no+"' value= '"+name_data+"'>";
    assistedby.innerHTML="<input type='text' id='assistedby_text"+no+"' vaule='"+assistedby_data+"'>";
    age.innerHTML= "<input type='text' id='age_text"+no+"' value= '"+age_data+"'>";
    date.innerHTML= "<input type='text' id='date_text"+no+"' value= '"+date_data+"'>";
    time.innerHTML= "<input type='text' id='time_text"+no+"' value= '"+time_data+"'>";
    comment.innerHTML= "<input type='text' id='comment_text"+no+"' value= '"+comment_data+"'>";
  }

  function delete_row(no){
    document.getElementById("row"+no+"").innerHTML="";
  }