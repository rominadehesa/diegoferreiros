<script>
    import IMG1 from '../../../public/galeria/4.jpg';
    import IMG2 from '../../../public/galeria/9.jpg';
    import IMG3 from '../../../public/galeria/12.jpg';

    import { push } from 'svelte-spa-router';

    function goToService1() {
        push('/servicios'); // navega a la ruta
        setTimeout(() => {
            const el = document.getElementById('montajes');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 400); // espera a que se monte la vista
    }

    function goToService2() {
        push('/servicios'); // navega a la ruta
        setTimeout(() => {
            const el = document.getElementById('grua');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 400); // espera a que se monte la vista
    }

    function goToServiceMaintenance() {
        push('/servicios'); // navega a la ruta
        setTimeout(() => {
            const el = document.getElementById('manteminiento');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 400); // espera a que se monte la vista
    }


</script>

<section class="padding-container container-light">
    <h1>
        Soluciones integrales en montajes industriales
    </h1>
    <br><br>
    <main>
        <article>
            <header style="background: linear-gradient(to right, rgba(255,255,255,0.1), rgba(0,0,0,0.7)), url({IMG1}); background-size: cover; background-position: center;">

            </header>
            <main>
                <h3>Montajes <br> Industriales</h3>
                <p>Soluciones integrales en estructuras metálicas y montajes industriales. Acompañamos cada proyecto con eficiencia, seguridad y cumplimiento.</p>
                <br>
                <div class="btn-vermas">
                    <!-- svelte-ignore a11y_invalid_attribute -->
                    <a href="javascript:void(0)" on:click={goToService1}>Ver más</a>
                </div>
            </main>
        </article>

        <article>
            <header style="background: linear-gradient(to right, rgba(255,255,255,0.1), rgba(0,0,0,0.7)), url({IMG2}); background-size: cover; background-position: center;">

            </header>
            <main>
                <h3>Mantenimiento <br> de obras</h3>
                <p>Cuidamos tus instalaciones con mantenimiento preventivo y correctivo. Prolongamos la vida útil de tus estructuras y aseguramos continuidad operativa.</p>
                <br>
                <div class="btn-vermas">
                     <!-- svelte-ignore a11y_invalid_attribute -->
                     <a href="javascript:void(0)" on:click={goToServiceMaintenance}>Ver más</a>
                </div>
            </main>
        </article>
        <article>
            <header style="background: linear-gradient(to right, rgba(255,255,255,0.1), rgba(0,0,0,0.7)), url({IMG3}); background-size: cover; background-position: center;">
            </header>
            <main>
                <h3>Servicio <br> de grúa</h3>
                <p>Brindamos soporte de grúa para montaje, traslado y elevación de estructuras. Operamos con precisión y seguridad en cada maniobra.</p>
                <br>
                <div class="btn-vermas">
                    <!-- svelte-ignore a11y_invalid_attribute -->
                    <a href="javascript:void(0)" on:click={goToService2}>Ver más</a>
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
        width: 32%;
        box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.1);
    }

    section > main article header {
        height: 30vh;
        width: 100%;
        background-size: cover;
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
        color: var(--dark-color);
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
