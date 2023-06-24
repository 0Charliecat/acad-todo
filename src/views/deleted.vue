<script setup>
import { inject } from 'vue';

</script>

<template>
    <div>
        <ul>
            <ToDo v-for="todo in todos" :key="todo.$id" :contents="todo"></ToDo>
        </ul>
    </div>
</template>

<script>
    import ToDo from '@/components/todo.vue'

    export default { 
        components: {
            ToDo,
        },
        computed: {
            todos() {
                return this.$store.getters.done;
            },
        },
        inject: ["UpdateToDo"]
    }
</script>