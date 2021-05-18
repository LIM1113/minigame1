  function loadItems(){
  return fetch("data.json")
  .then(response => response.json())
  .then(json => json.item)
  }

function playItemsAll(items){
  let item = document.querySelector('.items');
  item.innerHTML = items.map(value => itemContent(value)).join('');
}

function itemContent(value){
  return `
  <div class="itemsFrame">
    <img class = "clothItems" src="${value.link}" alt="pinkT">
    <div class="itemsName">${value.gender}, ${value.size}</div>
  </div>`
  }

function onButton(event, items){
  let dataset = event.target.dataset;
  let key = dataset.key;
  let value = dataset.value;

  if(key == null || value == null){
    return;
  }

  playItemsAll(items.filter(item => item[key] === value));
}

function setFilter(items){
  let logo = document.querySelector('.logo');
  let buttons = document.querySelector('.buttons');
  logo.addEventListener('click',playItemsAll(items));
  buttons.addEventListener('click', event => onButton(event,items));
  }

loadItems()
.then(items => {
  playItemsAll(items);
  setFilter(items);
})
.catch(console.log)
