<script>
    import { onMount } from "svelte";


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

<div class="container-cards" bind:this={element}>
    <article  class:show={visible}>
        <header></header>
        <main>
            <h3>Confianza que perdura</h3>
            <p>
                Durante más de tres décadas hemos cumplido con cada compromiso asumido, brindando soluciones confiables y resultados concretos. Nuestra trayectoria respalda cada proyecto y nos convierte en un aliado seguro para quienes buscan seriedad y profesionalismo en el montaje industrial y servicios metalúrgicos. 
            </p>
        </main>
    </article>
    <article  class:show={visible}>
        <header></header>
        <main>
            <h3>Cerca en cada paso</h3>
            <p>
                Creemos que cada cliente merece un trato único y personal. Por eso escuchamos, acompañamos y adaptamos nuestras propuestas a tus necesidades específicas. La cercanía no es solo un valor, es la forma en que trabajamos día a día para construir relaciones duraderas basadas en la confianza mutua.
            </p>
        </main>
    </article>
    <article class:show={visible}>
        <header></header>
        <main>
            <h3>Innovación que impulsa</h3>
            <p>
                Nos enfocamos en mejorar constantemente nuestros procesos y soluciones para ofrecerte resultados más rápidos, eficientes y sostenibles. La innovación no es un objetivo aislado: es el motor que nos permite anticiparnos a los desafíos y aportar valor real en cada proyecto.
            </p>
        </main>
    </article>
</div>

<style>
    .container-cards {
        display: flex;
        justify-content: center;
        align-items: start;
        gap: 1.5vw;
        margin-top: 10vh;
    }
    .container-cards article {
        background-color: #fff;
        text-align: start;
        border-radius: 12px;
        width: 30%;
        box-shadow: 3px 6px 4px 0px rgba(0, 0, 0, 0.15);
    }
    .container-cards article header {
        height: 22vh;
        background-image: url('../../../public/foto.jpg');
        background-size: cover;
        border-radius: 12px 12px 0 0;
    }
    .container-cards article main {
        padding: 4vh;
        height: 40vh;
    }

    article {
        opacity: 0;
        transform: translateX(-50px);
        transition: all 2s ease;
    }

    article.show {
        opacity: 1;
        transform: translateX(0);
    }

    h3 {
        font-size: 22px;
        font-weight: 800;
        color: var(--red-color);
    }
    p {
        margin-top: 2vh;
        line-height: 20px;
        font-weight: 200;
    }

    @media (max-width: 768px) {
        .container-cards {
            display: block;
            margin-top: 1vh;
        }
        .container-cards article {
            margin-top: 3vh;   
            width: 100%;
        }
        .container-cards article header {
            height: 15vh;
        }
        .container-cards article main {
            padding: 4vh 3vh;
            height: auto;
        }
        h3 {
            font-size: 20px;
            font-weight: 800;
            color: var(--red-color);
        }
    }
</style>