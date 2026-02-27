import { form, getRequestEvent, query } from '$app/server';
import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema'
import { redirect } from '@sveltejs/kit';
import * as v from 'valibot'
import { eq } from 'drizzle-orm';

import { createPostSchema, editPostSchema } from '$lib/validation/auth';

function requireAuth() {
    const { locals } = getRequestEvent();

    if (!locals.user) {
        throw redirect(307, '/auth/login');
    }

    return locals.user;
}

export const getAllPosts = query(async () => db.query.posts.findMany())

export const getPostBySlug = query(v.string(), async (slug) => db.query.posts.findFirst({
    where: (p, {eq}) => eq(p.slug, slug)
}))

export const createPost = form(createPostSchema, async ({title, content}) => {
    const user = requireAuth();
    if (user.role !== 'admin') {
        throw redirect(302, '/')
    }
    const slug = title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    await db.insert(posts).values({
        title,
        slug,
        content,
        authorId: user.id
    });
    throw redirect(303, '/admin')
})

export const editPost = form(editPostSchema, async ({id, title, content}) => {
    const user = requireAuth();
    if (user.role !== 'admin') {
        throw redirect(302, '/')
    }
    const slug = title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    await db.update(posts).set({
        title,
        slug,
        content,
    }).where(eq(posts.id, id));
    throw redirect(303, `/${slug}`)
})

// export const getAuthorPosts = query(async () => {
//     const user = requireAuth();
//     const posts = await db.select().from(table.posts).where(eq(table.posts.authorId, user.id));
//     return posts;
// })

// export const getPosts = query(async () => {
//     const posts = await db.select().from(table.posts);
//     return posts;
// })

// export const createPost = form(createPostSchema, async (post) => {
//     const user = requireAuth();
//     post.id = "fsaasffasfa";

//     await db.insert(table.posts).values({ ...post, authorId: user.id  });
//     throw redirect(303, `/admin/edit/${post.slug}`);
// })

// export const updatePost = form(updatePostSchema, async ({ id, title, slug, content}) => {
//     await db.update(table.posts).set({ title, slug, content }).where(eq(table.posts.id, id));
// })

// export const removePost = form(updatePostSchema, async ({ id }) => {
//     await db.delete(table.posts).where(eq(table.posts.id, id));
//     throw redirect(303, `/admin`);
// })