<script>
    import ContainerCards from './ContainerCards.svelte';
</script>

<section class="padding-container container-light">
    <div>
        <h1>Nuestros principales servicios</h1>
        <p>Soluciones integrales en montajes industriales, adaptadas a las necesidades de cada proyecto. <br> Desde grandes desarrollos hasta obras específicas, acompañamos a empresas e industrias en cada etapa.</p>
    </div>
    <main>
        <ContainerCards></ContainerCards>
    </main>
</section>
<style>
    section {
        display: block;
        justify-content: space-between;
        align-items: start;
        gap: 100px;
    }
    section div {
        width: 100%;
    }
    section main, section div {
        text-align: center;
    }
    h1 {
        font-weight: 900;
        color: var(--red-color);
    }
    @media (max-width: 768px) {
        section main, section div {
            text-align: start;
        }
        h1{
            font-size: 30px;
        }
    }
</style>
