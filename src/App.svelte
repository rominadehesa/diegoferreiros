  <script>
    import Router from 'svelte-spa-router';
    import Home from './routes/Home.svelte';
    import Nav from './components/general/Nav.svelte';
    import Footer from './components/general/Footer.svelte';
    import Servicios from './routes/Servicios.svelte';
    
    const routes = {
      '/': Home,
      '/servicios': Servicios
    }
  </script>

 <Nav />

  <Router {routes} />

  <Footer></Footer>
