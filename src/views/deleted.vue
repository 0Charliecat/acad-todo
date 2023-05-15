<script setup>
import { inject } from 'vue';

const ToDos = inject('ToDos');
const UpdateToDo = inject('UpdateToDo');
</script>

<template>
    <div class="mx-5">
        <ul>
            <li v-for="todo in ToDos.filter(e=>e.done)" @click="UpdateToDo(todo.$id, 'flip', '', $event)"> <code>[x]</code> {{ todo.title }}</li>
        </ul>
    </div>
</template>