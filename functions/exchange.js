export function onRequestOptions() {
    return new Response('POST', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
        }
    })
}

export async function onRequestPost(context) {
    let body = await context.request.json();
    console.log(body)
    if (!Array.isArray(body)) body = []
    return new Response(JSON.stringify(
        [
            {  $type: 'todo-v1', $id: `exch${Date.now()}`, title: "exchanged some todos", done: false, },
          ...body
        ]
    ), {
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
        }
    })
}
