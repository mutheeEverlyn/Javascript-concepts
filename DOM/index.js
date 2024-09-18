document.addEventListener('DOMContentLoaded',()=>{
    const list=document.querySelector('.list ul');
    const forms=document.forms;
    const addmovie=forms['add-movie'];
     
    //add a movie
    addmovie.addEventListener('submit',(e)=>{
      e.preventDefault();

      //create elements
      const value=addmovie.querySelector('input[type="text"]').value;
      const li=document.createElement('li');
      const movieName=document.createElement('span');
      const deleteBtn=document.createElement('span');

      //add text content
      movieName.textContent=value;
      deleteBtn.textContent='delete';

      //add classes
      movieName.classList.add('name');
      deleteBtn.classList.add('delete');

      //appending to DOM
      li.appendChild(movieName);
      li.appendChild(deleteBtn);
      list.appendChild(li);

      //clear inputs
      addmovie.querySelector('input[type="text"]').value='';
    })

    //delete movie
    list.addEventListener('click',(e)=>{
    if(e.target.className=='delete'){
     const li=e.target.parentElement;
     li.parentNode.removeChild(li);   
    }
    })
})