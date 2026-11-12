const parent_box=document.querySelector('.board');
for(let i=0;i<256;i++){
    const newDiv= document.createElement('div');
    newDiv.className='box';
    parent_box.appendChild(newDiv);
}
