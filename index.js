class MenuItem {
  constructor(name, description, price, category) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}

const menu = [
  new MenuItem('Scallop shell pies', 'Our passion for excellent food', '12.00', 'starter'),
  new MenuItem('Brown shrimp Ranhofer', 'Our passion for the excellent food', '2.00', 'starter'),
  new MenuItem('Moules marinière', 'Our passion for the excellent food', '6.00', 'starter'),
  new MenuItem('Smoky salmon', 'Our passion for the excellent food','2.00', 'starter')
  
]

const menuSelector = document.querySelectorAll('.menu-select > div > div')

function mostrarMenu (contenido, event) {
  const filtro = menu.filter( elemento => elemento.category===contenido)
  const menuProductos = document.querySelector('.menu-productos')
  const grupoFiltros = filtro.map( x => `<div><div><a href='#'>${x.name}</a><p>${x.description}</p></div><p>$${x.price}</p></div>`)
  const prueba = grupoFiltros.join('')
  menuProductos.innerHTML = prueba
  if(event) {
    menuSelector.forEach( x => x.style.color = 'white')
    event.target.style.color = 'var(--c-dorado)'
  } 
}

menuSelector.forEach( select => {  
  const contenido = select.innerHTML.toLowerCase()
  select.onclick = (event) => {
    mostrarMenu(contenido, event)
  }
  if(select.innerHTML === 'Starter') {
    select.style.color = 'var(--c-dorado)'
  }
})
mostrarMenu('starter')

const arrayFakeCarrusel = ["https://cutesolution.com/html/sushi/assets/img/slider-1.jpg", "https://cutesolution.com/html/sushi/assets/img/slider-2.jpg",
"https://cutesolution.com/html/sushi/assets/img/slider-3.jpg"]

var element = document.querySelector('#navegador');

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  if (scrollPosition !== 0) {
    element.style.backgroundColor = 'white'
    element.style.color = 'black'
    
  } else {
    element.style.backgroundColor = 'transparent'
    element.style.color = 'white'

  }
})


let secuencia = 0
setInterval(() => {
  const remplazarHijo = document.querySelector('.carrusel > div')
  secuencia++
  const crear = document.createElement("img")
  crear.setAttribute("src",arrayFakeCarrusel[secuencia%3])
  crear.setAttribute("alt",secuencia%3)
  remplazarHijo.replaceChild(crear, remplazarHijo.querySelector('img'))
}, 2000)

ScrollReveal().reveal('.video, .propiedades', { distance: '20px', origin: 'bottom', duration: 500 });

function mostrarModal(event) {
  const target = event.currentTarget.getAttribute('data-target');
  
  const modal = document.getElementById(target);
  modal.style.display = 'flex';
}

function cerrarModal(event) {
  const target = event.target
  if(target.id !== 'videoFrame') {
    const change = document.querySelector('#videoFrame')
    change.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    change.src = change.src
    event.currentTarget.style.display = 'none'
  }
}

const video = document.querySelector('#video > div > div')
const modalVideo = document.querySelector('#videoModal')
video.onclick = mostrarModal
modalVideo.onclick = cerrarModal

const svgS = document.querySelectorAll('.svg')
svgS.forEach(element => {
  element.innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="25px" height="25px" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path fill="var(--c-dorado)" d="M5.508 12.591a.553.553 0 0 1-.003-.017l-1.22-7.32A1.5 1.5 0 0 0 2.805 4H2.5a.5.5 0 0 1 0-1h.306a2.5 2.5 0 0 1 2.45 2H21.5a.5.5 0 0 1 .48.637l-2 7a.5.5 0 0 1-.48.363H6.59l.125.747A1.5 1.5 0 0 0 8.195 15H19.5a.5.5 0 0 1 0 1H8.194a2.5 2.5 0 0 1-2.466-2.089zM5.424 6l1 6h12.699l1.714-6zM8 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" data-original="#000000" opacity="1"/></g></svg>'
});

const teamInteraction = document.querySelectorAll('.team > div > div > .team-imagen')
teamInteraction.forEach(member => {
  const createElement = document.createElement('div')
  createElement.setAttribute('class','redes')
  createElement.innerHTML = '<div class="facebook"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="25px" height="25px" x="0" y="0" viewBox="0 0 155.139 155.139" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" style="" fill="#000000" data-original="#010002" opacity="1" class=""/></g></svg></div><div class="twitter"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="25px" height="25px" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" style="" fill="#00b0ff" data-original="#03a9f4" opacity="1"/></g></svg></div><div class="linkedin"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="25px" height="25px" x="0" y="0" viewBox="0 0 112.196 112.196" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><circle cx="56.098" cy="56.097" r="56.098" style="" fill="#007dbd" data-original="#007ab9" opacity="1" class=""/><path d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" fill="#f1f2f2"/></g></svg></div>'
  member.appendChild(createElement)
})

function initSlick() {
  var windowWidth = $(window).width();
  var slidesToShow = windowWidth <= 600 ? 1 : windowWidth <= 870 ? 2 : 3;

  $('.exclusive-columnas').slick({
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
  });
}

// Esperar a que se cargue el documento
$(document).ready(function() {
  // Inicializar el carrusel
  initSlick();

  // Volver a inicializar el carrusel cuando la ventana cambia de tamaño
  $(window).on('resize', function() {
    // Destruir el carrusel actual
    $('.exclusive-columnas').slick('unslick');
    
    // Volver a inicializar el carrusel con las nuevas opciones
    initSlick();
  });
});