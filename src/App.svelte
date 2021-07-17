<script lang="ts">
    import Form from "./components/Form.svelte";
</script>

<svelte:head>
    <!-- elements go here -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
        rel="stylesheet"
    />

    <link
        href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<main>
    <Form />
</main>

<style>
    :global(:root) {
        --font-primary: "Roboto", sans-serif;
        --font-secondary: "Permanent Marker", cursive;

        --color-primary: #331221;
        --color-secondary: #f7d26a;
        --color-tertiary: #f27edd;

        --spacing-base: 1em;
    }

    :global(html) {
        font-size: 16px;
        margin: 0;
        height: 100%;
        background-color: var(--color-primary);
        font-family: var(--font-primary);
    }

    :global(button) {
        padding: calc(var(--spacing-base) / 2) calc(var(--spacing-base) * 1.5);
        border-radius: 1em;
        font-family: var(--font-secondary);
        font-size: 1.5em;
        outline: 0;
        cursor: pointer;
        transition: opacity 150ms ease-in-out;
    }

    :global(::placeholder) {
        color: var(--color-secondary);
    }
</style>
