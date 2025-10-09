<script>
</script>

<section class="padding-container">
    <h1>
        Lo que ofrecemos
    </h1>
    <p>Soluciones integrales en montajes industriales, adaptadas a las necesidades de cada proyecto. <br> Desde grandes desarrollos hasta obras específicas, acompañamos a empresas e industrias en cada etapa.</p>
    <main>
        <article>
            <header>

            </header>
            <main>
                <h3>Montajes <br> Industriales</h3>
                <p>Soluciones integrales en estructuras metálicas y montajes industriales. Acompañamos cada proyecto con eficiencia, seguridad y cumplimiento.</p>
                <br>
                <div class="btn-vermas">
                    <a href="/">Ver más</a>
                </div>
            </main>
        </article>
        <article>
            <header>

            </header>
            <main>
                <h3>Mantenimiento <br> de obras</h3>
                <p>Cuidamos tus instalaciones con mantenimiento preventivo y correctivo. Prolongamos la vida útil de tus estructuras y aseguramos continuidad operativa.</p>
                <br>
                <div class="btn-vermas">
                    <a href="/">Ver más</a>
                </div>
            </main>
        </article>
        <article>
            <header>

            </header>
            <main>
                <h3>Servicio <br> de grúa</h3>
                <p>Brindamos soporte de grúa para montaje, traslado y elevación de estructuras. Operamos con precisión y seguridad en cada maniobra.</p>
                <br>
                <div class="btn-vermas">
                    <a href="/">Ver más</a>
                </div>
            </main>
        </article>
    </main>
</section>
<style>
    section {
        text-align: center;
    }
    section > main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2vh;
        padding-bottom: 3vh;
    }

    section > main article {
        background-color: #fff;
        border-radius: 14px;
        width: 33%;
        box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.1);
    }

    section > main article header {
        height: 20vh;
        width: 100%;
        background-image: url('../../../public/services/1.png');
        background-size: cover;
        background-position: center;
        border-top-right-radius: 14px;
        border-top-left-radius: 14px;
    }

    section > main article main {
        padding: 4vh;
        text-align: start;
     }
    section > main article main h3 {
        font-size: 20px;
        line-height: 22px;
        color: var(--dark-color);
        font-weight: 800;
        margin-bottom: 20px;
    }
    section > main article main p {
        font-size: 16px;
        line-height: 18px;
        height: 70px;
    }
    h1 {
        font-size: 34px;
        font-weight: 800;
        color: var(--blue-color);
    }
    p {
        font-size: 16px;
        line-height: 28px;
        font-weight: 300;
        margin-bottom: 5vh;
    }
    .btn-vermas {
        display: flex;
        justify-content: end;
    }
    .btn-vermas a {
        text-decoration: none;
        color: var(--red-color);
        font-weight: 600;
    }

    @media (max-width: 768px) {
       section {
        text-align: start;
        }
        section > main {
            display: block;
            padding-bottom: 3vh;
        }
        section > main article {
            width: 100%;
            margin-bottom: 4vh;
        }
    }
</style>
