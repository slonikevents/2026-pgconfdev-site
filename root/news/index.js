import moment from 'moment';

const data = import.meta.glob('./*.item.{mdsvex,svelte}', { eager: true });

// Map of id to an object with properties { Component, title, description, and
// date }. The id of a news item is its base name with the '.item.svelte'
// extension removed, e.g. 'some-news' is the id of '../some-news.item.svelte'.
// The date is a MomentJS object.
//
// The entire map is sorted in reverse chronological order by date.
export const index = new Map(
  Object.entries(data)
    .map(([name, item]) => {
      const id = name.replace(/^.*\/(.*)\.item\.(mdsvex|svelte)$/, '$1');
      const { default: Component, metadata } = item;

      const { title, description, date } = metadata;
      const momentDate = date !== undefined ? moment.utc(date) : undefined;
      return [id, { Component, title, description, date: momentDate }];
    })
    // .filter(([id]) => id != 'sample' && !id.startsWith('sample-'))
    .filter(([, { Component, title, description, date }]) => {
      if (Component === undefined) return false;
      if (title === undefined) return false;
      if (description === undefined) return false;
      if (date === undefined) return false;
      return true;
    })
    .sort(([, a], [, b]) => b.date.diff(a.date, 'seconds')),
);
