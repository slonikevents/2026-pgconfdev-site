import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(301, `${base}/code-of-conduct`);
}
