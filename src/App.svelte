  <script>
    import Router from 'svelte-spa-router';
    import Home from './routes/Home.svelte';
    import Nav from './components/general/Nav.svelte';
    import Footer from './components/general/Footer.svelte';
    // @ts-ignore
    import Servicios from './routes/Servicios.svelte';
    import Contacto from './routes/Contacto.svelte';
    
    const routes = {
      '/': Home,
      '/servicios': Servicios,
      '/contacto': Contacto
    }
  </script>

 <Nav />

  <Router {routes} />

  <Footer></Footer>
