<script setup>
import { inject } from 'vue';
import { data } from '../datasharing'

const UpdateToDo = inject('UpdateToDo');
</script>

<template>
    <div>
        <ul>
            <li v-for="todo in data.filter(e=>e.done)" @click="UpdateToDo(todo.$id, 'flip', '', $event)" :key="todo.$id"> <code>[x]</code> {{ todo.title }}</li>
        </ul>
    </div>
</template>