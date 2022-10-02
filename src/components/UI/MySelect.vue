<template>
    <select 
        :value="modelValue" 
        @change="changeOptions"
    >
        <option disabled value="">sort by</option>
        <option
            v-for="option in options" 
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>
<script>
    export default {
        name: 'my-select',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => [] //для пустых массивов рекомендуется использовать вот такую функцию
            }
        },
        methods: {
            changeOptions(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        },

    }
</script>
<style>

</style>

<!-- строка 3 - если не будет работать поменять на v-module -->