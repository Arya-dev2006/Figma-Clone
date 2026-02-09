function handleRouterChange(){
   const hash = window.location.hash;
    if(hash === '#/editor'){
        setView("editor")
        return
    }
    if(hash === "#/"||hash === ""){
        setView("landing")
        return
    }
    setView("landing")
}


handleRouterChange();



window.addEventListener("hashchange",handleRouterChange)