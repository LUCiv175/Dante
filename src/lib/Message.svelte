<script>
    export let sender;
    export let tt;
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

{#if sender=="user"}
<div class="user">
    <p>You:</p><span >{tt}</span>
    
</div>
{:else if sender=="bot"}
<div class="chat" >
    <p>Dante:</p><span>{tt}</span>
    
</div>
{:else}
<p>Error!</p>
{/if}