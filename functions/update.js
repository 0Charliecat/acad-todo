export function onRequestPost(context) {
    return new Response(JSON.stringify({ status: 'ok' }), {
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
        }
    })
}

export function onRequestOptions(context) {
    return new Response("POST", {
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
        }
    })
}