
var svg = d3.select("#svgcanvas .chart")

function update() {

    // Adds any new data and any new elemnts
    var abm = svg.selectAll('circle.abm')
        .data(agents)
        .enter()
        .append('circle')
        .attr("class",function(d){return d.type})
        .classed("abm",true)

    // updates the visuals of the element with data
    // has to get all of thoes elements first
    var abmUpdate = svg.selectAll('circle.abm')
        .data(agents)
        .attr('cx', function(d) {
            return d.xpos;
        })
        .attr('cy', function(d) {
            return d.ypos;
        })


    // removes any elements that have no data attached
    abmUpdate.exit().remove()
}
