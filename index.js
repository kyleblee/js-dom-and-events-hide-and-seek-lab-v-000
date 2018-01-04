function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target, nested) {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    const current = parseInt(ranks[i].innerHTML);
    ranks[i].innerHTML = current + n;
  }
}

function deepestChild() {
  let currentNode = document.querySelector('div#grand-node');
  while (currentNode.children.length !== 0) {
    currentNode = currentNode.children[0];
  }
  return currentNode;
}
