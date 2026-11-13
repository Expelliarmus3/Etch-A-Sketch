// let sketchErasemode=false;
// // let erasermode=false;
// const sketchbtn=document.querySelector('.sketch');
// const eraserbtn=document.querySelector('.eraser');

// function createGrid(grid){
//     const parent_box=document.querySelector('.board');
//     parent_box.innerHTML = '';
//     parent_box.style.width = `${grid * 22}px`;
//     for(let i=0;i<(grid*grid);i++){
//         const newDiv= document.createElement('div');
//         newDiv.className='box';
//         parent_box.appendChild(newDiv);
//     }  
//     sketchbtn.onclick=()=>{
//         // sketchmode=!sketchmode;
//         // erasermode=false;
//         sketchErasemode=!sketchErasemode;
//     }
//     eraserbtn.onclick=()=>{
//         // erasermode=!erasermode;
//         // sketchmode=false;
//         sketchErasemode=!sketchErasemode;
//     }
//     const trail=document.querySelectorAll('.box');
//     trail.forEach((box)=>{
//         box.addEventListener('mouseenter',()=>{
//             if(sketchErasemode){
//                 box.style.backgroundColor='slategrey';
//             }
//             else if(!sketchErasemode){
//                 box.style.backgroundColor='beige';
//             }
//         })
//     })
// }

// const gridbtn=document.querySelector('.grid');
// gridbtn.onclick=()=>{
//     const grid=prompt("What box size do you want?");
//     createGrid(grid);
    
// }


// //const grid=prompt("What box size do you want?");
// // const parent_box=document.querySelector('.board');
// // parent_box.style.width = `${grid * 22}px`;
// // for(let i=0;i<(grid*grid);i++){
// //     const newDiv= document.createElement('div');
// //     newDiv.className='box';
// //     parent_box.appendChild(newDiv);
// // }

// // //SKETCH
// // let sketchmode=false;
// // const sketchbtn=document.querySelector('.sketch');
// // sketchbtn.onclick=()=>{
// //     erasermode=!erasermode;
// //     sketchmode=!sketchmode;
// // }
// // const trail=document.querySelectorAll('.box');
// // trail.forEach((box)=>{
// //     box.addEventListener('mouseenter',()=>{
// //         if(sketchmode){
// //             box.style.backgroundColor='slategrey';
// //         }
// //     })
// // });

// // //ERASER
// // let erasermode=true;
// // const eraserbtn=document.querySelector('.eraser');

// // eraserbtn.onclick=()=>{
// //     erasermode=!erasermode;
// //     sketchmode=!sketchmode;
// // }
// // const eraser=document.querySelectorAll('.box');
// // eraser.forEach((box)=>{
// //     box.addEventListener('mouseenter',()=>{
// //         if(erasermode){
// //             box.style.backgroundColor='beige';
// //         }
// //     })
// // })

// // let sketchErasemode=false;
// // // let erasermode=false;
// // const sketchbtn=document.querySelector('.sketch');
// // const eraserbtn=document.querySelector('.eraser');
// // sketchbtn.onclick=()=>{
// //     // sketchmode=!sketchmode;
// //     // erasermode=false;
// //     sketchErasemode=!sketchErasemode;
// // }
// // eraserbtn.onclick=()=>{
// //     // erasermode=!erasermode;
// //     // sketchmode=false;
// //     sketchErasemode=!sketchErasemode;
// // }
// // const trail=document.querySelectorAll('.box');
// // trail.forEach((box)=>{
// //     box.addEventListener('mouseenter',()=>{
// //         if(sketchErasemode){
// //             box.style.backgroundColor='slategrey';
// //         }
// //         else if(!sketchErasemode){
// //             box.style.backgroundColor='beige';
// //         }
// //     })
// // })