<script>
// @ts-nocheck

    import { link, location } from 'svelte-spa-router';
    import HeroMain from '../components/general/HeroMain.svelte';
    import Hero from '../components/general/Hero.svelte';
    import SectionMain from '../components/general/SectionMain.svelte';
    import SectionDark from '../components/general/SectionDark.svelte';
    import SectionImage from '../components/general/SectionImage.svelte';
    import Galeria from '../components/general/Galeria.svelte';
    import Form from '../components/general/Form.svelte';

    import serv1 from "/public/galeria/4.jpg";
    import serv2 from "/public/galeria/12.jpg";
    import serv3 from "/public/galeria/9.jpg";
    
    const texts = [
        {
            text: "Soluciones integrales en montajes industriales, adaptadas a las necesidades de cada proyecto. Desde grandes desarrollos hasta obras específicas, acompañamos a empresas e industrias en cada etapa."
        }
    ];

    const galeria = [
        { src: '/galeria/2.jpg'},
        { src: '/galeria/10.jpg'},
        { src: '/galeria/6.jpg'},
        { src: '/galeria/9.jpg'},
        { src: '/galeria/1.jpg'},
    ];
</script>

<Hero title={"Soluciones Integrales"}></Hero>

<section class="padding-container container-blue service" id="montajes">
    <img src="{serv1}" alt="Industrial workers">
    <div>
        <h1>Montajes industriales <br> a tu medida</h1>
        <p>Nos dedicamos al montaje de galpones, silos, norias y estructuras metálicas. Acompañamos cada proyecto con seguridad, eficiencia y cumplimiento de plazos, garantizando resultados sólidos y duraderos.</p>
        <main>
            <article>
                <h4>Experiencia comprobada</h4>
                <p>Años de trayectoria en montajes industriales.</p>
            </article>
            <article>
                <h4>Montaje especializado</h4>
                <p>Técnicos y equipos listos para cualquier escala.</p>
            </article>
            <article>
                <h4>Compromiso de calidad</h4>
                <p>Resultados seguros y duraderos en cada obra.</p>
            </article>
        </main>
    </div>
</section>

<section class="padding-container service" id="grua">
    <div>
        <h1>Soporte y servicio <br> de grúa</h1>
        <p>Brindamos servicio de grúa para montaje, traslado y elevación de estructuras. Operamos con seguridad y eficiencia, garantizando maniobras confiables en cada proyecto.</p>
        <main>
            <article>
                <h4>Operadores especializados</h4>
                <p>Personal capacitado para maniobras seguras y precisas.</p>
            </article>
            <article>
                <h4>Equipos versátiles</h4>
                <p>Grúas adaptadas a diferentes tipos de cargas y alturas.</p>
            </article>
            <article>
                <h4>Soporte integral</h4>
                <p>Asistencia en montaje, traslado y colocación de estructuras.</p>
            </article>
        </main>
    </div>
    <img src="{serv3}" alt="Industrial workers">
</section>

<section class="padding-container service container-light" id="mantenimiento">
    <img src="{serv2}" alt="Industrial workers">
    <div>
        <h1>Mantenimiento de obras</h1>
        <p>Ofrecemos mantenimiento preventivo y correctivo para obras propias o de terceros. Actuamos con rapidez para prolongar la vida útil de tus instalaciones y asegurar continuidad operativa.</p>
        <main>
            <article>
                <h4>Mayor vida útil</h4>
                <p>Tus estructuras en óptimas condiciones por más tiempo.</p>
            </article>
            <article>
                <h4>Intervención ágil</h4>
                <p>Soluciones rápidas ante cualquier imprevisto.</p>
            </article>
            <article>
                <h4>Seguridad garantizada</h4>
                <p>Cuidamos cada detalle para proteger tu inversión.</p>
            </article>
        </main>
    </div>
</section>

<Galeria images={galeria}></Galeria>

<Form></Form>

<style>
    .service {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .service h1 {
        font-weight: 800;
        font-size: 34px;
    }
    .container-light h1 {
        color: var(--blue-color);
    }
    .service > img {
        width: 40%;
        border-radius: 12px;
    }
    .service > div {
        width: 50%;
    }
    .service div main {
        display: flex;
        justify-content: start;
        align-items: start;
        flex-wrap: wrap;
        gap: 1vh;
    }
    .service div main article {
        width: 25%;
        height: 15vh;
        padding: 2vh;
        border-radius: 12px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    }
    .service div main h4 {
        font-size: 14px;
        font-weight: 800;
        color: var(--red-color);
    }
    .service div main p {
        font-size: 14px;
        line-height: 16px;
        margin-top: 1vh;
        margin-bottom: 2vh;
    }
    .container-light div main article {
        background-color: #fff;
    }

    @media (max-width: 768px) {
        .service {
            display: block;
        }
        .service > img {
            width: 100%;
            border-radius: 12px;
            margin-bottom: 5vh;
        }
        .service > div {
            width: 100%;
            margin-bottom: 5vh;
        }
        .service div main {
            display: block;
        }
        .service div main article {
            width: 90%;
            height: auto;
            margin-bottom: 2vh;
        }
    }
</style>