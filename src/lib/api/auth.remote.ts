import { form, getRequestEvent, query } from "$app/server"
import { auth } from "$lib/server/auth";
import { loginSchema, signupSchema } from "$lib/validation/auth";
import { redirect } from "@sveltejs/kit";

export const signup = form(signupSchema, async (user) => {
    await auth.api.signUpEmail({ body: user });
    redirect(307, '/admin');
});

export const login = form(loginSchema, async (credentials) => {
    const { request } = getRequestEvent();
    await auth.api.signInEmail({ body: credentials, headers: request.headers });
    redirect(303, '/admin');
});

export const logout = form(async () => {
    const { request } = getRequestEvent();
    await auth.api.signOut({ headers: request.headers });
    redirect(303, '/');
});

export const getUser = query(async () => {
    const { locals } = getRequestEvent();

    if (!locals.user) {
        redirect(307, '/auth/login');
    }

    return locals.user;
});