/**
 * Just to generate the `repos.json` file with all the repos.
 *
 * @author Carlos Abraham Hernandez (abranhe.com) <abraham@abranhe.com>
 */
'use strict';
const fs = require('fs');
const axios = require('axios');
const chalk = require('chalk');

const getReposList = async () => {
  const endpoint = 'https://api.github.com/orgs/allalgorithms/repos';

  return await axios
    .get(endpoint, { params: { per_page: 100 } })
    .then((res) => res.data.map((repo) => repo.name))
    .catch((_) => {});
};

(async () => {
  const repos = await getReposList();
  const ignore = ['algorithms', '.github'];
  const data = repos.filter((repo) => !ignore.includes(repo));

  fs.writeFile('repos.json', JSON.stringify(data, null, 4), 'utf8', (err) => {
    if (err) {
      console.log(chalk.red(`Error: ${err}`));
      return;
    }

    console.log(chalk.green('Done!'));
  });
})();
