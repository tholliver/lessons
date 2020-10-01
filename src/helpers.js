import cad from "./foods";

function choise(items) {
  console.log(cad.length);
  let choosen = Math.floor(Math.random() * cad.length);
  return choosen;
}

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      items[i]=null;

    }
    return items;
  }
}

function counter(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i]!=null) {
      count++;
    }
    
  }
  return count;
}
/*Ma try
function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      items[i] = null;
    }
  }
} 
*/
export { choise, remove, counter };
