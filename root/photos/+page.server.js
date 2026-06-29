import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { load as parseYaml } from 'js-yaml';

export async function load() {
  const baseDir = 'static/pgconfdev-slideshow';

  // The subdirs we care about are the ones that have a file called 'meta' in them.
  // We parse each such a file as YAML.
  const subdirs = await Promise.all(
    (await readdir(baseDir, { withFileTypes: true }))
    .filter(entry => entry.isDirectory())
    .map(async entry => {
      const hasMeta = await readFile(join(baseDir, entry.name, 'meta'), 'utf-8')
	.then(() => true)
	.catch(() => false);
      return hasMeta ? entry.name : null;
    })
  ).then(results => results.filter(Boolean));

  // Read the 'meta' YAML file for each album into JSON
  const albums = await Promise.all(
    subdirs.map(async (subdir) => {
      const raw = await readFile(join(baseDir, subdir, 'meta'), 'utf-8');
      return { subdir, ...parseYaml(raw) };
    })
  );

  // For each album, expand each of the photos it contains. The properties of
  // each album is flattened so that they're contained in the JSON object for
  // each individual photo. This uses some extra kilobytes more memory, but
  // the code is simpler.
  const photos = albums.flatMap(({ subdir, photos = [], ...albumMeta }) =>
    photos.map(photo => ({ subdir, ...albumMeta, ...photo }))
  );

  return { photos };
}
