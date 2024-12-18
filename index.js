jatekosok = document.querySelectorAll('.jatekosok');
let jatekter = document.getElementById("jatekter");


jatekosok.forEach(jatekosok => {
    jatekosok.addEventListener('dragstart',(event) =>{
        event.dataTransfer.setData('text/plain',event.target.id)
        console.log(event.dataTransfer.setData('text/plain',event.target.id));
    })
});

for(let i=0;i<11;i++){
    let drop = document.createElement("div");
    drop.id = i;
    drop.classList="dropzone";
    jatekter.appendChild(drop);

    drop.addEventListener('dragover',(event)=>{
        event.preventDefault();
        drop.style.backgroundColor = 'gray'
        console.log("Elem fölött")
    })
    drop.addEventListener('dragleave',()=>{
        drop.style.backgroundColor = "lightgray"
    })
    drop.addEventListener('drop',(event) =>{
        event.preventDefault();
        const id = event.dataTransfer.getData('text/plain')
        const draggedelement = document.getElementById(id);
        drop.appendChild(draggedelement);
        drop.style.backgroundColor = 'lightgreen'
        console.log('Elem sikeresen dobva')
    })

}