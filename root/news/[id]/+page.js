import { error } from '@sveltejs/kit';
import { index } from '$news';

export const load = async ({ params: { id } }) => index.get(id) ?? error(404);
