<script>
    import c from './const';
</script>

{#await c.waitForMe()}
    <p>loading...</p>
{:then x}
    <p>loaded {x}!</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}