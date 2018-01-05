var dataset = Array(6);
for (var i = 0; i < dataset.length; i++) {
  dataset[i] = Math.floor((Math.random() * 50) + 1);
}

var chart = document.getElementById("js-chart")
for (var i = 0; i < dataset.length; i++) {
  var div = document.createElement("div");
  div.className = "bar";
  div.style.width = dataset[i] * 10 + "px"
  div.innerHTML = dataset[i]
  chart.appendChild(div)
}

d3.select("#d3-chart").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .text(function(d) {
    return (d)
  })
  .style("width", function(d) {
    return d * 10 + "px"
  })

function update() {
  ///Selects all of the divs that are currently on the page
  var currentBar = d3.select("#d3-dy-chart").selectAll("div")
    .data(dataset)
  // Updates data of "current" divs
  currentBar.text(function(d) {
      return (d)
    })
    .style("width", function(d) {
      return d * 10 + "px"
    })

  // List of new data
  var newBar = currentBar.enter()
  // Append "new" div to the d3 corisponding to the new data
  newBar.append("div")
    .attr("class", "bar")
    .text(function(d) {
      return (d)
    })
    .style("width", function(d) {
      return d * 10 + "px"
    })
    .on("click", function(d, i) {
      // aAttach function to remove data on click
      dataset.splice(i, 1)
      update()
    })
    .style("cursor", "pointer")

  // List of "current" divs with no data
  var oldBar = currentBar.exit()
  // emove thoes divs
  oldBar.remove()
}

// called from add button
function addData() {
  dataset.push(Math.floor((Math.random() * 10) + 1))
  update()
}

function mixData() {
  for (var i = 0; i < dataset.length; i++) {
    dataset[i] = Math.floor((Math.random() * 50) + 1);
  }
  update()
}

update()
