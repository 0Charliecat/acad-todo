<script setup>
    import {
        ref
    } from 'vue'
    const emit = defineEmits(["exchangeTodo", "createTodo"])

    const inp = ref("")

    function emiting(e, r) {
        return emit(e, r)
    }

    function CancelToDoCreation() {
        inp.value = ""
    }

    function CreateToDo() {
        if (inp.value.length === 0) return null;
        emiting("createTodo", {
            $type: 'todo-v1',
            $id: `c${Date.now()}`,
            title: inp.value,
            done: false,
        })
        inp.value = ""
    }

    function Exchange() {
        emiting("exchangeTodo")
    }
</script>

<template>
    <div class="flex mb-2">
        <div>
            <span>{{ [ `⭕️ ${countUndone}`, `❌ ${countDone}`, `🔲 ${count}`, ].join(' • ') }}</span>
        </div>
        <input v-model="inp" type="text" class="bg-emerald-100 mx-2 px-2 flex-auto rounded-full text-emerald-900"
            placeholder="Whatcha' wanna do next?" ref="InputArea" @keyup.enter="CreateToDo"
            @keyup.esc="CancelToDoCreation">
        <button class="bg-emerald-100 px-2 rounded-full text-emerald-900" @click="CreateToDo">Add</button>
        <button class="bg-emerald-100 px-2 rounded-full text-emerald-900" @click="Exchange()">🔄</button>
    </div>
</template>

<script>
    import {
        ref,
        reactive,
        computed
    } from 'vue'
    export default {
        name: "Inputier",
        setup(props,
        context) { // for some reason https://stackoverflow.com/questions/64105088/vue-3-composition-api-data-function

            // used in the text input element
            const InputArea = ref(null) // ref for the text input element
            return {
                inp,
                InputArea
            }
        },
        computed: {
            count() {
                return this.$store.getters.count;
            },
            countDone() {
                return this.$store.getters.doneCount;
            },
            countUndone() {
                return this.$store.getters.undoneCount;
            },
        },
        methods: {

        },
        emits: ["exchangeTodo", "createTodo"]
    }
</script>