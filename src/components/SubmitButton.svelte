<script lang="ts">
    export let disabled: boolean;
</script>

<button class="submitButton {disabled ? '--disabled' : ''}" type="submit"
    >Find out my emotional state</button
>

<style>
    .submitButton {
        background: var(--color-secondary);
        color: var(--color-tertiary);
    }

    .--disabled {
        opacity: 0.5;
    }
</style>
