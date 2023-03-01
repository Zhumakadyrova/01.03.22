
// найти все элементы
const newItemInpt = document.querySelector("#new-item");
const itemsList = document.querySelector("#items");
const addItemBtn = document.querySelector("#add-item");

function removeItem() {
  this.parentElement.remove();
}

function addItem() {
  // проверить наличие значения input
  if (newItemInpt.value.trim() !== "") {
    // добавить li к ul
    const itemLi = document.createElement("li");
    itemsList.append(itemLi);
  
    // задать содержимое li исходя из значения input
    itemLi.textContent = newItemInpt.value;
  
    // сбросить значение input
    newItemInpt.value = "";
    // добавить button к li
    const removeBtn = document.createElement("button");
    itemLi.append(removeBtn);
    // задать текст и слушатель событий для button
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", removeItem);
  }
}
// добавить слушатель событий
addItemBtn.addEventListener("click", addItem);

// добавить слушатель событий для input
newItemInpt.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    addItem();
  }
});

const newInp = document.querySelector("#new-item1");
const newBtn = document.querySelector("#add-item1");
const list = document.querySelector("#items1");

function removeItem() {
  this.parentElement.remove();
}

function addItem() {
  if (newInp.value.trim() !== "") {
    const listLi = document.createElement("li");
    list.append(listLi);

    listLi.textContent = newInp.value;
    newInp.value = "";

    const removePress = document.createElement("button");
    listLi.append(removePress);
    removePress.textContent = "Delete";
    removePress.addEventListener("click", removeItem);

  }
}
newBtn.addEventListener("click", addItem);

newInp.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    addItem();
  }
});

const inp = document.querySelector("#new-inpt");
const btn = document.querySelector("#add-itm");
const ul = document.querySelector("#itms");
function removeItem() {
  this.parentElement.remove
}
function removeItem() {
  this.parentElement.remove();
}
function addItem () {
  if (inp.value.trim() !== "") {
    const ulLi = document.createElement("li");
    ul.append(ulLi);
    ulLi.textContent = inp.value; 
    inp.value = "";

    const del = document.createElement ("button");
    ulLi.append(del);
    del.textContent = "Erase";
    del.addEventListener("click", removeItem)
  }
}
btn.addEventListener("click", addItem);
inp.addEventListener("keydown", function(event) {
  if (event.code ==="Enter") {
    this.parentElement.addItem
  }
})

const text = document.querySelector("#new-info");
const press = document.querySelector("#btn2");
const ul2 = document.querySelector("#ul")
function removeItem() {
  this.parentElement.remove();
}
function addItem() {
  if (text.value.trim() !==""){
    const ulLi = document.createElement("li");
    ul2.append(ulLi);
    ulLi.textContent = text.value;
    text.value = "";
     const del = document.createElement("button");
     ulLi.append.del;
     del.textContent = "Remove";
     del.addEventListener( "click", removeItem)
  }
}
press.addEventListener("click", addItem);
text.addEventListener("keydown", function(event) {
if (event.code ==="Enter") {
  this.parentElement.addItem
}
})