
 document.addEventListener('DOMContentLoaded', () => {

   const animationHeader = function () {
     let lastScroll = 0;
     const defaultOffset = 200;
     const header = document.querySelector('.header');
     const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop;
     const containHide = () => header.classList.contains('hide');
     window.addEventListener('scroll', () => {
       if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset){
         header.classList.add('hide');
       }
       else if (scrollPosition() < lastScroll && containHide()){
         header.classList.remove('hide');
       }
       lastScroll = scrollPosition();
     })
   }
   animationHeader();

   const tl = gsap.timeline()
     .from('.block-picture', {opacity: 0, x: 100, duration: 0.6 })
     .from('.block-info', {opacity: 0, x: -100, duration: 0.6 })

 });