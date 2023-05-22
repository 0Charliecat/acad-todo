<script setup>
import { inject } from 'vue';

const UpdateToDo = inject('UpdateToDo');
</script>

<template>
    <div>
        <ul>
            <li v-for="todo in todos" @click="UpdateToDo(todo.$id, 'flip', '', $event)" :key="todo.$id"> <code>[x]</code> <span class="line-through decoration-red-400 decoration-2"> {{ todo.title }} </span></li>
        </ul>
    </div>
</template>

<script>
    export default { 
        props: {
            todo: Array
        },
        data() {
            return { data: this.todo }
        },
        computed: {
            todos() {
                return this.data.filter(e=>e.done);
            },
        },
        inject: ["UpdateToDo"]
    }
</script>