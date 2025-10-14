<script>
    export let images;
</script>

<section class="padding-container" id="galeria">
    <h1>Conoce algunos de nuestros trabajos</h1>
    <br><br>
    <main>
        {#each images as item}
             <!-- content here -->
             <article style="background-image: url({item.src});">
                <!--div>
                    <h5>Proyecto XXXXX</h5>
                    <p>dsds</p>
                </div-->
             </article>
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
        height: 75vh;
        border-radius: 10px;
        display: flex;
        justify-content: start;
        align-items: end;
    }
    section main article div {
        background-color: var(--light-color);
        width: 100%;
        height: auto;
        border-radius: 10px;
        padding: 5vh;
    }

    section main article div h5 {
        font-size: 16px;
        list-style: 18px;
        font-weight: 800;
        color: var(--red-color);
        margin: 0;
        padding: 0;
    }

    section main article div p {
        font-size: 14px;
        list-style: 15px;
        font-weight: 300;
        color: var(--dark-color);
        margin: 0;
        padding: 0;
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