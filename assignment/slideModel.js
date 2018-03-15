/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true; }
};

var slide1 = {
  slideNumber: 1,
  title: "CMP Overview",
  filter: function(geojsonFeature) { return true; }
};

var slide2 = {
  slideNumber: 2,
  title: "Urban Street I",
  filter: function(geojsonFeature) { return 'Urban Street I'; }
};

var slide3 = {
  slideNumber: 3,
  title: "Urban Street II",
  filter: function(geojsonFeature) { return 'Urban Street II'; }
};

var slide4 = {
  slideNumber: 4,
  title: "Urban Street III",
  filter: function(geojsonFeature) { return 'Urban Street III'; }
};

var slide5 = {
  slideNumber: 5,
  title: "Urban Street IV",
  filter: function(geojsonFeature) { return 'Urban Street IV'; }
};

var slide6 = {
  slideNumber: 6,
  title: "Freeway",
  filter: function(geojsonFeature) { return 'Freeway'; }
};
/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slide1, slide2, slide3, slide4, slide5, slide6];
