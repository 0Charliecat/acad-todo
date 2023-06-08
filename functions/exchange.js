export function onRequestPost(context) {
    let body = context.request.body
    if (!Array.isArray(body)) body = []
    return new Response(JSON.stringify(
        [
            {  $type: 'todo-v1', $id: `exch${Date.now()}`, title: "exchanged some todos", done: false, },
          ...body
        ]
    ), {
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*'
        }
    })
}
