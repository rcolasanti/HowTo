var dataset = ["A", "B", "C", "D", "E", "F", "G"]

function update() {
  ///selects all of the paragraphs that are currently on the page
  var currentTxt = d3.select("#dataArea").selectAll("p")
    .data(dataset)

  //update thoes data that are present
  currentTxt.style("color", "rgba(0,0,200,1)")
    .text(function(d) {
      return d;
    })

  // add new data
  var newTxt = currentTxt.enter()

  newTxt.append("p")
    .text(function(d) {
      return d
    })
    .on("click", function(d,i) {
      dataset[i] = "X"
      update()
    })
    .style("color", "rgba(200,100,0,1)")
    .style("cursor", "pointer")
}

function addData() {
  dataset.push("Z")
  update()
}

update()
