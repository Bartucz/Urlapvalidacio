window.addEventListener("load", init, false);

function ID(nev) {

    return document.getElementById(nev);


}

function $(nev) {

    return document.querySelectorAll(nev);

}













function validalas() {
    var hiba = "";
    var urlapAdatok = "";

    var nevInput = ID("nev").value;
    console.log(nevInput);
    if (nevInput.length < 3) {
        hiba = " Min 3karakter!<br>";

    }
    //https://regexone.com/
    var szuro = /[A-Z]+[a-z]{2,}/;
    var emailszuro=/[a-z]{2,}\.[a-z]{2,}\@[a-z]{2,}\.[a-z]/;
    var telszuro=/\+36\-\d{2}\-\d{3}\-\d{4}/;
    var webszuro=/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;//https://www.regextester.com/93652

    if (!szuro.test(nevInput)) {
        hiba += "Nagybetüvel kezdődjön!";
        ID("nev").style.border = "1px solid red";

    } else {
        urlapAdatok += "Név: " + nevInput + "<br>";
        ID("nev").style.border = "none";
    }

    if(!emailszuro.test(ID("email1").value)){
        hiba+="Hibás email formátum: valaki@valahol.hu, minden elem min. 3 karakter!";
        ID("email1").style.border="3px solid red";
    }else{
        ID("email1").style.border="none";
        
    }
    //email egyezes
    if((ID("email2").value!==ID("email1").value)){
        hiba+="Nem azonos az e-mail!";
        ID("email2").style.border="3px solid red";
    }else{
        ID("email2").style.border="none";
        urlapAdatok+="Email: "+ID("email1").value+"<br>";
    }
    //tel
    if(!telszuro.test(ID("tel").value)){
        hiba+="Nem helyes a formátum' (+36-30-000-0000)";
        ID("tel").style.border="3px solid red";
    }else{
        ID("tel").style.border="none";
        urlapAdatok+="Tel: "+ID("tel").value+"<br>";
    }
    //weboldal
    if(!webszuro.test(ID("url").value)){
        hiba+="Nem helyes a formátum' (http://valami.hu)";
        ID("url").style.border="3px solid red";
    }else{
        ID("url").style.border="none";
        urlapAdatok+="Webcím: "+ID("url").value+"<br>";
    }

    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok;
    console.log(hiba);
}



function init() {

    ID("kuld").addEventListener("click", validalas);



}
