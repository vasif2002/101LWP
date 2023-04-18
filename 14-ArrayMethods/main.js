let arr = ["lankaran", "baki", "masalli", "lerik", "astara"];
let arr2 = ["mandalin", "limon"];
function asd(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i].length >= 3) {
      text[i] = text[i].substring(0, 3);
    } else {
      text[i] = text[i];
    }
  }
  return text;
}

function elementlet(arr) {
  return arr.filter(function (element) {
    return element.charAt(0) !== "l";
  });
}

function repleyc(arry, new_arry) {
  arry.splice(1, 0, new_arry);
  return arry;
}
console.log("Arry:", arr);
console.log("test1", asd(arr));
console.log("test2", elementlet(arr));
console.log("Test3", repleyc(arr, arr2));