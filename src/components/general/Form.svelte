<script>
  import emailjs from 'emailjs-com';

  export function enviarFormulario(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_irf3ru5",
    "template_vk21v3v",
    e.target, // el formulario
    "PBtdMVdICpk5SFjnj" // reemplaza con tu Public Key
  )
  .then((result) => {
    alert("Mensaje enviado correctamente ✅");
    e.target.reset();
  })
  .catch((error) => {
    alert("Error al enviar ❌");
    console.error(error);
  });
}

</script>

<!-- FORMULARIO HTML -->
<section class="padding-container" id="form">
  <div>
    <h1>Somos el aliado en tus proyectos industriales</h1>
    <p>Estamos listos para acompañarte con servicio de grúas, montaje de naves y mantenimiento especializado. Experiencia y compromiso en cada obra.</p>
  </div>

  <form id="contact-form" onsubmit={enviarFormulario}>
    <div>
      <input type="text" name="name" placeholder="Nombre completo" required>
    </div>
    <div>
      <input type="email" name="email" placeholder="Correo electrónico" required>
    </div>
    <div>
      <input type="text" name="phone" placeholder="Celular" required>
    </div>
    <div>
      <input type="text" name="subject" placeholder="Asunto" required>
    </div>
    <div>
      <textarea name="msj" cols="30" rows="10" placeholder="Escribe tu consulta aquí" required></textarea>
    </div>
    <div>
      <button type="submit" id="btnMainRed">Enviar</button>
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
        h1 {
            font-size: 26px;
        }
    }
</style>