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

    if (!szuro.test(nevInput)) {
        hiba += "Nagybetüvel kezdődjön!";
        ID("nev").style.border = "1px solid red";

    } else {
        urlapAdatok += "Név: " + nevInput + "<br>";
        ID("nev").style.border = "none";
    }



    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok;
    console.log(hiba);
}



function init() {

    ID("kuld").addEventListener("click", validalas);



}
