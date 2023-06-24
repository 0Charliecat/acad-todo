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
                return this.$store.getters.undone;
            },
        },
    }
</script>