export function onRequestPost(context) {
    return new Response(JSON.stringify({ status: 'ok' }), {
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
        }
    })
}