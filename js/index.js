
// Your code goes here
var busImg = document.querySelector('.intro img')
busImg.addEventListener('mouseenter',()=>{
    busImg.style.transform="scale(1.1)"
    busImg.style.transition="all 0.3s"
})
busImg.addEventListener('mouseleave',()=>{
    busImg.style.transform="scale(1.0)"
    busImg.style.transition="all 0.3s"
})

var changeImg=document.querySelector('.img-content img')
changeImg.addEventListener('dblclick',()=>{
    changeImg.src="https://nancysmarriageblog.files.wordpress.com/2011/08/fun-bus.jpeg"
})

var btnText=document.querySelectorAll('.btn')
console.log(btnText)
btnText.forEach(text=>{
    text.addEventListener('mouseover',(event)=>{
        event.target.textContent="Click!!"
    })
})

btnText.forEach(text=>{
    text.addEventListener('mouseout',(event)=>{
        event.target.textContent="Sign Me Up!"
    })
})


var paraColor = document.querySelectorAll('.text-content p')
paraColor.forEach(text=>{
    text.addEventListener('mouseenter',(event)=>{
        event.target.style.background="coral"
        event.target.style.color="white"
    })
})
paraColor.forEach(text=>{
    text.addEventListener('mouseleave',(event)=>{
        event.target.style.background=""
        event.target.style.color="black"
    })
})

var BottomtextColor = document.querySelectorAll('.destination h4')
BottomtextColor.forEach(text=>{
    text.addEventListener('mouseenter',(event)=>{
        event.target.style.background="pink"
        event.target.style.color="white"
    })
})
BottomtextColor.forEach(text=>{
    text.addEventListener('mouseleave',(event)=>{
        event.target.style.background=""
        event.target.style.color="black"
    })
})

const aLinks = document.querySelectorAll(".nav a");
aLinks.forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
   alert(`${e.target.innerText} was clicked!`);
  });
});