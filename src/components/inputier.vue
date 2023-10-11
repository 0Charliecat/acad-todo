<template>
    <div class="flex mb-2">
        <div>
            <span>{{ [ `⭕️ ${countUndone}`, `❌ ${countDone}`, `🔲 ${count}`, ].join(' • ') }}</span>
        </div>
        <input v-model="inp" type="text" class="bg-emerald-100 mx-2 px-2 flex-auto rounded-full text-emerald-900"
            placeholder="Whatcha' wanna do next?" ref="InputArea" @keyup.enter="CreateToDo"
            @keyup.esc="CancelToDoCreation">
        <button class="bg-emerald-100 px-2 rounded-full text-emerald-900" @click="CreateToDo">Add</button>
        <button class="bg-emerald-100 px-2 rounded-full text-emerald-900" @click="Exchange">🔄</button>
    </div>
</template>

<script>

    export default {
        name: "Inputier",
        emits: ["exchangeTodo", "createTodo"],
        methods: {
            CreateToDo() {
                if (this.inp.value.length === 0) return null;
                this.$emit("createTodo", {
                    $type: 'todo-v1',
                    $id: `c${Date.now()}`,
                    title: this.inp.value,
                    done: false,
                });
                this.inp.value = "";
            },
            Exchange() {
                this.$emit("exchangeTodo")
            },
            CancelToDoCreation() {
                this.inp.value = "";
            }

        },
        data() {
            return {
                inp: null
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
    };
</script>