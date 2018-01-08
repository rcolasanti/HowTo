//http://d3indepth.com/layouts/
var tree = d3.tree().size([300, 300]);
// take the nested data and turn it into a d3 hierarchy. This has aditional hierarchy data like depth and parent

//This crates the x and y values for each node of root in accordance with the tree layout.

function update() {
  var root = d3.hierarchy(data);
  var treeData = tree(root)
  var dNodes = treeData.descendants();
  var dLinks = treeData.links()
  dNodes.forEach(function(d){ d.y = d.depth * 130});
  var currentLinks = d3.select("#svgcanvas").selectAll("line.links")
    .data(dLinks) // an array of all of the links of the tree

  var newLinks = currentLinks.enter();
  newLinks.append("line")
    .classed("links", true)
    .merge(currentLinks)
    .attr('x1',d=>d.source.x)
    .attr('y1',d=>d.source.y)
    .attr('x2',d=>d.target.x)
    .attr('y2',d=>d.target.y)


    var currentNodes = d3.select("#svgcanvas").selectAll("circle.node")
      .data(dNodes) // an array of all of the nodes of the tree

    var newNodes = currentNodes.enter();
    newNodes.append('circle')
      .classed('node', true) //adds node class
      .merge(currentNodes)
      .attr('cx', d=>d.x)
      .attr('cy', d=> d.y)
      .attr('r', 10)
      .on("click", function(d) {
          thisData = d.data
          if(thisData.hasOwnProperty('children')){
            thisData.children.push({"name":"new"})
          }else{
            thisData.children=[{"name":"new"}]
          }
          update()
      })




}

update()
