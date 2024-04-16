function licz(){
        var cena = 0;
        var peelingCheckbox = document.getElementById('peeling');
        var maskaCheckbox = document.getElementById('maska');
        var masazCheckbox = document.getElementById('masaz');
        var makijazCheckbox = document.getElementById('makijaz');

        if (peelingCheckbox.checked) {
            cena += 45;
        }
        if (maskaCheckbox.checked) {
            cena += 30;
        }
        if (masazCheckbox.checked) {
            cena += 20;
        }
        if (makijazCheckbox.checked) {
            cena += 50;
        }

        document.getElementById('wynik').textContent = 'Cena zabiegów: ' + cena;
        console.log(cena);
}