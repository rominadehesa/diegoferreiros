<script>
// @ts-nocheck

    import { link, location } from 'svelte-spa-router';
    import HeroMain from '../components/general/HeroMain.svelte';
    import SectionMain from '../components/general/SectionMain.svelte';
    import SectionDark from '../components/general/SectionDark.svelte';
    import SectionImage from '../components/general/SectionImage.svelte';
    import Galeria from '../components/general/Galeria.svelte';
    import Form from '../components/general/Form.svelte';

    const texts = [
        {
            text: "Soluciones integrales en montajes industriales, adaptadas a las necesidades de cada proyecto. Desde grandes desarrollos hasta obras específicas, acompañamos a empresas e industrias en cada etapa."
        }
    ];
</script>

<HeroMain title="NUESTROS SERVICIOS"/>

<SectionDark title="Nuestros principales servicios" text={texts}></SectionDark>

<SectionImage subtitle="Cuidamos lo que ya construiste" title="Mantenimiento de obras" 
    text="Ofrecemos servicios de mantenimiento preventivo y correctivo para obras propias o de terceros, con el objetivo de maximizar la vida útil de tus instalaciones y evitar paradas innecesarias en la producción. Nuestro equipo actúa con rapidez y eficacia, atendiendo desde reparaciones puntuales hasta planes de mantenimiento programado. Confiar en nosotros significa asegurar continuidad operativa y tranquilidad, sabiendo que tus estructuras están en manos de especialistas comprometidos con la seguridad y la productividad de tu empresa." 
    subtext="Perfecto para empresas e industrias que valoran la continuidad de sus operaciones.">
</SectionImage>

<section class="padding-container container-service-main">
    <main>
        <h3>Soluciones integrales en estructuras</h3>
        <h1>Montajes Industriales</h1>
        <p>Nos especializamos en el montaje integral de galpones, silos, norias y estructuras metálicas de distintas dimensiones. Acompañamos cada proyecto desde la planificación hasta la instalación final, con un enfoque en seguridad, eficiencia y cumplimiento de plazos. Nuestra experiencia nos permite adaptarnos tanto a grandes desarrollos industriales como a proyectos específicos, garantizando resultados sólidos y duraderos. Porque sabemos que cada obra es una inversión, trabajamos para que sea también una garantía de calidad.</p>
        <p>Pensado para proyectos que buscan instalaciones sólidas y duraderas.</p>
    </main>
</section>

<SectionImage subtitle="Cuidamos lo que ya construiste" title="Mantenimiento de obras" 
    text="Ofrecemos servicios de mantenimiento preventivo y correctivo para obras propias o de terceros, con el objetivo de maximizar la vida útil de tus instalaciones y evitar paradas innecesarias en la producción. Nuestro equipo actúa con rapidez y eficacia, atendiendo desde reparaciones puntuales hasta planes de mantenimiento programado. Confiar en nosotros significa asegurar continuidad operativa y tranquilidad, sabiendo que tus estructuras están en manos de especialistas comprometidos con la seguridad y la productividad de tu empresa." 
    subtext="Perfecto para empresas e industrias que valoran la continuidad de sus operaciones.">
</SectionImage>

<Galeria></Galeria>

<Form></Form>

<style>
    .container-service-main {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--blue-color);
        color: var(--light-color);
        text-align: center;
    }

    h3 {
        font-size: 16px;
        font-family: 'albula-bold';
        text-transform: uppercase;
        margin-bottom: 2vh;
        color: var(--light-color);
    }

    h1 {
        font-size: 40px;
        font-weight: 800;
        color: var(--red-color);
    }

    p {
        color: var(--light-color);
    }

    @media (max-width: 768px) {
        .container-service-main {
            display: block;
            text-align: start;
        }
        section main {
            width: 100%;
            text-align: start;
        }
        
        h1 {
            font-size: 24px;
            font-weight: 800;
        }
        section p {
            font-size: 16px;
            line-height: 18px;
            font-weight: 300;
        }

        h3 {
            font-size: 14px;
            font-family: 'albula-medium';
        }
    }
</style>