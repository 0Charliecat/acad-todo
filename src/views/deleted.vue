<template>
    <div>
        <ul>
            <ToDo v-for="todo in todos" :key="todo.$id" :contents="todo" @flip="flipATodo"></ToDo>
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
        methods: {
            flipATodo(id) {
                this.$store.commit('flip', id)
            }
        },
    }
</script>