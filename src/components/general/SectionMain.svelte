<script>
    export let title;
    export let text;
    export let condition = false;
    export let url;
    export let textBtn;
</script>

<section class="container-blue padding-container">
        <main>
            <h1>{title}</h1>
            <br>
            {#each text as item}
                <p>{item.text}</p>
            {/each}
            <br>
            {#if condition}
                <button id="btnMainRed">{textBtn}</button>
            {/if}
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
        display: inline-block;
        overflow: hidden;          /* oculta lo que aún no aparece */
        white-space: nowrap;       /* evita saltos de línea */
        animation: typing 2.5s normal;
    }

    /* Animación de escritura */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @media (max-width: 768px) {
        section main {
            width: 100%;
            text-align: start;
        }
        
        h1 {
            font-size: 24px;
            font-weight: 800;
            white-space: wrap;
            animation: none;
        }
        section p {
            font-size: 16px;
            line-height: 18px;
            font-weight: 300;
        }
    }
</style>