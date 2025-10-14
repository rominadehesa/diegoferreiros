<script>
    // @ts-nocheck
    import Form from "../components/general/Form.svelte";
    import Galeria from "../components/general/Galeria.svelte";
    import Hero from '../components/general/Hero.svelte';

    const galeria = [
        { src: '/galeria/2.jpg'},
        { src: '/galeria/3.jpg'},
        { src: '/galeria/1.jpg'},
        { src: '/galeria/4.jpg'},
        { src: '/galeria/8.jpg'},
    ];
</script>

<Hero></Hero>

<section class="container-blue padding-container" id="maps">
    <!-- svelte-ignore a11y_missing_attribute -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45294.43823622183!2d-60.326153768847895!3d-38.36636149353839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95926dac16830a99%3A0x580d8b216f434c9e!2sTres%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1759333677336!5m2!1ses-419!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="div-info">
        <h1>Trabajamos en  Tres Arroyos y en todo el país.</h1>
        <p>Consultanos hoy mismo y coordiná tu proyecto con nuestro equipo.</p>
        <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#fff" fill="none">
                    <path d="M14 22V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H14Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M18.5 15H17.5M18.5 11H17.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M18 8H14V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            <div >
                <p>Avenida Belgrano 1040, Tres Arroyos, Buenos Aires, Argentina. <br> De Lunes a Viernes, de 8:00hs a 16:00 hs. Sábados, de 8:00hs a 12:00hs.</p>
            </div>
        </div>
        <br>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M4.91186 10.5413L7.55229 7.90088C8.09091 7.36227 8.27728 6.56642 8.05944 5.83652C7.8891 5.26577 7.69718 4.57964 7.56961 3.99292C7.45162 3.45027 6.97545 3 6.42012 3H4.91186C3.8012 3 2.88911 3.90384 3.01094 5.0078C3.93709 13.3996 10.6004 20.0629 18.9922 20.9891C20.0962 21.1109 21 20.1988 21 19.0881V17.5799C21 17.0246 20.5479 16.569 20.0015 16.4696C19.3988 16.36 18.7611 16.1804 18.2276 16.0103C17.4611 15.7659 16.6091 15.9377 16.0403 16.5065L13.4587 19.0881" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <p>2983 – 554828 / 2983 - 607333</p>
        </div>
    </div>
</section>

<Form></Form>

<Galeria images={galeria}></Galeria>

<style>
    iframe {
        border-radius: 20px;
        width: 45%;
        height: 70vh;
    }
    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 150px;
    }
    section div {
        width: 45%;
    }

    .div-info > div {
        width: 90%;
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 50px;
    }
    .div-info > div p {
        margin: 0;
        padding: 0;
    }

    @media (max-width: 768px) {
        iframe {
            margin-bottom: 3vh;
            width: 100%;
            height: 30vh;
        }
        section {
            display: block;
        }
        section div {
            width: 100%;
        }
    }
</style>