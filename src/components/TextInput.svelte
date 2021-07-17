<script lang="ts">
    import anime from "animejs/lib/anime.es.js";
    import { createEventDispatcher, onMount } from "svelte";
    import { textareaAnimation } from "../anime/textareaAnimation";

    export let value = "";
    export let isSubmitted: boolean = false;

    const dispatch = createEventDispatcher();

    let timeline;
    let visible = true;

    onMount(() => {
        timeline = textareaAnimation(
            anime.timeline({
                targets: ".fillAnimation",
                autoPlay: false,
                complete: (_) => {
                    dispatch("fillAnimationDone");
                    visible = false;
                },
            })
        );
    });

    $: {
        if (isSubmitted) {
            timeline?.play();
            value = "";
        } else {
            visible = true;
            timeline?.restart();
            timeline?.pause();
        }
    }
</script>

<div class="textareaContainer">
    <textarea
        class="textarea"
        bind:value
        placeholder="Type what's on your mind and measure your emotional state"
    />

    <div class:visible class="fillAnimation" />
</div>

<style>
    .textareaContainer {
        position: relative;
    }

    .fillAnimation {
        position: absolute;
        width: 2em;
        height: 2em;
        background-color: var(--color-secondary);
        right: 0;
        opacity: 0;
        display: none;
    }

    .fillAnimation.visible {
        display: block;
    }

    textarea {
        transform-origin: right bottom;
        overflow: auto;
        outline: none;
        margin-bottom: 0;
        transform: scale(1);
        box-sizing: border-box;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;

        resize: none; /*remove the resize handle on the bottom right*/

        background-color: transparent;
        border: 2px solid var(--color-secondary);
        width: 35em;
        height: 10em;
        font-size: 1.5em;
        font-family: var(--font-secondary);
        padding: var(--spacing-base);
        color: var(--color-secondary);
    }
</style>
