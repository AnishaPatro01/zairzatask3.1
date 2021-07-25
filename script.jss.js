function results(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var about = document.getElementById('about').value;
    var address = document.getElementById('address').value;
    var phoneno = document.getElementById('phoneno').value;    
    var clg = document.getElementById('clg').value;
    var fullname = name;
    document.getElementById('dname').textContent = fullname;
    var fullemail = email;
    document.getElementById('demail').textContent = fullemail;
    var fullabout = about;
    document.getElementById('dabout').textContent = fullabout;
    var fulladdress = address;
    document.getElementById('daddress').textContent = fulladdress;
    var fullphoneno = phoneno;
    document.getElementById('dphone').textContent = fullphoneno;
    var fullcollege = clg;
    document.getElementById('dcollege').textContent = fullcollege;

}