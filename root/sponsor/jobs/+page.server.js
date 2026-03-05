import { markdownToHtml, pgeuData } from '$lib/pgeu';

import { SPONSOR_LIST } from '../../sponsors';

export async function load() {
  const data = (await pgeuData('sponsorclaims.json')).sponsors;

  const sponsors = data.bylevel
    .flatMap(({ sponsors }) => sponsors.map(({ name }) => name))
    .map((name) => data.sponsors[name])
    .map(function ({ name, url, level, benefits }) {
      const levelKey = level.toUpperCase();
      const info = SPONSOR_LIST[levelKey].find(({ URL }) => URL == url);
      const sponsor = { name, url, level, logo: info?.LOGO };

      const jobClaims = benefits
        .filter(({ name }) => name == 'Job listing on website')
        .filter(({ confirmed }) => confirmed)
        .map(({ claim }) => markdownToHtml(claim));

      return { sponsor, jobClaims };
    })
    .filter(({ jobClaims }) => jobClaims.length > 0);
  return { sponsors };
}
