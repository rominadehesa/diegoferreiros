<script>
    export let images;
</script>

<section class="padding-container">
    <h1>Galeria</h1>
    <br>
    <main>
        {#each images as item}
             <!-- content here -->
             <article style="background-image: url({item.src});"></article>
        {/each}
    </main>
</section>

<style>
    section {
        background-color: var(--dark-color);
    }
    h1 {
        font-size: 34px;
        font-weight: 800;
        color: var(--light-color);
    }
    section main {
        display: flex;
        justify-content: flex-start; /* empieza desde la izquierda */
        align-items: center;
        gap: 20px;
        overflow-x: auto; /* permite scroll horizontal */
        padding: 10px;
        scroll-behavior: smooth; /* opcional: scroll suave */
        /* Oculta el scroll nativo */
        -ms-overflow-style: none;  /* IE y Edge */
        scrollbar-width: none;     /* Firefox */
    }

    section main article {
        flex: 0 0 auto; /* evita que los items se achiquen */
        background-image: url('../../../public/retggsdfsd.jpeg');
        background-size: cover;
        width: 30vw;
        height: 50vh;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        
        section main article {
            width: 60vw;
            height: 30vh;
            background-image: url('../../../public/retggsdfsd.jpeg');
            background-size: cover;
        }
    }
</style>