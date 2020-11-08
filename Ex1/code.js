function linkStartCheck() {

      let  try1 = document.querySelector("#try1").value;
      let  try2 = document.querySelector("#try2").value;


      if(try1.length < 8)
      {
          alert("enter 8 or more characters bro");
          return;
      }
      else if (try1 == try2)
      {
          alert("congrats. you remembered your password..");
          return;
      }
      else
      {
          alert("you just entered this.. how are you getting it wrong?????? HOw???????");
          return;
      }
}

function seeThroughTheDarkness() {
    let temp = document.getElementById("try1");

    if(temp.type === "password")
    {
        temp.type = "text";
    }
    else
    {
        temp.type = "password";
    }
}