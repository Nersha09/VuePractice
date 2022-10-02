<template>
    <input 
        :value="modelValue"
        @input="updateInput" 
        type="text"
        class="input"/>
</template>
<script>
    export default {
        name: 'my-input',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>
<style scoped>
    .input {
        width: 100%;
        border: 1px solid rgb(226, 131, 16);
        padding: 10px 15px;
        margin-top: 15px;
      }
</style>

 <!-- @input="updateInput" - отслеживание изменеий в инпуте -->