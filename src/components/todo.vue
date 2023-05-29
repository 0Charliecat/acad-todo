<template>
    <li v-bind:class="todoStyle[1]" @click="UpdateToDo(data.$id, 'flip', '', $event)">
        <code>[{{todoStyle[0]}}]</code> {{ data.title }}
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