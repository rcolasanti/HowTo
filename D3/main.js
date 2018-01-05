var dataset = Array(7);
for (var i = 0; i < dataset.length; i++) {
  dataset[i] = i;
}
console.log(dataset);

function update() {
  ///selects all of the paragraphs that are currently on the page
  var currentTxt = d3.select("#dataArea").selectAll("p")
    .data(dataset)

  console.log(currentTxt);
  //update thoes data that are present
  // set old data se blue
  currentTxt.style("color", "rgba(0,0,200,1)")
    .text(function(d) {
      return d;
    })

  // list of new data
  var newTxt = currentTxt.enter()

  // append new svg to the d3 corisponding to the new data
  newTxt.append("p")
    .text(function(d) {
      return d
    })
    .on("click", function(d, i) {
      dataset.splice(i, 1)
      update()
    })
    // set new data as green
    .style("color", "rgba(0,200,0,1)")
    .style("cursor", "pointer")

  // list of old data
  var oldTxt = currentTxt.exit()
  oldTxt.remove()
}

function addData() {
  dataset.push(Math.floor((Math.random() * 10) + 1))
  update()
}

update()
