<script>
// @ts-nocheck
const img = '/logo2.png';
let menuOpen = false;

// Toggle del menú mobile
function toggleMenu() {
  const menu = document.getElementById("menu-list");
  const navbar = document.getElementById("navbar");

  if (window.innerWidth <= 768) {
    // solo mobile
    menuOpen = !menuOpen;
    menu.style.display = menuOpen ? "block" : "none";
  } else {
    // en desktop siempre flex
    menu.style.display = "flex";
  }

  navbar.style.backgroundColor = "var(--dark-color)";
}

// Ajustar menú al cargar y al redimensionar
function adjustMenuOnResize() {
  const menu = document.getElementById("menu-list");
  if (window.innerWidth > 768) {
    menu.style.display = "flex";
    menuOpen = false;
  } else {
    menu.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-list");
  const btnMenu = document.getElementById("btnMenuHamb");

  // Cerrar al hacer clic en un link (solo mobile)
  const links = document.querySelectorAll("#menu-list a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) toggleMenu();
    });
  });

  // Cerrar al hacer clic fuera del menú (solo mobile)
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && menuOpen && !menu.contains(e.target) && !btnMenu.contains(e.target)) {
      toggleMenu();
    }
  });

  adjustMenuOnResize();
  window.addEventListener("resize", adjustMenuOnResize);
});
</script>

<nav id="navbar">
  <!-- Logo -->
  <div class="logo">
    <svg id="hack" width="auto" height="35" viewBox="0 0 20 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9848 27.054L8.01336 27C8.08904 34.0597 3.94303 32.8327 1.42289 37.3899C0.481732 39.0115 -0.0102928 40.8674 0.000163242 42.7564C0.000163242 48.5214 4.37522 53 9.97516 53C15.6262 53 20 48.5488 20 42.7564C20.0032 41.5777 19.8147 40.4068 19.4423 39.2922C19.2431 38.6934 18.8886 37.9251 18.6071 37.3591C16.1454 32.4314 12.7177 34.1601 13.0138 36.4876C13.1466 37.5286 14.3031 38.1678 14.9212 39.1828C15.5698 40.2485 15.8593 41.4843 15.8593 42.7564C15.8593 46.2958 13.359 48.924 9.97317 48.924C6.6391 48.924 4.1163 46.2958 4.1163 42.7564C4.1087 41.7806 4.31284 40.8155 4.71381 39.9313C5.10152 39.0919 6.104 37.7323 6.79644 37.1759C9.39957 35.0836 11.7132 34.9257 11.9848 27.054Z" fill="#F4F4F4"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70137 21.4645H13.2986V23.5629H6.70137V21.4645ZM10 9.70174C10.7177 9.70161 11.4193 9.92043 12.0161 10.3305C12.6129 10.7406 13.0781 11.3236 13.3528 12.0057C13.6276 12.6878 13.6995 13.4384 13.5596 14.1625C13.4196 14.8867 13.0741 15.5519 12.5667 16.0741C12.0592 16.5962 11.4127 16.9518 10.7088 17.0959C10.0049 17.24 9.2753 17.1661 8.61222 16.8836C7.94915 16.6011 7.38241 16.1226 6.98367 15.5087C6.58493 14.8948 6.3721 14.173 6.3721 13.4347C6.37201 12.9445 6.46579 12.4591 6.64807 12.0062C6.83035 11.5533 7.09756 11.1418 7.43445 10.7951C7.77134 10.4485 8.17131 10.1735 8.61151 9.98591C9.05171 9.7983 9.52352 9.70174 10 9.70174ZM12.8834 7.02174V0H14.8187V7.09248L19 12.0165L14.7585 27H5.24148L1 12.0165L5.18197 7.09248V0H7.16882V7.02174H12.8834Z" fill="#F4F4F4"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0007 11C10.3963 11.0001 10.7829 11.1176 11.1117 11.3374C11.4405 11.5573 11.6967 11.8697 11.848 12.2351C11.9992 12.6006 12.0387 13.0027 11.9615 13.3906C11.8842 13.7785 11.6937 14.1348 11.414 14.4145C11.1342 14.6941 10.7779 14.8845 10.3899 14.9616C10.002 15.0387 9.59988 14.9991 9.23447 14.8477C8.86906 14.6963 8.55674 14.4399 8.33701 14.1111C8.11728 13.7822 8 13.3955 8 13C8.00019 12.4698 8.21087 11.9613 8.58574 11.5863C8.96062 11.2112 9.46903 11.0004 9.99927 11" fill="#D22610"/>
    </svg>
  </div>

  <div class="ig">
    <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href="https://www.instagram.com/drf.montajes.industriales/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#F4F4F4" fill="none">
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linejoin="round"></path>
                        <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#F4F4F4" stroke-width="1.5"></path>
                        <path d="M17.5078 6.5L17.4988 6.5" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </a>
  </div>

  <!-- Botón hamburguesa -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="menu-mobile" id="btnMenuHamb" on:click={toggleMenu}>☰</div>

  <!-- Links -->
  <ul id="menu-list">
    <li><a href="/">Inicio</a></li>
    <li><a href="/#/servicios">Soluciones Integrales</a></li>
    <li><a href="/home#sobrenosotros">Sobre nosotros</a></li>
    <li><a href="/#/contacto">Contacto</a></li>
    <li>
        <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href="https://www.instagram.com/drf.montajes.industriales/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" color="#F4F4F4" fill="none">
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linejoin="round"></path>
                        <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#F4F4F4" stroke-width="1.5"></path>
                        <path d="M17.5078 6.5L17.4988 6.5" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </a>
    </li>
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    width: 100%;
    background-color: var(--dark-color);
    transition: background-color 0.4s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    animation: navtop 1s normal;
    z-index: 1000;
  }

  @keyframes navtop {
    0% { top: -8vh; }
    100% { top: 0; }
  }

  nav .logo {
    padding-left: 15vw;
  }

  .menu-mobile {
    display: none;
    padding-right: 10vw;
    color: var(--light-color);
    font-size: 26px;
    cursor: pointer;
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 3vw;
    padding-right: 15vw;
  }

  nav ul li a {
    color: var(--light-color);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
  }
  .ig {
    display: none;
  }
  /* ---- Responsive ---- */
  @media (max-width: 768px) {
    nav {
      background-color: var(--dark-color);
    }

    .menu-mobile {
      display: block;
    }

    nav ul {
      position: absolute;
      top: -10px;
      left: 0px;
      padding-top: 5vh;
      background-color: var(--dark-color);
      width: 60vw;
      height: 100vh;
      padding-right: 0vw;
      display: none; /* oculto por defecto en mobile */
      animation: navmobile 0.5s normal;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
    }

    @keyframes navmobile {
      0% { left: -60vw; }
      100% { left: 0; }
    }

    nav ul li a {
      font-size: 18px;
      width: 100%;
      font-weight: 300;
    }

    nav ul li {
      padding: 12px 20px;
      width: 100%;
    }

    nav .logo {
      padding-left: 10vw;
    }

    .ig {
      display: block;
    }
  }
</style>
