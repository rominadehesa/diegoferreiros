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

<Hero title="Contacto"></Hero>

<section class="container-blue padding-container" id="maps">
    <!-- svelte-ignore a11y_missing_attribute -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.8088874628634!2d-60.26820952432157!3d-38.368751965959845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95926dacf82f96ad%3A0x8e23d125d296c751!2sAv.%20Belgrano%201040%2C%20B7500%20Tres%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1760547105308!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="div-info">
        <h1>Trabajamos en  Tres Arroyos y en todo el país.</h1>
        <p>Consultanos hoy mismo y coordiná tu proyecto con nuestro equipo.</p>
        <div>
            <div style="width: auto;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" color="#ffffff" fill="none">
                    <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#fff" stroke-width="1.5" />
                    <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#fff" stroke-width="1.5" />
                </svg>
            </div>
            <div>
                <p> <span> Avenida Belgrano 1040, Tres Arroyos, Buenos Aires, Argentina. </span><br> De Lunes a Viernes, de 8:00hs a 16:00 hs. Sábados, de 8:00hs a 12:00hs.</p>
            </div>
        </div>
        <br>
        <div>
            <div style="width: auto;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" color="#ffffff" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="#ffffff" stroke-width="1" stroke-linejoin="round"></path>
                    <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="#ffffff" stroke-width="1"></path>
                </svg>
            </div>
            <div>
                <p>2983 – 554828 / 2983 - 607333</p>
            </div>
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
    section > div {
        width: 45%;
    }

    .div-info > div {
        width: 100%;
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