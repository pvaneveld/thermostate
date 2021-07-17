<script lang="ts">
    import SubmitButton from "./SubmitButton.svelte";

    import TextInput from "./TextInput.svelte";
    import FormResult from "./FormResult.svelte";
    import ml5 from "ml5";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    let text: string;
    let submitted = false;
    let resultAnimation = false;
    let resultText = false;
    let sentimentModel;
    let isPositive: boolean;

    onMount(async () => {
        sentimentModel = await ml5.sentiment("movieReviews");
    });

    const handleSubmit = () => {
        const prediction = sentimentModel.predict(text);
        const { score } = prediction;

        isPositive = score <= 0.5 ? false : true;
        submitted = true;
    };

    const resetForm = () => {
        submitted = false;
        resultAnimation = false;
        resultText = false;
    };
</script>

{#if sentimentModel !== undefined}
    <section class="formComponent" in:fly={{ y: 30, duration: 600 }}>
        <header class="formComponent__header">
            <h1>Thermostate</h1>
        </header>

        <form
            class="formComponent__form"
            on:submit|preventDefault={handleSubmit}
        >
            <div class="formComponent__fieldContainer">
                <TextInput
                    bind:value={text}
                    isSubmitted={submitted}
                    on:fillAnimationDone={() => (resultAnimation = true)}
                />
                {#if resultAnimation}
                    <FormResult
                        {isPositive}
                        on:resultAnimationDone={() => (resultText = true)}
                    />
                {/if}
            </div>

            {#if !resultText}
                <div out:fly={{ y: 200, duration: 300 }}>
                    <SubmitButton disabled={!text && !submitted} />
                </div>
            {/if}
        </form>
        {#if resultText}
            <div in:fly={{ y: -200, duration: 300, delay: 300 }}>
                <p class="formComponent__resultText">
                    {#if isPositive}
                        You seem to be quite positive :) But remember: hapiness
                        is not a horse; you cannot harness it.'
                    {:else}
                        You appear to be a bit negative. Here is a <a
                            href="https://www.youtube.com/watch?v=ZbZSe6N_BXs"
                            class="formComponent__link"
                            target="_blank">song</a
                        > to cheer you up!
                    {/if}
                </p>
                <button class="formComponent__resetButton" on:click={resetForm}
                    >Share some more thoughts</button
                >
            </div>
        {/if}
    </section>
{/if}

<style>
    .formComponent {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .formComponent__header {
        font-size: 5em;
        text-align: center;
        letter-spacing: 0.15em;
        font-family: var(--font-secondary);
        color: var(--color-secondary);
    }

    .formComponent__form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .formComponent__fieldContainer {
        position: relative;
        margin-bottom: calc(var(--spacing-base) * 3);
    }

    .formComponent__resultText {
        max-width: 25em;
        font-family: var(--font-secondary);
        color: var(--color-secondary);
        text-align: center;
        font-size: 2em;
        margin-top: 0;
    }

    .formComponent__resetButton {
        display: block;
        color: var(--color-primary);
        margin: 0 auto;
    }

    .formComponent__link {
        color: var(--color-tertiary);
        text-decoration: underline;
    }
</style>
