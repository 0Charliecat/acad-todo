<template>
    <div class="flex mb-2">
        <div>
          <span>{{ [ `⭕️ ${countUndone}`, `❌ ${countDone}`, `🔲 ${count}`, ].join(' • ') }}</span>
        </div>
        <input v-model="inp" type="text" class="bg-emerald-100 mx-2 px-2 flex-auto rounded-full text-emerald-900"
          placeholder="Whatcha' wanna do next?" ref="InputArea" @keyup.enter="CreateToDo" @keyup.esc="CancelToDoCreation">
        <button class="bg-emerald-100 px-2 rounded-full text-emerald-900" @click="CreateToDo">Add</button>
        <button class="bg-emerald-100 px-2 rounded-full text-emerald-900" @click="Exchange()">🔄</button>
    </div>
</template>

<script>

    export default {
        name: "Inputier",
        data: {
            inp: "" // used in the text input element
        },
        methods: {
            CancelToDoCreation: () => {
                this.inp = ""
            },
            CreateToDo: () => {
                this.$emit("create", {
                    $type: 'todo-v1',
                    $id: `c${Date.now()}`,
                    title: this.inp,
                    done: false,
                })
            },
            Exchange: () => {
                this.$emit("exchange")
            }
        },
        emits: {
            exchange: () => {return true;},
            create: (data) => {
                const isTypeCorrect  = Boolean( data.$type === "todo-v1"        )
                const isIdAString    = Boolean( typeof(data.$id) === "string"   )
                const isTitleAString = Boolean( typeof(data.title) === "string" )
                const isDoneABoolean = Boolean( typeof(data.done) === "boolean" )

                if (isTypeCorrect && isIdAString && isTitleAString && isDoneABoolean) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

</script>