<template>
    <li v-bind:class="todoStyle[1]">
        <span @click="flip(data.$id)"> <code>[{{todoStyle[0]}}]</code> {{ data.title }} </span>
        <router-link :to="`/edit?id=${data.$id}`">
            <button class="px-2" > ✏️ </button>
        </router-link>
    </li> 
</template>

<script>
  import {
    RouterLink
  } from 'vue-router'
    export default { 
        components: {
            RouterLink
        },
        props: {
            contents: Object,
        },
        data() {
            return { data: this.contents }
        },

        emits: {
            flip: (id) => {
                return true;
            },
        }, 

        methods: {
            flip(id) {
                this.$emit("flip", id)
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
