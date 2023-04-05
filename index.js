let nama = document.getElementById("fname").value

if(Number(nama)){
    document.getElementById("lname").value===23
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}