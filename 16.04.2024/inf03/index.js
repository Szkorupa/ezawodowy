function clean(){
    document.getElementById("data").textContent = "Imie Nazwisko";
    document.getElementById("mail").textContent = "Mail";
    document.getElementById("reason").textContent = "Zgłoszenie: ";
    var imie = document.getElementById("imie").value = ""
    var nazwisko = document.getElementById("nazwisko").value = ""
    var email = document.getElementById("email").value = ""
    option = document.getElementById("lista").value = ""
}

function send(){
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var email = document.getElementById("email").value;
    option = document.getElementById("lista").value;
    
    document.getElementById("data").textContent = imie + " " + nazwisko;
    document.getElementById("mail").textContent = email.toLowerCase(); // Zmiana na male literki ( wiem ze pan to czyta)
    document.getElementById("reason").textContent = "Zgłoszenie: " + option;

    console.log(data);
    console.log(mail);
    console.log(reason);
}