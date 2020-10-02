/**
 * Utils to change files in all repositories.
 *
 * @author Carlos Abraham Hernandez (abranhe.com) <abraham@abranhe.com>
 */
'use strict';
const fs = require('fs');
const path = require('path');
const exist = require('dtfe');
const chalk = require('chalk');
const shell = require('shelljs');
const repos = require('../repos.json');

const bufferFile = (file) => {
  return fs.readFileSync(path.join(__dirname, `../templates/${file}.txt`), {
    encoding: 'utf8',
  });
};

const files = [
  {
    template: 'license',
    to: 'license',
  },
  {
    template: 'readme',
    to: 'readme.md',
  },
  {
    template: 'code-of-conduct',
    to: '.github/code-of-conduct.md',
  },
  {
    template: 'contributing',
    to: '.github/contributing.md',
  },
  {
    template: 'code-of-conduct',
    to: '.github/code-of-conduct.md',
  },
  {
    template: 'pull-request-template',
    to: '.github/pull-request-template.md',
  },
];

if (exist('./projects')) {
  shell.cd('./projects');
}

try {
  repos.forEach((repo) => {
    // To create folders, and files individually
    // const global = `${repo}/.github`;
    // shell.mkdir(global);

    if (exist(repo)) {
      files.forEach((file) => {
        const filename = `${repo}/${file.to}`;
        const data = bufferFile(file.template);

        if (!exist(filename)) {
          fs.writeFile(filename, data, 'utf8', (err) => {
            if (err) {
              console.log(err);
              return;
            }

            console.log('Done!');
          });
        }
      });
    }
  });
} catch (_) {
  console.log(chalk.red('Something went wrong cloning the repos.'));
}
