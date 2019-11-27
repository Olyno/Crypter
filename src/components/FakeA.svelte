<script>
    let clazz;
    export { clazz as class };
</script>

<a class={clazz} on:click|preventDefault href="#!">
    <slot></slot>
</a>