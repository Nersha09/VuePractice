<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'my-button'
    }
</script>
<style scoped>
    .btn {
        padding: 10px 15px;
        align-self: end;
        background: none;
        border: 1px solid rgb(226, 131, 16);
        color: rgb(226, 131, 16);
      }
</style>