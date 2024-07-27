

  // show menu
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

  //Menu show
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      navMenu.classList.add('show-menu')
    });
  }

  //Menu hidden
  if(navClose){
    navClose.addEventListener('click', ()=>{
      navMenu.classList.remove('show-menu')
    })
  }

  //remove menu mobile
  const navLink = document.querySelectorAll('.nav-link')

  const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));

