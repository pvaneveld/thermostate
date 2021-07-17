<script lang="ts">
    export let color: SpinnerTypes["color"] = "#f7d26a";
    export let unit: SpinnerTypes["unit"] = "px";
    export let duration: SpinnerTypes["duration"] = "1.25s";
    export let size: SpinnerTypes["size"] = "60";

    type SpinnerTypes = {
        size: string | number;
        color: string;
        unit: string;
        duration: string;
    };
</script>

<div
    class="wrapper"
    style="--size: {size}{unit}; --color: {color}; --duration: {duration};"
>
    <div class="firework" />
</div>

<style>
    .wrapper {
        width: calc(var(--size) * 1.3);
        height: calc(var(--size) * 1.3);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .firework {
        border: calc(var(--size) / 10) dotted var(--color);
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        animation: fire var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1)
            infinite;
    }
    @keyframes fire {
        0% {
            opacity: 1;
            transform: scale(0.1);
        }
        25% {
            opacity: 0.85;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
</style>
