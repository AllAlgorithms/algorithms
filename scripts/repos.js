/**
 * Just to generate the `repos.json` file with all the repos.
 *
 * @author Carlos Abraham Hernandez (abranhe.com) <abraham@abranhe.com>
 */
'use strict';
const fs = require('fs');
const axios = require('axios');

const getReposList = async () => {
  const endpoint = 'https://api.github.com/orgs/allalgorithms/repos';

  return await axios
    .get(endpoint)
    .then((res) => res.data.map((repo) => repo.name))
    .catch((_) => {});
};

(async () => {
  const repos = await getReposList();
  // TODO: check for `libraries, .github`
  const data = JSON.stringify(repos.filter((repo) => repo !== 'algorithms'));

  fs.writeFile('repos.json', data, 'utf8', (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Done!');
  });
})();
