
function createBoard(size) {
  for (var i = 0; i < size; i++) {
    let tiles = document.createElement('div');
    tiles.className = "tiles";
    tiles.style.width = "11.111%";
    tiles.style.cssFloat = "left";
    tiles.style.paddingBottom = "11.1%";
    // tiles.addEventListener("click", randomColorBoard(81))
    tiles.addEventListener("mouseover", function () {
      alphaBoard(81);
    });
    tiles.addEventListener("click", function(){
      randomColorBoard(81);
    });
    if(i % 2 !== 0){
      tiles.style.backgroundColor = "rgb(255,0,0)";
    }else {
      tiles.style.backgroundColor = "rgb(0,0,0)";
    }
    document.body.appendChild(tiles);
  }
}
createBoard(81);
function randomRGB() {
  let rgb = "rgb("
  for (var i = 0; i < 2; i++) {
    rgb += Math.floor(Math.random() * 255) +",";
  }
  return rgb += Math.floor(Math.random() * 255) +")";
}
function randomColorBoard(size) {
  for (let i = 0; i < size; i++) {
    let newColor = document.getElementsByClassName('tiles')[i];
    newColor.style.backgroundColor = randomRGB();
  }
}
function alphaBoard(size) {
  let alpha = 0;
  let tiles = document.getElementsByClassName('tiles');
  for (var i = 0; i < size; i++) {
    alpha += (1/size);
    tiles[i].style.backgroundColor = addAlpha(tiles[i], alpha);
  }
}
function addAlpha(element, alpha) {
  let elementBC = element.style.backgroundColor;
    elementBC = elementBC.replace(')', ', '+ alpha + ')').replace('rgb', 'rgba');
    return elementBC;
}
