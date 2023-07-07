<script setup>
  import {
    RouterLink
  } from 'vue-router'
</script>

<template>
    <li v-bind:class="todoStyle[1]">
        <span @click="flip(data.$id)"> <code>[{{todoStyle[0]}}]</code> {{ data.title }} </span>
        <router-link :to="`/edit?id=${data.$id}`">
            <button class="px-2" > ✏️ </button>
        </router-link>
    </li> 
</template>

<script>
    export default { 
        props: {
            contents: Object,
        },
        data() {
            return { data: this.contents, parent: this.parent }
        },

        methods: {
            flip(id) {
                this.$store.commit('flip', id)
            }
        },

        computed: {

            todoStyle() {
                if (this.data.done) {
                    return ['x', 'line-through decoration-emerald-400 decoration-2']
                } else {
                    return [' ', '']
                }
            },

        },
        inject: ["UpdateToDo"]
    }
</script>