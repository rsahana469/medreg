function openeurope(){
    document.getElementById("myModal").style.display="block";
}

function openasia(){
    document.getElementById("myModal_asia").style.display="block";
}
function openamerica(){
    document.getElementById("myModal_america").style.display="block";
}
function openafrica(){
    document.getElementById("myModal_africa").style.display="block";
}
function closeeurope(){
    document.getElementById("myModal").style.display="none";
}
function closeasia(){
    document.getElementById("myModal_asia").style.display="none";
}
function closeamerica(){
    document.getElementById("myModal_america").style.display="none";
}
function closeafrica(){
    document.getElementById("myModal_africa").style.display="none";
}

function openug(){
    document.getElementById("myModal_ug").style.display="block";
}
function closeug(){
    document.getElementById("myModal_ug").style.display="none";
}
function opengo(){
    document.getElementById("myModal_go").style.display="block";
}
function closego(){
    document.getElementById("myModal_go").style.display="none";
}
function openabout(){
    document.getElementById("home_con").style.display="none";
    document.getElementById("news_con").style.display="none";
    document.getElementById("contact_con").style.display="none";
    document.getElementById("feedback_con").style.display="none";
    document.getElementById("about_con").style.display="block";
    document.getElementById("home_master").style.display="block";
    document.getElementById("regions").style.display="none";
    document.getElementById("home_third").style.display="none";
    document.getElementById("secondary_header").style.display="none";

    

}

function opennews(){
    document.getElementById("home_con").style.display="none";
    document.getElementById("news_con").style.display="block";
    document.getElementById("contact_con").style.display="none";
    document.getElementById("feedback_con").style.display="none";
    document.getElementById("about_con").style.display="none";
    document.getElementById("regions").style.display="none";
    document.getElementById("home_third").style.display="none";
    document.getElementById("home_master").style.display="none";
    document.getElementById("secondary_header").style.display="block";


    

}
function opencontact(){
    document.getElementById("home_con").style.display="none";
    document.getElementById("news_con").style.display="none";
    document.getElementById("contact_con").style.display="block";
    document.getElementById("feedback_con").style.display="none";
    document.getElementById("about_con").style.display="none";
    document.getElementById("regions").style.display="none";
    document.getElementById("home_third").style.display="none";
    document.getElementById("home_master").style.display="none";

    document.getElementById("secondary_header").style.display="block";

    

}
function openfeedback(){
    document.getElementById("home_con").style.display="none";
    document.getElementById("news_con").style.display="none";
    document.getElementById("contact_con").style.display="none";
    document.getElementById("feedback_con").style.display="block";
    document.getElementById("about_con").style.display="none";
    document.getElementById("regions").style.display="none";
    document.getElementById("home_master").style.display="none";
    document.getElementById("home_third").style.display="none";
    document.getElementById("secondary_header").style.display="block";

}
function openfeedbackpage(){
    alert("hello");
    document.getElementById("home_con").style.display="none";
    document.getElementById("news_con").style.display="none";
    document.getElementById("contact_con").style.display="none";
    document.getElementById("feedback_con").style.display="block";
    document.getElementById("about_con").style.display="none";
    document.getElementById("regions").style.display="none";
    document.getElementById("home_master").style.display="none";
    document.getElementById("home_third").style.display="none";
    document.getElementById("secondary_header").style.display="block";
}


function openfeedback1(){
    window.location.href="../index.html";
    setTimeout(function() {openfeedback()}, 3000);

}


function openhome(){
    document.getElementById("home_con").style.display="block";
        document.getElementById("news_con").style.display="none";
        document.getElementById("contact_con").style.display="none";
        document.getElementById("feedback_con").style.display="none";
        document.getElementById("about_con").style.display="none";
    document.getElementById("regions").style.display="block";
    document.getElementById("home_master").style.display="block";
    document.getElementById("home_third").style.display="block";
    document.getElementById("secondary_header").style.display="none";

    

}

function openindex(){
  window.location.href="../index.html";
}





function displayinformation(countryname){
    //redirect to medicalinfo.html and pass country name
    window.open("template/medicalinfo.html?countryname=" + countryname);
    

}
function callcountry(){
    var countryname= document.getElementById("select_page").value;
    //redirect to medicalinfo.html and pass country name
    window.open("medicalinfo.html?countryname=" + countryname);
    
}
function callcountry1(){
    var countryname= document.getElementById("select_page1").value;
    //redirect to medicalinfo.html and pass country name
    window.open("medicalinfo.html?countryname=" + countryname);
    
}
function callcountry2(){
    var countryname= document.getElementById("select_page2").value;
    //redirect to medicalinfo.html and pass country name
    window.open("medicalinfo.html?countryname=" + countryname);
}
function callcountry3(){
    var countryname= document.getElementById("select_page3").value;
    //redirect to medicalinfo.html and pass country name
    window.open("medicalinfo.html?countryname=" + countryname);
}
function callcountry4(){
    var countryname= document.getElementById("select_page4").value;
    //redirect to medicalinfo.html and pass country name
    window.open("medicalinfo.html?countryname=" + countryname);
}
function callcountry8(){
    var countryname= document.getElementById("select_page8").value;
    //redirect to medicalinfo.html and pass country name
    window.open("medicalinfo.html?countryname=" + countryname);
}
function callcountry9(){
    var countryname= document.getElementById("select_page9").value;
    //redirect to medicalinfo.html and pass country name
    window.open("medicalinfo.html?countryname=" + countryname);
}
function callcountry_s(){
    var countryname= document.getElementById("select_page_s").value;
    //redirect to medicalinfo.html and pass country name
    window.open("medicalinfo.html?countryname=" + countryname);
}


function callglobalinfo(value){
    window.open("template/globalinfo.html?countryname=" + value);
}
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }