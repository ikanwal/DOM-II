
var item = document.querySelectorAll('.block')
item.forEach(text=>{
    text.addEventListener('mouseenter',(event)=>{
        event.target.style.background="coral"
        event.target.style.transition = "all 2s"; 
        event.target.style.transform ="translate(50px)";
     
    })
})

item.forEach(text=>{
    text.addEventListener('mouseleave',(event)=>{
        event.target.style.background=""
        event.target.style.transition = "all 2s"; 
        Event.target.style.transform ="translate(0px)"
      
    })
})