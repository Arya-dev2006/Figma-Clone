let defaultState ={
    view:"landing",
}

const STORAGE_KEY = "Figma_storage_key";
let state = loadState() || defaultState

function loadState(){
   let saved =  localStorage.getItem(STORAGE_KEY);
   if(!saved) return null

   return JSON.parse(saved)
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

console.log(state)