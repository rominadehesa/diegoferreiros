<script>
    import { onMount } from "svelte";
    import { services } from "../../assets/data/services";
    let visible = false;
    let element;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    visible = true;
                    // Si querés que solo se anime la primera vez:
                    observer.unobserve(element);
                }
            },
            { threshold: 0.2 } // 20% visible
        );
        observer.observe(element);
    });

</script>

<div class="container-cards" bind:this={element}>
    {#each services as item}  
        <article  class:show={visible}>
            <header style="background-image: url({item.img});">
            </header>
            <main>
                <h3>{ item.name }</h3>
                <br>
                <p id="text-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dolore ratione repellat iusto sunt nam quibusdam.</p>
                <br>
                <div class="a-svg">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0001 20.1598C7.48809 20.1598 3.84009 16.5118 3.84009 11.9998C3.84009 7.48784 7.48809 3.83984 12.0001 3.83984C16.5121 3.83984 20.1601 7.48784 20.1601 11.9998C20.1601 16.5118 16.5121 20.1598 12.0001 20.1598ZM12.0001 4.79984C8.01609 4.79984 4.80009 8.01584 4.80009 11.9998C4.80009 15.9838 8.01609 19.1998 12.0001 19.1998C15.9841 19.1998 19.2001 15.9838 19.2001 11.9998C19.2001 8.01584 15.9841 4.79984 12.0001 4.79984Z" fill="#D22610"/>
                        <path d="M11.8561 16.6562L11.1841 15.9842L15.1681 12.0002L11.1841 8.01624L11.8561 7.34424L16.5121 12.0002L11.8561 16.6562Z" fill="#D22610"/>
                        <path d="M7.67993 11.52H15.8399V12.48H7.67993V11.52Z" fill="#D22610"/>
                    </svg>
                </div>
            </main>
        </article>
    {/each}
</div>

<style>
    .container-cards {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 0.5vw;
    }
    .container-cards article {
        border-radius: 12px;
        width: 40%;
        text-align: start;
        box-shadow: 0 12px 12px rgba(0, 0, 0, 0.2);
    }

    article {
        opacity: 0;
        background-color: #fff;
        transform: translateX(-50px);
        transition: all 2s ease;
    }

    #text-card {
        font-size: 16px;
        line-height: 18px;
        padding: 0;
        margin: 0;
    }
    article header {
        height: 25vh;
        background-size: cover;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    article main {
        padding: 4vh 3vh;
        border-radius: 20px;
    }

    h3 {
        color: var(--dark-color);
        font-weight: 800;
        font-size: 24px;
        width: 50%;
    }

    article.show {
        opacity: 1;
        transform: translateX(0);
    }

    .a-svg {
        display: flex;
        justify-content: end;
    }

    @media (max-width: 768px) {
        .container-cards {
            display: block;
            margin-top: 1vh;
        }
        .container-cards article {
            margin-top: 3vh;   
            width: 100%;
        }
        article header {
            height: 20vh;
        }
    }
</style>