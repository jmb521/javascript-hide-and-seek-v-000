function getFirstSelector(selector) {
  var gotIt = document.querySelector(selector);
  return gotIt;
}

function nestedTarget() {
  var gotIt = document.querySelector('#nested .target');
  return gotIt;
}

function deepestChild() {
  var gotIt = document.getElementById('grand-node')
  var node = gotIt.children[0]
  while (node) {
    gotIt = node
    node = gotIt.children[0]

  }
  return gotIt
}

function increaseRankBy(n) {
  var gotIt = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < gotIt.length; i++) {
    var theChild = gotIt[i].children
    for (var j = 0; j < theChild.length; j++) {

      theChild[j].innerHTML = parseInt(theChild[j].innerHTML) + n

    }
  }

}
