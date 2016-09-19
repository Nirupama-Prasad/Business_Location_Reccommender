var svg;
function chordMapGenerator(matrix1)
{
alert(matrix1.length);
	//var matrix = 0;
	//for(var i = 0 ; i< matrix1.length ; i++)
		//{
		//alert(Number(matrix1[i]));
		//matrix[i]= Number(matrix1[i]);
		//}
	

 /*
 var matrix = [
  [11975,  5871, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 8010, 16145, 8090, 8045],
  [ 1013,   990,  940, 6907],
  
];*/

 var matrix = [
               [matrix1[0],  matrix1[1], matrix1[2], matrix1[3],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [ matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [ matrix1[8], matrix1[9], matrix1[10], matrix1[11],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [ matrix1[12],   matrix1[13],  matrix1[14], matrix1[15],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [matrix1[0],  matrix1[1], matrix1[2], matrix1[3],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [ matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [ matrix1[8], matrix1[9], matrix1[10], matrix1[11],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [ matrix1[12],   matrix1[13],  matrix1[14], matrix1[15],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [matrix1[0],  matrix1[1], matrix1[2], matrix1[3],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [ matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [ matrix1[8], matrix1[9], matrix1[10], matrix1[11],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]],
               [ matrix1[12],   matrix1[13],  matrix1[14], matrix1[15],matrix1[4], matrix1[5], matrix1[6], matrix1[7],matrix1[4], matrix1[5], matrix1[6], matrix1[7]]];
	
	
var chord = d3.layout.chord()
    .padding(.05)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending)
    .matrix(matrix);

var width = 2000,
    height = 2000,
    innerRadius = Math.min(width, height) * 1,
    outerRadius = innerRadius * 1.2;

var fill = d3.scale.ordinal()
    .domain(d3.range(12))
   .range(["#000000", "#FFDD89", "#957244", "#F26223","#123456", "#FFEE99", "#957777", "#456789","#000000", "#FFDD89", "#957244", "#F26223"]);

//  .range(["#FFDD89", "#FFDD89", "#FFDD89", "#FFDD89"]);

svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.append("g").selectAll("path")
    .data(chord.groups)
    .text("abc")
  .enter().append("path")
    .style("fill", function(d) { return fill(d.index); })
    .style("stroke", function(d) { return fill(d.index); })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1))
	.style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
	.text(function(d) { return d.label; })
	.append("svg:text")
.each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
.attr("dy", ".35em")
.style("font-family", "helvetica, arial, sans-serif")
.style("font-size", "9px")
.attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
.text("Hello");




var ticks = svg.append("g").selectAll("g")
    .data(chord.groups)
  .enter().append("g").selectAll("g")
    .data(groupTicks)
  .enter().append("g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius + ",0)";
    });

ticks.append("line")
    .attr("x1", 1)
    .attr("y1", 0)
    .attr("x2", 5)
    .attr("y2", 0)
    .style("stroke", "#000");


ticks.append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
    .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .text(function(d) { return d.label; });

svg.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("fill", function(d) { return fill(d.target.index); })
    .style("opacity", 1);
	

// Returns an array of tick angles and labels, given a group.




}
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v / 1000 + "k"
    };
  });
}

// Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(g, i) {
    svg.selectAll(".chord path")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
        .style("opacity", opacity);
  };
}


svg.selectAll("path")
.on("mouseover", fade(.1))
.on("mouseout", fade(1));

