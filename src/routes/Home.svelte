<script>
    // @ts-nocheck
    import img from '../../public/df1.png';
    import SectionMain from '../components/general/SectionMain.svelte';
    import HeroMain from '../components/general/HeroMain.svelte';
    import Section from '../components/general/Section.svelte';
    import Galeria from '../components/general/Galeria.svelte';
    import Form from '../components/general/Form.svelte';

</script>

<HeroMain title="MONTAJES INDUSTRIALES"></HeroMain>

<SectionMain 
    titleMain="Más de 30 años construyendo confianza y solidez"
    condition=true url="/" textBtn="Explora nuestros proyectos &rarr;"> 
    <slot name="text">
        <p>Hace más de 30 años, <span>Rubén Ferreirós</span>  fundó la empresa con el compromiso de ofrecer soluciones confiables en el rubro metalúrgico. En 2004 se sumó su hijo Diego, quien desde 2019 lidera la compañía, consolidando su crecimiento y visión a futuro. A lo largo de estos años <span>nos especializamos en el montaje industrial de estructuras metálicas: galpones, tinglados, plantas de silos, norias, extractores, sinfines, transportadores a cadena y más. </span> Brindamos un servicio integral que abarca diseño, mecanización, montaje y reparación. 
        En la última etapa incorporamos el <span>servicio de grúa</span>, disponible tanto para nuestras obras como para clientes externos. Hoy seguimos creciendo con el mismo objetivo que nos guía desde el inicio: brindar un servicio de calidad, con compromiso y confianza en cada proyecto, trabajando en obras locales, provinciales y también en el sur de nuestro país.</p>
    </slot>
    
    <div class="container-services">
        <article class="service">
            <h3>Confianza que perdura</h3>
            <p>Durante más de tres décadas hemos cumplido con cada compromiso asumido, brindando soluciones confiables y resultados concretos. Nuestra trayectoria respalda cada proyecto y nos convierte en un aliado seguro para quienes buscan seriedad y profesionalismo en el montaje industrial y servicios metalúrgicos.</p>
        </article>
        <article class="service">
            <h3>Cerca en cada paso</h3>
            <p>Creemos que cada cliente merece un trato único y personal. Por eso escuchamos, acompañamos y adaptamos nuestras propuestas a tus necesidades específicas. La cercanía no es solo un valor, es la forma en que trabajamos día a día para construir relaciones duraderas basadas en la confianza mutua.</p>
        </article>
        <article class="service">
            <h3>Innovación</h3>
            <p> Nos enfocamos en mejorar constantemente nuestros procesos y soluciones para ofrecerte resultados más rápidos, eficientes y sostenibles. La innovación no es un objetivo aislado: es el motor que nos permite anticiparnos a los desafíos y aportar valor real en cada proyecto.</p>
        </article>
    </div>
</SectionMain>

<Section></Section>

<Galeria></Galeria>

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
        height: 35vh;
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

    /* Mobile */
    @media (max-width: 768px) {
        .container-services {
            display: block;
        }
        .container-services .service {
            height: auto;
            padding: 4vh;
            margin-bottom: 2vh;
        }
    }
</style>