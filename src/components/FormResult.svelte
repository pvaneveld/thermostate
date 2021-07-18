<script lang="ts">
    import { onMount } from "svelte";
    import anime from "animejs/lib/anime.es.js";
    import { createEventDispatcher } from "svelte";
    import { gridAnimation } from "../anime/gridAnimation";

    export let isPositive: boolean;

    const grid = [35, 10];
    const [cols, rows] = grid;
    const elementCount = cols * rows;

    const resultGrid = {
        width: 9,
        positive: [
            [2, 2],
            [2, 3],
            [2, 7],
            [2, 8],
            [3, 2],
            [3, 3],
            [3, 7],
            [3, 8],
            [4, 5],
            [5, 5],
            [6, 1],
            [6, 4],
            [6, 5],
            [6, 6],
            [6, 9],
            [7, 1],
            [7, 9],
            [8, 2],
            [8, 8],
            [9, 3],
            [9, 4],
            [9, 5],
            [9, 6],
            [9, 7],
        ],
        negative: [
            [2, 2],
            [2, 3],
            [2, 7],
            [2, 8],
            [3, 2],
            [3, 3],
            [3, 7],
            [3, 8],
            [4, 5],
            [5, 5],
            [6, 4],
            [6, 5],
            [6, 6],
            [8, 3],
            [8, 4],
            [8, 5],
            [8, 6],
            [8, 7],
            [9, 2],
            [9, 8],
        ],
    };

    const dispatch = createEventDispatcher();

    onMount(() => {
        const timeline = anime.timeline({
            targets: ".formResult__element",
            easing: "easeInOutSine",
            delay: anime.stagger(50),
            complete: (anime) => {
                dispatch("resultAnimationDone");
            },
        });

        gridAnimation(timeline, grid);

        timeline.play();
    });

    const isColored = (currentIndex: number) => {
        const { width: resultGridWith, positive, negative } = resultGrid;

        // +1 to correct for zero based
        const index = currentIndex + 1;

        const totalGridWith = cols;
        const startOfCenter = (cols - resultGridWith) / 2;

        // change later on
        const gridToColor = isPositive ? positive : negative;

        const coloredPositions = gridToColor.map(
            ([rows, column]) =>
                (rows - 1) * totalGridWith + startOfCenter + column
        );

        return coloredPositions.includes(index);
    };
</script>

<div class="formResult">
    {#each Array(elementCount) as element, i}
        <div class:colored={isColored(i)} class="formResult__element" />
    {/each}
</div>

<style>
    .formResult {
        position: absolute;
        top: 2px;
        font-size: 1.5em;
        width: 35em;
        height: 10em;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .formResult__element {
        width: 1em;
        height: 1em;
        background: var(--color-secondary);
    }
</style>
