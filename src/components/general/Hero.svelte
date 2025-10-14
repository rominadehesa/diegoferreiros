<script>
    export let title;
</script>

<header>
    <h1>{title}</h1>
</header>

<style>
    header {
        height: 60vh;
        background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/public/services/1.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: start;
        align-items: end;
        padding: 0 15vw;
        padding-bottom: 8vh;
    }

    h1 {
        font-family: 'albula-ExtraBold';
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2%;
        line-height: 50px;
        font-size: 45px;
    }

     @media (max-width: 768px) {
        header {
            padding: 0 10vw;
            padding-bottom: 8vh; 
        }

        h1 {
            line-height: 40px;
            font-size: 35px;
        }
     }
</style>