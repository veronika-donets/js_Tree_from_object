let data = {
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

function makeList(data) {

  const list = document.createElement('ul');

  if (Object.keys(data).length === 0) {
    return;
  }

  for (let key in data) {
    let item = document.createElement('li');
    item.textContent = key;

    if (makeList(data[key])) {
      item.append(makeList(data[key]));
    }
    list.append(item);
  }

  return list;
}

function createTree(container, data) {
  container.append(makeList(data));
}

createTree(container, data);
