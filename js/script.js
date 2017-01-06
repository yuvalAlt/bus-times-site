$(function () {
    var yrtBusOps = document.getElementById("yrt_routes_options");
    var yrtTimeOps = $('yrt_time_options');

    var busLine = document.createElement("option");
    var optTemp = document.createTextNode("The First Option of Its Kind");
    busLine.appendChild(optTemp);
    yrtBusOps.appendChild(busLine);

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