//
// sponsorlevels.json comes from the conference system
// and can be refeshed with
// https://www.pgevents.ca/events/admin/pgconfdev2026/tokendata/$TOKEN/sponsorlevels.json
// where TOKEN is an access token setup at https://www.pgevents.ca/events/admin/pgconfdev2026/accesstokens/
import sponsorlevels from './sponsorlevels.json';
export function load() {
  return sponsorlevels;
}
