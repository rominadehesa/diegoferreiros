<script>
    export let title;
    export let text;
</script>

<section class="padding-container">
        <main>
            <h1>{title}</h1>
            {#each text as item}
                <p>{item.text}</p>
            {/each}
        </main>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #252525;
        color: var(--light-color);
    }
    section main {
        text-align: center;
    }

    h1 {
        font-size: 34px;
        font-weight: 800;
    }

    @media (max-width: 768px) {
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
    }
</style>