<script>
    import LOGO from '../../../public/dffondotransp.png';
    import { push } from 'svelte-spa-router';

    function goToForm() {
        push('/contacto'); // navega a la ruta
        setTimeout(() => {
            const el = document.getElementById('form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 400); // espera a que se monte la vista
    }
</script>

<footer class="padding-container">
    <div>   
        <img src="{LOGO}" alt="" width="200">
        <p>Todos los derechos reservados.</p>
        <br>
        <div class="social">
            <div>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href="https://api.whatsapp.com/send/?phone=5492983554828&text&type=phone_number&app_absent=0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linejoin="round"></path>
                        <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="#F4F4F4" stroke-width="1.5"></path>
                    </svg>
                </a>
            </div>
            <div>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href="https://www.instagram.com/drf.montajes.industriales/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#F4F4F4" fill="none">
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linejoin="round"></path>
                        <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#F4F4F4" stroke-width="1.5"></path>
                        <path d="M17.5078 6.5L17.4988 6.5" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </a>
            </div>
            <div>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href="javascript:void(0)" on:click={goToForm}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#F4F4F4" fill="none">
                        <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="#F4F4F4" stroke-width="1.5" stroke-linejoin="round"></path>
                        <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linejoin="round"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="footer-links">
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/home#sobrenosotros">Nuestra historia</a></li>
            <li><a href="/#/servicios">Servicios</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li><a href="javascript:void(0)" on:click={goToForm}>Contacto</a></li>
        </ul>

        <ul>
            <li><a href="https://www.instagram.com/drf.montajes.industriales/">Instagram</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li><a href="javascript:void(0)" on:click={goToForm}>Email</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5492983554828&text&type=phone_number&app_absent=0">WhatsApp</a></li>
        </ul>
    </div>
</footer>

<style>
    footer {
        background-color: var(--blue-color);
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .footer-links {
        display: flex;
        gap: 200px;
    }
    .footer-links ul {
        list-style: none;
        padding: 0;
    }
    footer ul li {
        margin-top: 5px;
    }
    footer ul a {
        text-decoration: none;
        color: var(--light-color);
        font-size: 16px;
    }
    footer div p {
        color: var(--light-color);
        font-size: 12px;
        margin: 0;
        margin-top: 5px;
    }
    .social {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1vw;
    }
    @media (max-width: 768px) {
        footer {
            display: block;
        }
        .footer-links {
            display: block;
            margin-top: 2vh;
            margin-bottom: 2vh;
        }
        footer ul a {
            font-size: 18px;
        }
        footer .social svg {
            width: 20px;
            height: auto;
        }
        footer .social {
            margin-bottom: 3vh;
        }
    }
</style>