import { db } from '$lib/server/db'
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    const posts = await db.query.posts.findMany();
    return json(posts)
}