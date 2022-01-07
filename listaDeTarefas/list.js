 var enterButton = document.getElementById("enter");
 var input = document.getElementById("userInput");
 var ul = document.getElementById("ul");
 var item = document.getElementsByTagName("li");

 function inputlength(){
     return input.value.length;
 }

 function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value)); 
    ul.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut); 

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListitem);

    function deleteListitem(){
        li.classList.add("delete");
    }
 }


 enterButton.addEventListener("click", addListAfterClick);
 input.addEventListener("keypress", addListAfterKeypress);

 function addListAfterClick(){
    if(
        inputlength() > 0 ){
            createListElement();
        }
    
 }

 function addListAfterKeypress(){
    if(
        inputlength() < 0 && Event.which === 13){
            createListElement();
        }
    
 }