export function onRequest(context) {
    return new Response().json([
        {  $type: 'todo-v1', $id: `init${Date.now()}-1`, title: "Otestuj ma!", done: false, },
        {  $type: 'todo-v1', $id: `init${Date.now()}-2`, title: "fetch cez CF Functions", done: false, },
        {  $type: 'todo-v1', $id: `init${Date.now()}-3`, title: "ahoj!", done: false, },
    ])
}