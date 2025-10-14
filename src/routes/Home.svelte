<script>
    // @ts-nocheck
    import img from '../../public/df1.png';
    import SectionMain from '../components/general/SectionMain.svelte';
    import HeroMain from '../components/general/HeroMain.svelte';
    import Section from '../components/general/SectionServices.svelte';
    import Galeria from '../components/general/Galeria.svelte';
    import Form from '../components/general/Form.svelte';

    import { push } from 'svelte-spa-router';

    const galeria = [
        { src: '/galeria/2.jpg'},
        { src: '/galeria/3.jpg'},
        { src: '/galeria/1.jpg'},
        { src: '/galeria/4.jpg'},
        { src: '/galeria/8.jpg'},
    ];

    function goToContacto() {
        push('/contacto'); // navega a la ruta
        setTimeout(() => {
            const el = document.getElementById('maps');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 400); // espera a que se monte la vista
    }
</script>

<HeroMain title="MONTAJES INDUSTRIALES"></HeroMain>

<SectionMain 
    titleMain="Más de 30 años construyendo confianza y solidez"
    condition=true url="/" textBtn="Explora nuestros proyectos &rarr;"> 
    <slot name="text">
        <p>A lo largo de tres décadas, hemos formado vínculos que trascienden los proyectos. Nuestra experiencia en montajes industriales y servicios metalúrgicos nos respalda, y nuestro compromiso con la calidad nos impulsa a seguir creciendo junto a cada cliente.</p>
    </slot>
    
    <div class="container-services">
        <article class="service">
            <h3>Excelencia en <br> cada detalle</h3>
            <p>Trabajamos con precisión y compromiso en cada proyecto, garantizando resultados duraderos y de alto rendimiento para cada uno de nuestros clientes.</p>
        </article>
        <article class="service">
            <h3>Compromiso <br>que se demuestra</h3>
            <p>Cumplimos lo que prometemos. Nuestra palabra y nuestro trabajo son la base de relaciones sólidas y de confianza a lo largo del tiempo.</p>
        </article>
        <article class="service">
            <h3>Progreso <br> constante</h3>
            <p>Evolucionamos junto a la industria, incorporando nuevas tecnologías y metodologías que optimizan cada proceso y potencian los resultados.</p>
        </article>
    </div>
</SectionMain>

<Section></Section>


<Galeria images={galeria}></Galeria>

<section class="padding-container container-about" id="sobrenosotros">
    <div class="text-about">
        <h1>Sobre nosotros y nuestra trayectoria</h1>
        <br>
        <p>Hace más de 30 años, <span>Rubén Ferreirós</span>  fundó la empresa con el compromiso de ofrecer soluciones confiables en el rubro metalúrgico. En 2004 se sumó su hijo Diego, quien desde 2019 lidera la compañía, consolidando su crecimiento y visión a futuro. A lo largo de estos años <span>nos especializamos en el montaje industrial de estructuras metálicas: galpones, tinglados, plantas de silos, norias, extractores, sinfines, transportadores a cadena y más. </span> Brindamos un servicio integral que abarca diseño, mecanización, montaje y reparación.
           <br><br> 
            En la última etapa incorporamos el servicio de grúa, disponible tanto para nuestras obras como para clientes externos. Hoy seguimos creciendo con el mismo objetivo que nos guía desde el inicio: brindar un servicio de calidad, con compromiso y confianza en cada proyecto, trabajando en obras locales, provinciales y también en el sur de nuestro país.</p>
        <br>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="javascript:void(0)" on:click={goToContacto}>
            <button id="btnMainRed">Donde encontrarnos</button>
        </a>
    </div>
</section>

<Form></Form>

<style>
    .container-services {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2vw;
        margin-top: 4vh;
    }
    .container-services .service {
        background-color: #003450;
        border-radius: 20px;
        padding: 6vh;
        height: 25vh;
        width: 33%;
        text-align: start;
        transition:  background-color 0.5s ease;
    }
    .container-services .service p {
        font-size: 16px;
        line-height: 18px;
        margin: 0;
    }
    .container-services .service h3 {
        font-size: 20px;
        line-height: 22px;
        color: var(--red-color);
        font-weight: 800;
        margin-bottom: 20px;
    }

    .container-services .service:hover {
        background-color: #004b73;
    }

    p {
        font-size: 16px;
        line-height: 28px;
        font-weight: 300; 
    }

    h1 {
        font-size: 34px;
        font-weight: 800;
        color: var(--blue-color);
    }

    .container-about {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .container-about .text-about {
        width: 80%;
    }

    /* Mobile */
    @media (max-width: 768px) {
        .container-services {
            display: block;
        }
        .container-services .service {
            height: auto;
            padding: 4vh;
            width: 80%;
            margin-bottom: 2vh;
        }

        .container-about {
            display: block;
            text-align: start;
        }
        .container-about .text-about {
            width: 100%;
        }
    }
</style>