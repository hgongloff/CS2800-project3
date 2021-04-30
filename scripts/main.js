"use strict";


var finishOrder = function() {
    var name =  document.getElementById("name").value;
    var phone =  document.getElementById("phone").value;
    var email =  document.getElementById("email").value;
    var isGood = true;

    if (name == ""){
        isGood = false;
        document.getElementById("name").nextElementSibling.innerHTML  = "You must enter a name";
    } else {
        document.getElementById("name").nextElementSibling.innerHTML  = "";
    }

    if (phone == ""){
        isGood = false;
        document.getElementById("phone").nextElementSibling.innerHTML  = "You must enter a phone number";
    } else if (phone.length != 12){
        isGood = false;
        document.getElementById("phone").nextElementSibling.innerHTML  = "Phone format must be 123-123-1234";
    } else {
        for (var i = 0; i < 12; i++){
            if (i < 3 && isNaN(phone[i])) {
                document.getElementById("phone").nextElementSibling.innerHTML  = "Phone format must be 123-123-1234";
            } else if(i == 3 && isNaN(phone[i] != true)) {
                document.getElementById("phone").nextElementSibling.innerHTML  = "Phone format must be 123-123-1234";
            } else if (i > 3 && i < 7 && isNaN(phone[i])) {
                document.getElementById("phone").nextElementSibling.innerHTML  = "Phone format must be 123-123-1234";
            } else if (i == 7 && isNaN(phone[i] != true)) {
                document.getElementById("phone").nextElementSibling.innerHTML  = "Phone format must be 123-123-1234";
            } else if (i > 7 && i < 12 && isNaN(phone[i])) {
                document.getElementById("phone").nextElementSibling.innerHTML  = "Phone format must be 123-123-1234";
            }
        }
    }

    if (email == "") {
        isGood = false;
        document.getElementById("email").nextElementSibling.innerHTML  = "You must enter an email address";
    } else {
        document.getElementById("email").nextElementSibling.innerHTML  = "";
    }

    if(isGood)  {
        location.replace("./confirm.html")
    }

    
};

var clearOrder = function() {

    document.getElementById("cinncinati_reds").checked = true;


    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("special_instructions").value = "";

    document.getElementById("phone").nextElementSibling.innerHTML  = "";
    document.getElementById("name").nextElementSibling.innerHTML  = "";
    document.getElementById("email").nextElementSibling.innerHTML  = "";

    document.getElementById("promotions").checked = false;
    document.getElementById("new_products").checked = false;
    document.getElementById("catalog").checked = false;
    

}

var changeHat = function() {
    var buttons = document.getElementsByName("team")

    if (buttons[0].checked) {
        document.getElementById("hat_pic").src = "images/reds.png";
    } else if (buttons[1].checked) {
        document.getElementById("hat_pic").src = "images/indians.png";
    } else if (buttons[2].checked) {
        document.getElementById("hat_pic").src = "images/tigers.png";
    }



}

window.onload = function() {
    document.getElementById("submit_order").onclick = finishOrder;
    document.getElementById("clear_form").onclick = clearOrder;

    document.getElementById("cinncinati_reds").onchange = changeHat;
    document.getElementById("cleveland_indians").onchange = changeHat;
    document.getElementById("detroit_tigers").onchange = changeHat;

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;  
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    document.getElementById("current_date").nextElementSibling.innerHTML = newdate;
    
};
