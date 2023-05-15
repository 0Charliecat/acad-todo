<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, provide } from 'vue';

const StuffToDo = ref([
  {  $type: 'todo-v1', $id: 'todo-a1-1', title: "sprav si novy vue projekt",                                        done: true,  },
  {  $type: 'todo-v1', $id: 'todo-a1-2', title: "daj si tam input na novu todo polozku",                            done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-3', title: "input si hookni na click, aby pridal do zoznamu v data novy item", done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-4', title: "zobraz itemy",                                                     done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-5', title: "itemom pridaj deleted atribut",                                    done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-6', title: "ked je deleted, tak cez v-if sa schova",                           done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-7', title: "sprav druhu pagu kde budu zmazane veci",                           done: false, },
])

function UpdateToDo(id, method, attr) {
  if (method === 'remove') {
    StuffToDo.value.find(e=>e.$id===id)
  }
}

provide('ToDos', StuffToDo);
provide('UpdateToDo', UpdateToDo);
</script>

<template>
  <header class="flex m-5 border-b-2 border-b-emerald-400">
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

  <RouterView />
</template>