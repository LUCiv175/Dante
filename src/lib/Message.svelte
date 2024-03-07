<script>
    import { scale, slide } from "svelte/transition";

    export let sender;
    export let tt;
    let s = sender=="user" ? "You:" : "Dante:";
    let clas = sender=="user" ? "user" : "chat";
</script>

<style>
    div{
        margin-bottom: 2vh;
    }

    span{
        display: inline-block;

        padding: 5px 2rem;
        border-radius: 10px;
        font-size: 1.5rem;
        font-family: "inter", sans-serif;
        font-weight: 700;
        font-style: normal;
    }
    p{
        font-size: 0.75rem;
        font-family: "inter", sans-serif;
        font-weight: 300;
        font-style: normal;
    }


    .user span{
        margin-left: 1rem;
        margin-right: 20vw;
        color: #262626;
        background-color: #E2E8CE;
    }
    .user p{
        color: #FF9F1C;
    }
    .chat span{
        margin-right: 1rem;
        margin-left: 20vw;
        color: #262626;
        background-color: #FF9F1C;
    }

    .chat p{
        color: #E2E8CE;
    }
    .user{
        margin-left: 2vw;
        text-align: start;
    }
    .chat{
        margin-right: 2vw;
        text-align: end;
    }

    @media (max-width: 1000px) {
        p{
            font-size: 0.3rem;
        }
        span{
            font-size: 0.75rem;
        }
    }

</style>

<div class={clas} in:slide={{delay:500, duration:350}} out:slide={{duration:350}}>
    <p>{s}</p><span>{tt}</span>
</div>
