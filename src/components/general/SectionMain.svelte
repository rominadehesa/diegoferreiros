<script>
    import { onMount } from "svelte";

    export let titleMain;
    export let title;
    export let text;
    export let condition;
    export let url;
    export let textBtn;

    let visible = false;
    let element;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    visible = true;
                    // Si querés que solo se anime la primera vez:
                    observer.unobserve(element);
                }
            },
            { threshold: 0.2 } // 20% visible
        );
        observer.observe(element);
    });
</script>

<section class="container-blue padding-container" bind:this={element}>
    <main class:show={visible}>
        {#if titleMain}
            <h1 class="titleMain">{titleMain}</h1>
        {:else}
            <h1>{title}</h1>
        {/if}
        <slot></slot>
        <br>
        {#if condition == true}
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

    main {
        text-align: center;
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    main.show {
        opacity: 1;
        transform: translateY(0);
    }

    /* Mobile */
    @media (max-width: 768px) {
        main {
            text-align: start;
        }
        h1 {
            font-size: 30px;
        }
    }

    /* Desktop */
    @media (min-width: 769px) {
        h1 {
            font-size: 28px;
        }
    }
</style>