
function sides(literals, ...expressions) {
    var area = expressions[0];
    var perimeter = expressions[1];

    var a = (perimeter + Math.sqrt(perimeter*perimeter - 16*area))/4;
    var b = (perimeter - Math.sqrt(perimeter*perimeter - 16*area))/4;
    var arr = [a,b];
    arr = arr.sort(function(a,b){return a-b;});
    return arr;
}

