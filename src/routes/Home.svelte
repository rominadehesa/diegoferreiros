<script>
    // @ts-nocheck
    import img from '../../public/df1.png';
    import SectionMain from '../components/general/SectionMain.svelte';
    import HeroMain from '../components/general/HeroMain.svelte';
    import Section from '../components/general/Section.svelte';
    import Galeria from '../components/general/Galeria.svelte';
    import Form from '../components/general/Form.svelte';

    const texts = [
        {
            text: "Hace más de 30 años, Rubén Ferreirós fundó la empresa con el compromiso de ofrecer soluciones confiables en el rubro metalúrgico. En 2004 se sumó su hijo Diego, quien desde 2019 lidera la compañía, consolidando su crecimiento y visión a futuro. A lo largo de estos años nos especializamos en el montaje industrial de estructuras metálicas: galpones, tinglados, plantas de silos, norias, extractores, sinfines, transportadores a cadena y más. Brindamos un servicio integral que abarca diseño, mecanización, montaje y reparación."
        },
        {
            text: "En la última etapa incorporamos el servicio de grúa, disponible tanto para nuestras obras como para clientes externos. Hoy seguimos creciendo con el mismo objetivo que nos guía desde el inicio: brindar un servicio de calidad, con compromiso y confianza en cada proyecto, trabajando en obras locales, provinciales y también en el sur de nuestro país."
        }
    ]
</script>

<HeroMain></HeroMain>

<SectionMain 
    title="Más de 30 años construyendo confianza y solidez"
    text={texts}
    condition=true url="/" textBtn="Explora nuestros proyectos &rarr;"> 
</SectionMain>

<Section></Section>

<Galeria></Galeria>

<Form></Form>

<style>
    
</style>