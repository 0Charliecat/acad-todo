<template>
    <div v-if="rqst.hasOwnProperty('$id')">
<div class="flex mb-2 pt-2 border-t-2 border-t-emerald-400">
        <label for="">What to do?</label>
        <input type="text" v-model="rqst.title" @input="onTextChange" class="bg-emerald-100 mx-2 px-2 flex-auto rounded-full text-emerald-900">
    </div>
    <button onclick="history.back()" class="bg-emerald-100 px-2 rounded-full">Go Back</button>
    </div>
    <div v-else>
        <span class="text-4xl font-bold text-emerald-900">
            404
        </span> <br>
        <span>
            This todo doesn't look to be in existence. Look for <a href="/" class="font-bold text-emerald-700 link">other todos</a>
        </span>
    </div>
    

</template>

<script>
export default {
    props: {
        id: String
    },
    data() {
        console.log(this.$store.getters.objected[this.id])
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