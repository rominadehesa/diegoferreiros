<script>

</script>

<section class="padding-container">
    <div>
        <h1>Somos el aliado en tus proyectos industriales</h1>
        <p>Estamos listos para acompañarte con servicio de grúas, montaje de naves y mantenimiento especializado. Experiencia y compromiso en cada obra.</p>
    </div>
    <form action="">
        <div>
            <input type="text" placeholder="Nombre completo" required>
        </div>
        <div>
            <input type="text" placeholder="Asunto" required>
        </div>
        <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Escribe tu consulta aquí" required></textarea>
        </div>
        <div>
            <button id="btnMainRed">Enviar</button>
        </div>
    </form>
</section>

<style>
    section {
        background-color: #F4F4F4;
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 150px;
    }
    section div, section form {
        width: 45%;
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
    }
    form div {
        width: 100%;
    }
    form input, form textarea{
        padding: 4%;
        width: 92%;
        margin-bottom: 10px;
        border: none;
        font-size: 14px;
        border-radius: 6px;
        font-style: normal;
        border: 0.5px solid #313131;
    }
    form input::placeholder, form textarea::placeholder {
        color: #b6b6b6;       /* color del texto */
        font-size: 14px;   /* tamaño de la letra */
        font-weight: 200;
    }
    @media (max-width: 768px) {
        section {
           display: block;
        }
        section div, section form {
            width: 100%;
        }
    }
</style>