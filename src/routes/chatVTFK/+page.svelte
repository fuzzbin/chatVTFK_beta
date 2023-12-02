<script>
    import { plainChat } from "$lib/openaiUtils.js"

    let spm = "Hva er tåke?"
    let svar = "Her kommer svaret"
    let temperatur = 0.5
    let kontekst = "Her kommer konteksten"

    const normalChat = async () => {
        console.log(spm)
        svar = await plainChat(spm, temperatur, kontekst)
        console.log(svar)
        console.log(temperatur)
        return svar
    }

</script>
<main>
    <h1>Velkommen til chatVTFK 2.0</h1>
    <div id="hovedDiv">
        <div id="chatModul">
            <div id="responsDiv">
                {#await svar}
                    Venter på svar...
                {:then res} 
                    {res}
                {/await}
            </div>
            <div id="spmDiv">
                <textarea name="" id="" cols="30" rows="10" bind:value={spm}></textarea>
                <button id="sendButton" on:click={normalChat}>Send</button>
            </div>
        </div>
        <div id="kontrollModul">
            <h3>Kontekst</h3>
            <textarea name="" id="" cols="30" rows="10" bind:value={kontekst}></textarea>
            <h3>Temperatur</h3>
            <input type="range" name="" id="rangeInput" min="0.0" max="1.0" step="0.1" bind:value={temperatur}>

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
        height: 80%;
        background-color: rgb(217, 121, 121);
    }
</style>