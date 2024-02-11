<script>
    import Header from '$lib/Header.svelte';
</script>

<style lang="scss">
    $font-stack: Ubuntu Mono, sans-serif;
    
    .main {
        padding: 100px;
        font-family: $font-stack;
        font-size: 120%;
        padding-right: 40%;
    }
</style>

<svelte:head>
    <title>Brandon Wang</title>
</svelte:head>

<div class="main">
    <Header/>
    <div class="body">
        <slot/>
    </div>
</div>
