let languardBtn = document.querySelector('.languard__btn')
let shepe = document.querySelector('.shepe');


languardBtn.addEventListener('click',()=>{
    let b1 = document.querySelector('.b1')
   
    b1.classList.toggle('blok')
    languardBtn.style.height="100%"
   shepe.style.transform='rotate(-90deg)'
  

})
