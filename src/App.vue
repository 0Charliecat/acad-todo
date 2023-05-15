<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, provide } from 'vue';

const StuffToDo = ref([
  {  $type: 'todo-v1', $id: 'todo-a1-1', title: "Otestuj ma!",                                                      done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-1', title: "sprav si novy vue projekt",                                        done: true,  },
  {  $type: 'todo-v1', $id: 'todo-a1-2', title: "daj si tam input na novu todo polozku",                            done: true,  },
  {  $type: 'todo-v1', $id: 'todo-a1-3', title: "input si hookni na click, aby pridal do zoznamu v data novy item", done: true,  },
  {  $type: 'todo-v1', $id: 'todo-a1-4', title: "zobraz itemy",                                                     done: true,  },
  {  $type: 'todo-v1', $id: 'todo-a1-5', title: "itemom pridaj deleted atribut",                                    done: true,  },
  {  $type: 'todo-v1', $id: 'todo-a1-6', title: "ked je deleted, tak cez v-if sa schova",                           done: true,  },
  {  $type: 'todo-v1', $id: 'todo-a1-7', title: "sprav druhu pagu kde budu zmazane veci",                           done: true,  },
])

const InputArea = ref(null)

function UpdateToDo(id, method, attr, $event) {
  console.log(`UpdateToDo:`, id, method, attr, $event)

  if (method === 'flip') {
    StuffToDo.value = StuffToDo.value.map(e=> { 
      if (e.$id===id) {
        e.done = !e.done;
      }
      return e
    })
  }
}

function CreateToDo() {
  console.log('CreateToDo:', InputArea.value.value)
  StuffToDo.value.push({ $type: 'todo-v1', $id: `c${Date.now()}`, title: InputArea.value.value, done: false,  })
  InputArea.value.value = ''
}

provide('ToDos', StuffToDo);
provide('UpdateToDo', UpdateToDo);
</script>

<template>
  <header class="flex m-5 mb-2 border-b-2 border-b-emerald-400">
    <div>
      <h1>☑️ The acad<span class="font-bold">ToDo App</span></h1>
    </div>
    <div class="flex-auto text-right">
      <nav>
        <RouterLink to="/">Stuff To-Do</RouterLink>
        •
        <RouterLink to="/deleted">Stuff Done</RouterLink>
      </nav>
    </div>
  </header>

  <div class="flex mx-5 mb-2">
    <div>
      <span>🔲 {{ StuffToDo.length }} • </span>
    </div>
    <input type="text" class="bg-emerald-100 mx-2 px-2 flex-auto rounded-full text-emerald-900" placeholder="Your ToDo Title" ref="InputArea">
    <button class="bg-emerald-100 px-2 rounded-full text-emerald-900" @click="CreateToDo">Add</button>
  </div>

  <RouterView />
</template>