<script setup>
import { RouterLink, RouterView } from 'vue-router'

const StuffToDo = [
  {  $type: 'todo-v1', $id: 'todo-a1-1', title: "sprav si novy vue projekt",                                        done: true,  },
  {  $type: 'todo-v1', $id: 'todo-a1-2', title: "daj si tam input na novu todo polozku",                            done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-3', title: "input si hookni na click, aby pridal do zoznamu v data novy item", done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-4', title: "zobraz itemy",                                                     done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-5', title: "itemom pridaj deleted atribut",                                    done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-6', title: "ked je deleted, tak cez v-if sa schova",                           done: false, },
  {  $type: 'todo-v1', $id: 'todo-a1-7', title: "sprav druhu pagu kde budu zmazane veci",                           done: false, },
]
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>