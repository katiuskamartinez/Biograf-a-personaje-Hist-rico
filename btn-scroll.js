export default function btnScroll(btn){
    const $scrollBtn=document.querySelector(btn);
    document.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            window.scrollTo({
                behavior:"smooth",
                top:0,
            });
        }
    });
}