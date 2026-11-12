const parent_box=document.querySelector('.board');
for(let i=0;i<256;i++){
    const newDiv= document.createElement('div');
    newDiv.className='box';
    parent_box.appendChild(newDiv);
}

// //SKETCH
// let sketchmode=false;
// const sketchbtn=document.querySelector('.sketch');
// sketchbtn.onclick=()=>{
//     erasermode=!erasermode;
//     sketchmode=!sketchmode;
// }
// const trail=document.querySelectorAll('.box');
// trail.forEach((box)=>{
//     box.addEventListener('mouseenter',()=>{
//         if(sketchmode){
//             box.style.backgroundColor='slategrey';
//         }
//     })
// });

// //ERASER
// let erasermode=true;
// const eraserbtn=document.querySelector('.eraser');

// eraserbtn.onclick=()=>{
//     erasermode=!erasermode;
//     sketchmode=!sketchmode;
// }
// const eraser=document.querySelectorAll('.box');
// eraser.forEach((box)=>{
//     box.addEventListener('mouseenter',()=>{
//         if(erasermode){
//             box.style.backgroundColor='beige';
//         }
//     })
// })

let sketchmode=false;
let erasermode=false;
const sketchbtn=document.querySelector('.sketch');
const eraserbtn=document.querySelector('.eraser');
sketchbtn.onclick=()=>{
    sketchmode=!sketchmode;
    erasermode=false;
}
eraserbtn.onclick=()=>{
    erasermode=!erasermode;
    sketchmode=false;
}
const trail=document.querySelectorAll('.box');
trail.forEach((box)=>{
    box.addEventListener('mouseenter',()=>{
        if(sketchmode){
            box.style.backgroundColor='slategrey';
        }
        else if(erasermode){
            box.style.backgroundColor='beige';
        }
    })
})