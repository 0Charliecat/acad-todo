<script setup>
import { inject } from 'vue';

const UpdateToDo = inject('UpdateToDo');
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
        props: {
            todo: Array
        },
        data() {
            return { data: this.todo }
        },
        computed: {
            todos() {
                return this.data.filter(e=>!e.done);
            },
        },
        inject: ["UpdateToDo"]
    }
</script>