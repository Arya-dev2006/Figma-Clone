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
let targetX = 50;
let targetY = 50;

let currentX = 50;
let currentY = 50;


landingPage.addEventListener("mousemove", (e) => {
  const rect = landingPage.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  targetX = (x / rect.width) * 100;
  targetY = (y / rect.height) * 100;
});

function animate() {
  currentX += (targetX - currentX) * 0.12;
  currentY += (targetY - currentY) * 0.12;

  landingPage.style.setProperty("--x", currentX + "%");
  landingPage.style.setProperty("--y", currentY + "%");

  requestAnimationFrame(animate);
}

animate();
