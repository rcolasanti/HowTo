var data = {
  "name": "A",
  "children": [{
      "name": "A-1",
      "children": [{
          "name": "A-1-1",
        },
        {
          "name": "A-1-2",
        }
      ]
    },
    {
      "name": "A-2",
    }
  ]
};


function find(object,searchFor) {
  if (object.hasOwnProperty('name') && object.name == searchFor){
    return object;
  }

  if (object.hasOwnProperty('children')){
    for (var i = 0; i < object.children.length; i++) {
      var res = find(object.children[i],searchFor)
      if (res !=null){
        return res;
      }
    }
  }
  return null;
}

console.log(find(data,"A-1-1"));
