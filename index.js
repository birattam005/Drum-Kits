const crashEl = document.querySelector(".crash");
const kickEl = document.querySelector(".kick");
const snareEl = document.querySelector(".snare");
const tomEl = document.querySelector(".tom");

crashEl.addEventListener("click", ()=>{
    var cS = new Audio('sounds/projects_drum-kits_sounds_crash.mp3');
    cS.play();
})

kickEl.addEventListener("click", ()=>{
    let kS= new Audio("sounds/projects_drum-kits_sounds_kick.mp3");
    kS.play();
})

snareEl.addEventListener("click", ()=>{
    let sS = new Audio("sounds/projects_drum-kits_sounds_snare.mp3");
    sS.play();
})

tomEl.addEventListener("click", ()=>{
    let tS = new Audio("sounds/projects_drum-kits_sounds_tom.mp3");
    tS.play();
})


