const astronaut = document.querySelector(".astronaut");

document.addEventListener("mousemove", (e) =>{
    let x = e.clientX / window.innerWidth - 0.5;
    let Y = e.clientY / window.innerHeight - 0.5; 

    astronaut.style.transform = 'translate(${x * 30 } px, ${y * 30} px)';

});