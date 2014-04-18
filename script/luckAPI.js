function luck(nickname, bloodType) {
    var result = "";
    var lucks = new Array();
    lucks["A"] = "大吉";
    lucks["B"] = "吉";
    lucks["O"] = "凶";
    lucks["AB"] = "大凶";
    return nickname + "さんの運勢は" + lucks[bloodType] + "です。";
/*
    switch (bloodType) {
    	case "A"  : result = "大吉"; break;
        case "B"  : result = "吉";   break;
        case "O"  : result = "凶";   break;
        case "AB" : result = "大凶"; break;
    }
    return nickname + "さんの運勢は" + result + "です。";
*/
}
