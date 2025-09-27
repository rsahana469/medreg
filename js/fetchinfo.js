var firebaseConfig = {
    apiKey: "AIzaSyAtR2cbVpLOxdos3nZkAGUpVbF0tj5cj2M",
    authDomain: "countrydatabase-8155f.firebaseapp.com",
    databaseURL: "https://countrydatabase-8155f-default-rtdb.firebaseio.com",
    projectId: "countrydatabase-8155f",
    storageBucket: "countrydatabase-8155f.appspot.com",
    messagingSenderId: "320167922455",
    appId: "1:320167922455:web:11143377e71d41e6c2c552",
    measurementId: "G-3M2SN5T0K1"
  };
  firebase.initializeApp(firebaseConfig); 

    function fetchdata(){

        var options_str = "";
        var options_value = "";
        var sel = document.getElementById('select_page');
        var sel1 = document.getElementById('select_page1');
        var sel2 = document.getElementById('select_page2');
        var sel3 = document.getElementById('select_page3');
        var sel4 = document.getElementById('select_page4');
        var sel_s = document.getElementById('select_page_s');
        var select_country = document.getElementById('feedback_country');
        firebase.database().ref('Country_Details').once('value',function(snapshot){
            options_str += '<option value="' + "Search" + '">' + "Search" + '</option>';
            snapshot.forEach(function(childsnapshot){
                options_str += '<option value="' + childsnapshot.val().B+ '">' + childsnapshot.val().B + '</option>';
                options_value += '<option value="' + childsnapshot.val().B + '">';

            });

            sel.innerHTML = options_str;
            sel1.innerHTML = options_str;
            sel2.innerHTML = options_str;
            sel3.innerHTML = options_str;
            sel4.innerHTML = options_str;
            sel_s.innerHTML = options_str;
            select_country.innerHTML=options_value;
            //hide the model
            document.getElementById("container").style.display="none";
        });
    }


    function fetchdatasecondary(){

        var options_str = "";
        var sel8 = document.getElementById('select_page8');
        firebase.database().ref('Country_Details').once('value',function(snapshot){
            options_str += '<option value="' + "Search" + '">' + "Search" + '</option>';
            snapshot.forEach(function(childsnapshot){
                options_str += '<option value="' + childsnapshot.val().B + '">' + childsnapshot.val().B + '</option>';

            });
            sel8.innerHTML = options_str;
            document.getElementById('container').style.display="none";
        });
    }


    function fetchdatamediacal(){
        var options_str = "";
        var sel9 = document.getElementById('select_page9');
        firebase.database().ref('Country_Details').once('value',function(snapshot){
            options_str += '<option value="' + "Search" + '">' + "Search" + '</option>';
            snapshot.forEach(function(childsnapshot){
                options_str += '<option value="' + childsnapshot.val().B + '">' + childsnapshot.val().B + '</option>';

            });
            sel9.innerHTML = options_str;
            document.getElementById('container').style.display="none";
        });
    }


    function fetchspecificdata(c){
        firebase.database().ref('Country_Details').once('value',function(snapshot){
            snapshot.forEach(function(childsnapshot){
                var dc=childsnapshot.val().B;
                if(c==dc){
                    var country=childsnapshot.val();
                    if(country.D != "")document.getElementById("DA").href = country.D;
                    if(country.G != "")document.getElementById("G").href = country.G;
                    if(country.J != "")document.getElementById("J").href = country.J;
                    if(country.N != "")document.getElementById("N").href = country.N;
                    if(country.C != "") document.getElementById('C').innerHTML="Regulatory_Authority:  ".bold() +country.C;
                    if(country.D != "")document.getElementById('D').innerHTML="Website:  ".bold() +country.D.fontcolor("blue");
                    if(country.E != "")document.getElementById('E').innerHTML="Device Classification:  ".bold() +country.E;
                    if(country.F != "")document.getElementById('F').innerHTML="Regulations/Guidance Document:  ".bold() +country.F.fontcolor("blue");;
                    if(country.H != "")document.getElementById('H').innerHTML="Authorized Representative rXequired:  ".bold() +country.H;
                    if(country.I != "")document.getElementById('I').innerHTML="Registration Process:  ".bold() +country.I.fontcolor("blue");;
                    if(country.K != "")document.getElementById('K').innerHTML="Registration  Timeline:  ".bold() +country.K;
                    if(country.L != "")document.getElementById('L').innerHTML="Labeling Language:  ".bold() +country.L;
                    if(country.M != "")document.getElementById('M').innerHTML="Database:  ".bold() +country.M.fontcolor("blue");;
                    if(country.O != "")document.getElementById('O').innerHTML="Additional Information:  ".bold() +country.O;
                    if(country.P != "")document.getElementById('P').innerHTML="Contact:  ".bold() +country.P;
                    if(country.Q != "")document.getElementById('Q').innerHTML="Adverse Event Reporting:  ".bold() +country.Q;
                    if(country.R != "")document.getElementById('R').innerHTML="Accept CE Mark:  ".bold() +country.R;
                 
                }
            });
        });
    }


var contactdatabase=firebase.database().ref("contact_details");
function submitcontact(){
    var emailid=document.getElementById("email_data").value;
    var contact=document.getElementById("contact_data").value;
    var company=document.getElementById("company_data").value;
    var help=document.getElementById("help_data").value;
    if(emailid=="" || contact==""){
        alert("Enter all mendatory Details");
    }
    else{
          var contact_data= contactdatabase.push();
          contact_data.set({
                "emailid":emailid,
                "contact":contact,
                "company":company,
                "help":help
          });
          alert("Details Sbmitted");
          window.location.reload();
    }
}

var feedbackdatabase=firebase.database().ref("feedback_details");
function submitfeedback(){
    var emailid=document.getElementById("feedback_email").value;
    var name=document.getElementById("feedback_name").value;
    var contact=document.getElementById("feedback_contact").value;
    var country=document.getElementById("feedback_country_data").value;
    var details=document.getElementById("feedback_details").value;
    var issue= "";
    if(name=="" || country=="" || details=="" ){
        alert("Enter all mandatory Details");

    }
    else{
        var feeddata= feedbackdatabase.push();
        feeddata.set({
            "emailid":emailid,
            "name":name,
            "contact":contact,
            "country":country,
            "details":details,
            "issue":issue
        });
        alert("Details Sbmitted");
        window.location.reload();
    }
 
}

var subdatabase=firebase.database().ref("subscriber_details");
function subscribe(){
    var emailid=document.getElementById("footer_email").value;
    if(emailid==""){
        alert("Enter email id");
    }
    else{
        var subdata=subdatabase.push();
        subdata.set({
           "emailid":emailid
        });
        alert("Data Submited Sucessfully");
        window.location.reload();
    
    }
  
}
