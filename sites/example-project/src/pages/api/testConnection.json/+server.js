import { testConnection } from '@evidence-dev/db-orchestrator'
import { dev } from '$app/environment';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST() {
    let result = await testConnection(dev)

    if(result === "Database Connected"){
        return json(result)
    } else {
        return json(result, { status: 500 })
    }


}