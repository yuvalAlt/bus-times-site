$(function () {
    var url = 'bus\ info/routes.txt';
    jQuery.get(url, function(data){
        var lines = data.split("\n");
        for(var i = 1; i < lines.length - 1; i++){
            var route = lines[i].split(",");
            var busLine = document.createElement("option");
            var optTemp = document.createTextNode(route[2]+" "+route[3]);
            busLine.appendChild(optTemp);
            yrtBusOps.appendChild(busLine);
        }
    });
    var yrtBusOps = document.getElementById("yrt_routes_options");
    var yrtTimeOps = $('yrt_time_options');




});
// Is there another YRT route
function hasNextYRT(i) {
    i = i + 1;
    return i < 5;
}
// Get the next YRT route info
function getNextYRTNum(i) {
    return i;
}