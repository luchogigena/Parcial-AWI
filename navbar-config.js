const pages = [
    { title: "Inicio", url: "index.html" },
    { title: "Destinos", url: "destinos.html" },
    { title: "Ofertas", url: "Ofertas.html" },
    { title: "Contacto", url: "contacto" },
    { title: "Login", url: "login.html" },
    { title: "Cerrar Sesion", url: "login.html" },
];

const navLinksContainer = document.getElementById('navLinks');

pages.forEach(page => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    const a = document.createElement('a');
    a.classList.add('nav-link');
    a.href = page.url;
    a.textContent = page.title;
    li.appendChild(a);
    navLinksContainer.appendChild(li);
});
   
    
