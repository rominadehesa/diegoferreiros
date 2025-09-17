<script>
    import logonav from '../../assets/logo-nav.png';

    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      const list = document.querySelectorAll("nav ul li a");
      if (window.scrollY > 100) { // cambia cuando bajás más de 50px
        navbar.style.backgroundColor = "var(--dark-color)";
        // @ts-ignore
        list.style.fill = "var(--light-color)";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    });
</script>

<nav id="navbar">
    <div>      
        <svg id="hack" width="auto" height="35" viewBox="0 0 20 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9848 27.054L8.01336 27C8.08904 34.0597 3.94303 32.8327 1.42289 37.3899C0.481732 39.0115 -0.0102928 40.8674 0.000163242 42.7564C0.000163242 48.5214 4.37522 53 9.97516 53C15.6262 53 20 48.5488 20 42.7564C20.0032 41.5777 19.8147 40.4068 19.4423 39.2922C19.2431 38.6934 18.8886 37.9251 18.6071 37.3591C16.1454 32.4314 12.7177 34.1601 13.0138 36.4876C13.1466 37.5286 14.3031 38.1678 14.9212 39.1828C15.5698 40.2485 15.8593 41.4843 15.8593 42.7564C15.8593 46.2958 13.359 48.924 9.97317 48.924C6.6391 48.924 4.1163 46.2958 4.1163 42.7564C4.1087 41.7806 4.31284 40.8155 4.71381 39.9313C5.10152 39.0919 6.104 37.7323 6.79644 37.1759C9.39957 35.0836 11.7132 34.9257 11.9848 27.054Z" fill="#F4F4F4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70137 21.4645H13.2986V23.5629H6.70137V21.4645ZM10 9.70174C10.7177 9.70161 11.4193 9.92043 12.0161 10.3305C12.6129 10.7406 13.0781 11.3236 13.3528 12.0057C13.6276 12.6878 13.6995 13.4384 13.5596 14.1625C13.4196 14.8867 13.0741 15.5519 12.5667 16.0741C12.0592 16.5962 11.4127 16.9518 10.7088 17.0959C10.0049 17.24 9.2753 17.1661 8.61222 16.8836C7.94915 16.6011 7.38241 16.1226 6.98367 15.5087C6.58493 14.8948 6.3721 14.173 6.3721 13.4347C6.37201 12.9445 6.46579 12.4591 6.64807 12.0062C6.83035 11.5533 7.09756 11.1418 7.43445 10.7951C7.77134 10.4485 8.17131 10.1735 8.61151 9.98591C9.05171 9.7983 9.52352 9.70174 10 9.70174ZM12.8834 7.02174V0H14.8187V7.09248L19 12.0165L14.7585 27H5.24148L1 12.0165L5.18197 7.09248V0H7.16882V7.02174H12.8834Z" fill="#F4F4F4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0007 11C10.3963 11.0001 10.7829 11.1176 11.1117 11.3374C11.4405 11.5573 11.6967 11.8697 11.848 12.2351C11.9992 12.6006 12.0387 13.0027 11.9615 13.3906C11.8842 13.7785 11.6937 14.1348 11.414 14.4145C11.1342 14.6941 10.7779 14.8845 10.3899 14.9616C10.002 15.0387 9.59988 14.9991 9.23447 14.8477C8.86906 14.6963 8.55674 14.4399 8.33701 14.1111C8.11728 13.7822 8 13.3955 8 13C8.00019 12.4698 8.21087 11.9613 8.58574 11.5863C8.96062 11.2112 9.46903 11.0004 9.99927 11" fill="#D22610"/>
        </svg>
    </div>
    <div class="menu-mobile">☰</div>
    <ul>
        <li>
            <a href="/">Inicio</a>
        </li>
        <li>
            <a href="/">Soluciones Industriales</a>
        </li>
        <li>
            <a href="/">Sobre nosotros</a>
        </li>
    </ul>
</nav>

<style>
    nav {
        position: fixed;
        width: 100%;
        background-color: transparent;
        transition: background-color 0.4s ease; /* suaviza el cambio */
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8vh;
        animation: navtop 1s normal;
    }

    @keyframes navtop {
        0% {
            top: -8vh;
        }
        100% {
            top: 0;
        }
    }
    nav div {
        padding-left: 15vw;
    }

    .menu-mobile {
        display: none;
        padding-right: 15vw;
        color: var(--light-color);
        font-size: 20px;
    }
    nav ul {
        list-style: none;
        display: flex;
        justify-content: end;
        align-items: end;
        gap: 3vw;
        padding-right: 15vw;
    }
    nav ul li a {
        color: var(--light-color);
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        nav {
            background-color: var(--dark-color);
        }
        nav ul {
            display: none;
        }
        nav ul li a {
            color: var(--light-color);
        }
        .menu-mobile {
            display: block; 
        }

    }
</style>