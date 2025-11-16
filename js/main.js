// mark active nav-link by pathname
document.addEventListener('DOMContentLoaded',()=>{
  const page = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(a=>{
    if(a.getAttribute('href') && a.getAttribute('href').endswith(page)){
      a.classList.add('active');
    }
  });
});