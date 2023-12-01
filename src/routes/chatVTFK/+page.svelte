<script>
    import { plainChat } from "$lib/openaiUtils.js"

    let spm = "Hva er tåke?"

    const normalChat = async () => {
        console.log(spm)
        const svar = await plainChat(spm)
        console.log(svar)
        return svar
    }


</script>
<main>
    <h1>Velkommen til chatVTFK 2.0</h1>
    <div id="hovedDiv">
        <div id="chatModul">
            <div id="responsDiv">
                Her kommer responsen
            </div>
            <div id="spmDiv">
                <textarea name="" id="" cols="30" rows="10" bind:value={spm}></textarea>
                <button id="sendButton" on:click={normalChat}>Send</button>
            </div>
        </div>
        <div id="kontrollModul">
            <h3>Kontekst</h3>
        </div>
    </div>

</main>
<style>
    #hovedDiv {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100vh;
        background-color: rgb(142, 98, 40);
    }

    #chatModul {
        width: 80%;
        height: 80%;
        background-color: rgb(234, 154, 154);
    }
    #kontrollModul {
        width: 80%;
        height: 20%;
        background-color: rgb(217, 121, 121);
    }
</style>