<script setup>
  const router = inject('router')
</script>

<template>
  <div class="mx-2 md:mx-5 mt-5">
    <header class="flex mb-2 border-b-2 border-b-emerald-400">
      <div>
        <h @click="router.push('/todos')">☑️ The acad<span class="font-bold">ToDo App</span></h>
      </div>
      <div class="flex-auto text-right">
        <nav>
          <RouterLink to="/todos">➿ Stuff To-Do</RouterLink>
          •
          <RouterLink to="/deleted">✔ Stuff Done</RouterLink>

          <a href="https://github.com/0Charliecat/acad-todo" class="md:inline hidden githublink"
            title="Icon from Octoicons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="inline mb-1"
              width="16" height="16">
              <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
              </path>
            </svg></a>
        </nav>
      </div>
    </header>

    <Inputier v-on:exchange="Exchange" v-on:create-todo="CreateToDo" ></Inputier> 

    <RouterView />
  </div>
</template>

<script>
  import {
    inject
  } from 'vue'
  import {
    RouterLink,
    RouterView
  } from 'vue-router'
  import Inputier from "./components/inputier.vue"

  export default {
    components: {
      Inputier,
      RouterLink,
      RouterView
    },
    computed: {
      count() {
        return this.$store.getters.count
      },

      countDone() {
        return this.$store.getters.doneCount
      },
      countUndone() {
        return this.$store.getters.undoneCount
      },
    },
    data() {
      console.log(this)
      return {
        data: this.$store.state.todos,
      }
    },
    methods: {
      CreateToDo(data) {
        console.log(data)
        console.log(this.$store) // ... this says that `this.$store.commit` is a func ... 
        // > TypeError: this.$store.commit is not a function. (In 'this.$store.commit("put", data)', 'this.$store.commit' is undefined)
        this.$store.commit("put", data)

        (async () => {
          let ServerResponse = await this.axios.post(`https://acadtodo.charliecat.space/update`, {
            body: data
          })
        })()
      },
      CancelToDoCreation() {
        InputForToDo.value = ""
      },
      Exchange() {
        this.axios.post(`https://acadtodo.charliecat.space/exchange`, {
          body: this.data
        }).then(ServerResponse => {
          if (Array.isArray(ServerResponse.data)) {
            this.$store.commit("populate", ServerResponse.data)
          }
          console.log("Data exchange with the server", ServerResponse.data)
        })

        return;
      }
    },
    mounted() {
      const router = inject('router')
      if (this.data.length === 0) {
        this.axios.get(`https://acadtodo.charliecat.space/list`).then((result) => {
          this.$store.commit("populate", result.data)
          return;
        })

      }
    },
    inject: ['router']
  }
</script>


<style>
  .githublink::before {
    content: " • "
  }

  .active {
    color: rgb(6 78 59);
    font: bold;
  }

  .active::before {
    content: '['
  }

  .active::after {
    content: ']'
  }
</style>