import getRandomInt from 'ansible/utils/get-random-int';

export default function(server) {

  /* ------------------------------ *\
   *  Collection Creation           *
  \* ------------------------------ */
  let users         = server.createList('user', 10);
  let organizations = server.createList('organization', 10);
  let votes         = server.createList('vote', 50);
  let tags          = server.createList('tag', 10);


  /* ------------------------------ *\
   *  Users                         *
  \* ------------------------------ */


  /* ------------------------------ *\
   *  Features                      *
  \* ------------------------------ */
  Array.from(Array(10).keys()).map(() => {
    server.create('feature', { creatorId: users[getRandomInt(0, users.length - 1)].id, tagIds: [tags[getRandomInt(0, tags.length - 1)].id] });
  });
}
