<script>
    export let subtitle;
    export let title;
    export let text;
    export let subtext;
</script>


<section class="padding-container">
    <main>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{subtext}</p>
    </main>
    <img src="" alt="">
</section>

<style>
    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 100px;
    }

    section main {
        width: 50%;
    }

    h3 {
        font-size: 16px;
        font-family: 'albula-bold';
        text-transform: uppercase;
        margin-bottom: 2vh;
        color: var(--dark-color);
    }

    h1 {
        font-size: 40px;
        font-weight: 800;
        color: var(--red-color);
    }

    p {
        color: var(--dark-color);
    }

    @media (max-width: 768px) {
        section {
            display: block;
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