/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

//the following functions can be used
L.geoJSON(geojsonFeature).addTo(map);

var freeway = L.geoJson(geojsonFeature, {filter: freewayFilter}).addTo(map);
function freewayFilter(feature) {
  if (feature.properties.Freeway === "Yes") return true;
}
//similary functions apply to other road classifications
