<script>
  function enviarFormulario(e) {
    e.preventDefault();

    const form = e.target;

    const nombre = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const mensaje = form.msj.value;

    const numero = "5492983607333"; // TU NUMERO CON CODIGO PAIS

    const texto = `
Hola Diego! Mi nombre es ${nombre}
    
Te escribo por ${subject}
   
${mensaje}

Espero tu respuesta, ¡gracias!

Email: ${email}
Celular: ${phone}
`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    form.reset();
  }
</script>

<!-- FORMULARIO HTML -->
<section class="padding-container" id="form">
  <div>
    <h1>Somos el aliado en tus proyectos industriales</h1>
    <p>
      Estamos listos para acompañarte con servicio de grúas, montaje de naves y
      mantenimiento especializado. Experiencia y compromiso en cada obra. <br />
      Contáctanos para una consulta personalizada a través de nuestro formulario
      o por nuestro email
      <a href="mailto:diegoferreiros2025@gmail.com" class="email-send"
        >diegoferreiros2025@gmail.com</a
      >.
    </p>
  </div>

  <form id="contact-form" onsubmit={enviarFormulario}>
    <div>
      <input type="text" name="name" placeholder="Nombre completo" required />
    </div>
    <div>
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
      />
    </div>
    <div>
      <input type="text" name="phone" placeholder="Celular" required />
    </div>
    <div>
      <input type="text" name="subject" placeholder="Asunto" required />
    </div>
    <div>
      <textarea
        name="msj"
        cols="30"
        rows="10"
        placeholder="Escribe tu consulta aquí"
        required
      ></textarea>
    </div>
    <div>
      <button type="submit" id="btnMainRed">Enviar por WhatsApp</button>
    </div>
  </form>
</section>

<style>
  section {
    background-color: #f4f4f4;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 150px;
  }
  section div,
  section form {
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
  form input,
  form textarea {
    padding: 4%;
    width: 92%;
    margin-bottom: 10px;
    border: none;
    font-size: 14px;
    border-radius: 6px;
    font-style: normal;
    border: 0.5px solid #313131;
  }
  form input::placeholder,
  form textarea::placeholder {
    color: #b6b6b6; /* color del texto */
    font-size: 14px; /* tamaño de la letra */
    font-weight: 200;
  }
  @media (max-width: 768px) {
    section {
      display: block;
    }
    section div,
    section form {
      width: 100%;
    }
    h1 {
      font-size: 26px;
    }
  }
</style>
