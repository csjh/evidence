import { json } from '@sveltejs/kit';
import fs from 'fs';

/** @type {import('./$types').RequestHandler} */
export async function GET({params}) {
  const { route } = params;
  let status = []
  let queries

  if (fs.existsSync(`./.evidence-queries/extracted/${route}/queries.json`)) {
    queries = JSON.parse(fs.readFileSync(`./.evidence-queries/extracted/${route}/queries.json`, { throws: false }))
    queries.forEach(query => {
        status.push({id: query.id, status: query.status})
    });
  }   

  return json({ status })
}