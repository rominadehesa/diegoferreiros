<script>
    import ContainerCards from './ContainerCards.svelte';
</script>

<section class="padding-container container-light">
    <main>
        <h1>Lo que nos distingue</h1>
        <p>Nuestra mayor fortaleza no está solo en la experiencia técnica, sino en la forma de relacionarnos. Construimos confianza a través de la responsabilidad en cada proyecto, y cultivamos la cercanía con el cliente, escuchando sus necesidades y ofreciendo soluciones a medida.</p>
        <ContainerCards></ContainerCards>
    </main>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section main {
        text-align: center;
    }
    h1 {
        font-size: 34px;
        font-weight: 800;
        color: var(--blue-color);
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 30px;
            font-weight: 800;
            text-align: start;
        }
        section p {
            font-size: 16px;
            line-height: 18px;
            font-weight: 300;
            text-align: start;
        }
    }
</style>
