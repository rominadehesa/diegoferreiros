<script>
    export let title;
    const img = '/logo.png';
</script>

<header class="hero">
    <video autoplay muted loop playsinline class="hero-bg">
        <source src="/hero.mp4" type="video/mp4">
    </video>

    <div class="overlay">
    
    </div>

    <div class="hero-content padding-container">
        <img src="{img}" alt="">
    </div>
</header>

<style>
    .hero {
        position: relative;
        height: 100vh; /* o lo que necesites */
        overflow: hidden;
        display: flex;
        justify-content: start;
        align-items: end;
    }

    .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }

    .overlay {
         position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        background: rgba(0, 0, 0, 0.1);
    }


    .hero-content {
        position: relative;
        z-index: 1;
        color: white;
        text-align: start;
    }

    .hero-content img {
        width: 40vw;
        height: auto;
    }

    @media (max-width: 768px) {
        .hero {
            height: 50vh;
        }
        .hero-content img {
            width: 70vw;
        }
    }
    
</style>