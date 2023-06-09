import { writeSync } from 'node:fs';


export async function load(url, context, next) {
  // This check is needed to make sure that we don't prevent the
  // resolution from follow-up loaders. It wouldn't be a problem
  // in real life because loaders aren't supposed to break the
  // resolution, but the ones used in our tests do, for convenience.
  if (url === 'node:fs' || url.includes('loader')) {
    return next(url);
  }

  writeSync(1, 'load passthru' + '\n'); // Signal that this specific hook ran
  return next(url);
}
