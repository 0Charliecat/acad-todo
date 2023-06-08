export function onRequestPost(context) {
    let body = context.body
    if (!Array.isArray(context.body)) body = []
    return new Response(JSON.stringify(
        [
            {  $type: 'todo-v1', $id: `init${Date.now()}-2`, title: "exchanged some todos", done: false, },
          ...body
        ]
    ), {
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*'
        }
    })
}
