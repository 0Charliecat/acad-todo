<template>

    <label for="">What to do?</label>
    <input type="text" v-model="rqst.title" @input="onTextChange" class="bg-emerald-100 mx-2 px-2 flex-auto rounded-full text-emerald-900">

</template>

<script>
export default {
    props: {
        id: String
    },
    data() {
        console.log(this)
        return {
            rqst: {...this.$store.getters.objected[this.id]}
        }
    },
    methods: {
        onTextChange(e) {
            let editedToDo = this.rqst;
            console.log(`ToDo Edit:`, this.id, e, editedToDo)
            this.$store.commit('edit', editedToDo)
        }
    }
}
</script>