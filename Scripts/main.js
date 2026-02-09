console.log("app started");
let landingPage = document.querySelector('#landing-page');
let editorPage = document.querySelector('#editor-page')
let openEditorButton = document.querySelector("#open-editor-btn");
function setView(viewName){
    if(viewName === "landing"){
        editorPage.style.display ="none"
        landingPage.style.display ="block"
    }
    if(viewName === "editor"){
        editorPage.style.display ="block"
        landingPage.style.display ="none"
    }
    state.view = viewName;
    saveState();

}
setView(state.view);

openEditorButton.addEventListener('click',()=>{
    window.location.hash ='/editor';
})
