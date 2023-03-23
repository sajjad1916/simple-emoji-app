// select the open and close class
const openFace = document.querySelector('.open');
const closedFace = document.querySelector('.closed')

// add click event listen
closedFace.addEventListener('click',()=>{
  if(openFace.classList.contains("open")){
    openFace.classList.add('active');
    closedFace.classList.remove('active')
  } 
})

openFace.addEventListener('click',()=>{
    if(closedFace.classList.contains("closed")){
      closedFace.classList.add('active');
      openFace.classList.remove('active')
    } 
  })
  
