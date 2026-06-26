<script>
    import { link, location } from "svelte-spa-router";
    import HeroMain from "../components/general/HeroMain.svelte";
    import Hero from "../components/general/Hero.svelte";
    import Galeria from "../components/general/Galeria.svelte";
    import Form from "../components/general/Form.svelte";

    const galeria = [
        { src: "/proyecto-vaca/1.jpeg" },
        { src: "/proyecto-vaca/2.jpeg" },
        { src: "/proyecto-vaca/3.jpeg" },
        { src: "/proyecto-vaca/4.jpeg" },
        { src: "/proyecto-vaca/5.jpeg" },
        { src: "/proyecto-vaca/6.jpeg" },
        { src: "/proyecto-vaca/7.jpeg" },
    ];

    const galeriaQuilmes = [
        { src: "/quilmes/1.jpeg" },
        { src: "/quilmes/2.jpeg" },
        { src: "/quilmes/3.jpeg" },
        { src: "/quilmes/4.jpeg" },
        { src: "/quilmes/5.jpeg" }
    ];
</script>

<Hero title={"Galpones, tinglados o naves industriales"}></Hero>

<section class="padding-container div-galpones">
    <div>
        <h1>¿Pensando en tu galpón, tinglado o nave industrial?</h1>
        <p>
            En Diego Ferreiros Montajes Industriales nos adaptamos a tu
            presupuesto y hacemos realidad tu proyecto.
        </p>
        <p>
            Trabajamos bajo modalidad llave en mano, incluyendo pisos de
            administración y todos los detalles para que tu espacio funcione
            desde el primer día.
        </p>
    </div>
    <ul>
        <li>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
            >
                <path
                    d="M20.9427 16.8354C20.2864 12.8866 18.2432 9.94613 16.467 8.219C15.9501 7.71642 15.6917 7.46513 15.1208 7.23257C14.5499 7 14.0592 7 13.0778 7H10.9222C9.94081 7 9.4501 7 8.87922 7.23257C8.30834 7.46513 8.04991 7.71642 7.53304 8.219C5.75682 9.94613 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z"
                    stroke-linecap="round"
                ></path>
                <path
                    d="M7.25662 4.44287C7.05031 4.14258 6.75128 3.73499 7.36899 3.64205C8.00392 3.54651 8.66321 3.98114 9.30855 3.97221C9.89237 3.96413 10.1898 3.70519 10.5089 3.33548C10.8449 2.94617 11.3652 2 12 2C12.6348 2 13.1551 2.94617 13.4911 3.33548C13.8102 3.70519 14.1076 3.96413 14.6914 3.97221C15.3368 3.98114 15.9961 3.54651 16.631 3.64205C17.2487 3.73499 16.9497 4.14258 16.7434 4.44287L15.8105 5.80064C15.4115 6.38146 15.212 6.67187 14.7944 6.83594C14.3769 7 13.8373 7 12.7582 7H11.2418C10.1627 7 9.6231 7 9.20556 6.83594C8.78802 6.67187 8.5885 6.38146 8.18945 5.80064L7.25662 4.44287Z"
                ></path>
                <path
                    d="M13.6267 12.9186C13.4105 12.1205 12.3101 11.4003 10.9892 11.9391C9.66829 12.4778 9.45847 14.2113 11.4565 14.3955C12.3595 14.4787 12.9483 14.2989 13.4873 14.8076C14.0264 15.3162 14.1265 16.7308 12.7485 17.112C11.3705 17.4932 10.006 16.8976 9.85742 16.0517M11.8417 10.9927V11.7531M11.8417 17.2293V17.9927"
                    stroke-linecap="round"
                ></path>
            </svg>
            Financiación disponible
        </li>
        <li>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path
                    d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z"
                ></path>
                <path d="M17.5 6.5L16.5 7.5"></path>
            </svg>
            Garantía asegurada
        </li>
        <li>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
            >
                <path
                    d="M17.0021 21C18.1063 21 19.0014 20.1046 19.0014 19C19.0014 17.8954 18.1063 17 17.0021 17C15.898 17 15.0029 17.8954 15.0029 19C15.0029 20.1046 15.898 21 17.0021 21Z"
                ></path>
                <path
                    d="M7.00605 21C8.11019 21 9.00527 20.1046 9.00527 19C9.00527 17.8954 8.11019 17 7.00605 17C5.90192 17 5.00684 17.8954 5.00684 19C5.00684 20.1046 5.90192 21 7.00605 21Z"
                ></path>
                <path
                    d="M2.00781 8.14286C2.16217 8.64223 2.64307 9 3.13264 9C3.75363 9 4.25704 8.42437 4.25704 7.71429C4.25704 7.00421 3.75363 6.42857 3.13264 6.42857L3.46601 3.37547C3.48943 3.16098 3.64888 3 3.83792 3H6.00625L12.0039 12M6.00625 3L8.00547 13M19.0012 19C21.6834 19 22 18.072 22 15.5125C22 14.2875 22 13.675 21.76 13.1578C21.5094 12.6178 21.0578 12.2814 20.108 11.5931C19.1647 10.9095 18.494 10.141 17.8549 9.08239C16.9435 7.57263 16.4878 6.81775 15.8043 6.40888C15.1209 6 14.3148 6 12.7026 6H12.0039V13"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
                <path
                    d="M5.00651 18.996C5.00651 18.996 3.84703 19.0063 3.48717 18.96C3.18729 18.84 2.82289 18.5585 2.58753 18.402C1.86781 17.9235 2.01175 18.12 2.01175 17.688C2.01175 17.0126 2.00768 14.0063 2.00768 14.0063L2.00768 13.0463C2.00768 12.9863 1.946 12.9991 2.40752 13.0063L21.4801 13.0063M9.00508 19.002H15.0027"
                    stroke-linecap="round"
                ></path>
            </svg>
            Montajes en todo el país
        </li>
    </ul>
</section>

<section class="padding-container" id="galeria">
    <div>
        <h1>
            Fabricación y montaje de galpón industrial en Vaca Muerta para el
            Grupo Beraldi
        </h1>
        <p>
            Una nave de gran escala con 100 metros de largo, 30 metros de ancho
            y 8,50 metros de altura.
            <br />
            Destinada al depósito de arena para fracking, desarrollada bajo planos
            con cálculo estructural y verificación de cargas según normativa vigente.
        </p>
    </div>
    <br /><br />
    <main>
        {#each galeria as item}
            <!-- content here -->
            <article style="background-image: url({item.src});"></article>
        {/each}
    </main>
</section>

<section class="padding-container" id="galeria">
    <div>
        <h1>
            Construcción de galpón en estructura de alma llena, revestido con
            chapa trapezoidal prepintada, realizado en Maltería Quilmes en Tres
            Arroyos.
        </h1>
    </div>
    <div>
         <p>
            La obra incluye: <br />
            - Techo con punto fijo para anclaje de personal <br />
            - Escalera marinera de acceso al techo <br />
            - Pasarelas para acceso a calador y control de carga <br />
            <br>
            <strong
                >Medidas: 6,5 m de ancho • 25 m de largo • 7,5 m de alto
            </strong>
            <br /><br>
            Un trabajo pensado para seguridad, funcionalidad y eficiencia operativa
        </p>
    </div>
    <br /><br />

    <main>
        {#each galeriaQuilmes as item}
            <!-- content here -->
            <article style="background-image: url({item.src});"></article>
        {/each}
    </main>
</section>

<Form></Form>

<style>
    .div-galpones {
        background-color: #f1f1f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 100px;
    }

    .div-galpones div,
    .div-galpones ul {
        width: 50%;
    }

    .div-galpones ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        gap: 20px;
    }

    .div-galpones ul li {
        background-color: white;
        padding: 20px;
        border-radius: 20px;
        font-size: 18px;
        color: var(--red-color);
        display: flex;
        gap: 20px;
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
        margin-bottom: 0;
    }

    section {
        background-color: var(--dark-color);
    }

    #galeria h1 {
        color: #f1f1f1;
    }

    #galeria p {
        color: #f1f1f1;
    }

    #galeria div {
        width: 50%;
    }
    #galeria main {
        display: flex;
        justify-content: flex-start; /* empieza desde la izquierda */
        align-items: center;
        gap: 20px;
        overflow-x: auto; /* permite scroll horizontal */
        padding: 10px;
        scroll-behavior: smooth; /* opcional: scroll suave */
        /* Oculta el scroll nativo */
        -ms-overflow-style: none; /* IE y Edge */
        scrollbar-width: none; /* Firefox */
    }

    #galeria main article {
        flex: 0 0 auto; /* evita que los items se achiquen */
        background-image: url("../../../public/retggsdfsd.jpeg");
        background-size: cover;
        width: 30vw;
        height: 85vh;
        border-radius: 10px;
        display: flex;
        justify-content: start;
        align-items: end;
    }

    @media (max-width: 768px) {
        #galeria main article {
            width: 60vw;
            height: 30vh;
            background-image: url("../../../public/retggsdfsd.jpeg");
            background-size: cover;
        }

        .div-galpones {
            display: block;
        }

        .div-galpones div,
    .div-galpones ul {
        width: 100%;
    }

    .div-galpones ul {
        padding: 0;
    }

     .div-galpones ul li {
        list-style: none;
        margin: 0;
     }

     #galeria div {
        width: 100%;
    }

     #galeria main  {
        flex-direction: column;
     }
    #galeria main article {
                width: 80vw;
        height: 46vh;
    }
    }
</style>
