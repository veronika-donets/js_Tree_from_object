const data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

const container = document.getElementById('container');

function makeList(obj) {

  const list = document.createElement('ul');

  if (Object.keys(obj).length === 0) { return; }

  for (let key in obj) {
    let item = document.createElement('li');
    item.textContent = key;

    if (makeList(obj[key])) {
      item.append(makeList(obj[key]));
    }
    list.append(item);
  }

  return list;
}

function createTree(container, data) {
  container.append(makeList(data));
}

createTree(container, data);
