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



function addData(object,newName){
  if(object.hasOwnProperty('children')==false){
    object.children=[]
  }
  object.children.push({"name":newName})
}
