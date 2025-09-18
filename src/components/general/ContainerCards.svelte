<script>

</script>

<div class="container-cards">
    <article>
        <header></header>
        <main>
            <h3>Confianza que perdura</h3>
            <p>
                Durante más de tres décadas hemos cumplido con cada compromiso asumido, brindando soluciones confiables y resultados concretos. Nuestra trayectoria respalda cada proyecto y nos convierte en un aliado seguro para quienes buscan seriedad y profesionalismo en el montaje industrial y servicios metalúrgicos. 
            </p>
        </main>
    </article>
    <article>
        <header></header>
        <main>
            <h3>Cerca en cada paso</h3>
            <p>
                Creemos que cada cliente merece un trato único y personal. Por eso escuchamos, acompañamos y adaptamos nuestras propuestas a tus necesidades específicas. La cercanía no es solo un valor, es la forma en que trabajamos día a día para construir relaciones duraderas basadas en la confianza mutua.
            </p>
        </main>
    </article>
</div>

<style>
    .container-cards {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 1vw;
        margin-top: 10vh;
    }
    .container-cards article {
        background-color: #fff;
        text-align: start;
        border-radius: 12px;
        box-shadow: 3px 6px 4px 0px rgba(0, 0, 0, 0.15);
    }
    .container-cards article header {
        height: 30vh;
        background-image: url('../../../public/foto.jpg');
        background-size: cover;
        border-radius: 12px 12px 0 0;
    }
    .container-cards article main {
        padding: 5vh;
    }
    h3 {
        font-size: 24px;
        font-weight: 800;
        color: var(--red-color);
    }
    p {
        margin-top: 10px;
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
        }
        .container-cards article header {
            height: 20vh;
        }
        .container-cards article main {
            padding: 5vh 3vh;
        }
        h3 {
            font-size: 20px;
            font-weight: 800;
            color: var(--red-color);
        }
    }
</style>