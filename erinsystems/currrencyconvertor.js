var rates = [2450, 3406, 330, 443];

var MNTUSD = rates[0];
var MNTEUR = rates[1];
var MNTTRL = rates[2];
var MNTCNY = rates[3];

var result = 0;
function convert(amount, convertFrom, convertTo) {
    if (convertFrom == "MNT" && convertTo == "USD") {
        result = amount * MNTUSD;
    } else if (convertFrom == "MNT" && convertTo == "EUR") {
        resunlt = amount * MNTEUR;
    } else if

    document.write(amount + " " + convertFrom + " = " +result + " " + convertTo + "<br>");

}
convert (100, "MNT", "USD");