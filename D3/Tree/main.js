//http://d3indepth.com/layouts/
var tree = d3.tree().size([300, 500]);
// take the nested data and turn it into a d3 hierarchy. This has aditional hierarchy data like depth and parent

//This crates the x and y values for each node of root in accordance with the tree layout.
var root = d3.hierarchy(data);

var zoom = d3.zoom().on("zoom", zoomed);

function zoomed() {
  var currentTransform = d3.event.transform;
  svg.attr("transform", currentTransform);
}

var svg = d3.select("#svgCanvas").call(zoom)

function update() {
  var treeData = tree(root)
  var dNodes = treeData.descendants();
  var dLinks = treeData.links()
  dNodes.forEach(function(d) {
    d.y = d.depth * 130
  });
  var currentLinks = d3.select("#svgArea").selectAll("path.link")
    .data(dLinks) // an array of all of the links of the tree

  var newLinks = currentLinks.enter();
  newLinks.append('path')
    .classed("link", true)
    .merge(currentLinks)
    .attr('d', function(d) {
      var s = {
        x: d.source.x,
        y: d.source.y
      }
      var t = {
        x: d.target.x,
        y: d.target.y
      }
      path = diagonal(s, t);
      return path;
    });

  currentLinks.exit().remove()

  var currentNodes = d3.select("#svgArea").selectAll("g.node")
    .data(dNodes) // an array of all of the nodes of the tree


  var newNodes = currentNodes
    .enter()
    .append('g')
    .attr("cursor", "pointer")
    .classed('node', true) //adds node class
    .on("click", click)
    .on("contextmenu", function(d, i) {
      d3.event.preventDefault();
      addData(d.data, d.data.name + " new")
      root = d3.hierarchy(data);
      update()
    })

  newNodes.append("circle")
    .attr("r", 6)

  newNodes.append("text").text(d => d.data.name)

  // this applied to bothold and new data
  var nodeUpdate = newNodes.merge(currentNodes)
  // note x and y swaped so  that tree is now rotated 90 degrees
  nodeUpdate.attr("transform", function(d) {
    return "translate(" + d.y + "," + d.x + ")";
  })

  currentNodes.exit().remove()


}

// Creates a curved  path from source to target nodes
// THis is set for rotated tree
function diagonal(s, d) {
  path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

  return path
}

function click(d) {
  if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
  update();
}

update()
