function Submit(){
    document.getElementById("done").innerHTML =" ";
    var matIrasbeli = parseInt(document.getElementById("irasbeliMat").value);
    var matSzobeli = parseInt(document.getElementById("szobeliMat").value);
    var torIrasbeli = parseInt(document.getElementById("irasbeliTor").value);
    var torSzobeli = parseInt(document.getElementById("szobeliTor").value);
    var magyIrasbeli = parseInt(document.getElementById("irasbeliMagy").value);
    var magySzobeli = parseInt(document.getElementById("szobeliMagy").value);
    var nyelIrasbeli = parseInt(document.getElementById("irasbeliNyel").value);
    var nyelSzobeli = parseInt(document.getElementById("szobeliNyel").value);

    try{
        if(matIrasbeli > 100) throw "A szam túl nagy";
        if(matIrasbeli < 0) throw "A szam túl kicsi";

        if(matSzobeli > 50) throw "A szam túl nagy";
        if(matSzobeli < 0) throw "A szam túl kicsi";

        if(isNaN(matIrasbeli)) throw "Nem szám";
        if(isNaN(matSzobeli)) throw "Nem szám";



        if(magyIrasbeli > 100) throw "A szam túl nagy";
        if(magyIrasbeli < 0) throw "A szam túl kicsi";

        if(magySzobeli > 50) throw "A szam túl nagy";
        if(magySzobeli < 0) throw "A szam túl kicsi";

        if(isNaN(magyIrasbeli)) throw "Nem szám";
        if(isNaN(magySzobeli)) throw "Nem szám";


        if(torIrasbeli > 100) throw "A szam túl nagy";
        if(torIrasbeli < 0) throw "A szam túl kicsi";

        if(torSzobeli > 60) throw "A szam túl nagy";
        if(torSzobeli < 0) throw "A szam túl kicsi";

        if(isNaN(torIrasbeli)) throw "Nem szám";
        if(isNaN(torSzobeli)) throw "Nem szám";

        if(nyelIrasbeli > 100) throw "A szam túl nagy";
        if(nyelIrasbeli < 0) throw "A szam túl kicsi";

        if(nyelSzobeli > 33) throw "A szam túl nagy";
        if(nyelSzobeli < 0) throw "A szam túl kicsi";

        if(isNaN(nyelIrasbeli)) throw "Nem szám";
        if(isNaN(nyelSzobeli)) throw "Nem szám";
    }
    catch(error){
        alert("Hiba: " + error);
    }

    document.getElementById("done").innerHTML += "Matematika: " + Jegy(matIrasbeli,100) +"," +Jegy(matSzobeli,50) + "  ";
    document.getElementById("done").innerHTML += "Magyar: " + Jegy(magyIrasbeli,100) +"," +Jegy(magySzobeli,50);
    document.getElementById("done").innerHTML += "Történelem: " + Jegy(torIrasbeli,100) +"," +Jegy(torSzobeli,60);
    document.getElementById("done").innerHTML += "Nyelv: " + Jegy(nyelIrasbeli,100) +"," +Jegy(nyelSzobeli,33); 
}

function Jegy(pont, maxpont){

    var x = (pont/maxpont)*100;

    if      (x >= 80)                   {return 5;}
    else if (x < 80 && x >= 60)         {return 4;}
    else if (x < 60 && x >= 40)         {return 3;}
    else if (x < 40 && x >= 25)         {return 2;}
    else if (x < 25)                    {return 1;}
}