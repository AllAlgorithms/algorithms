/**
 * Git add all the repositories.
 *
 * @author Carlos Abraham Hernandez (abranhe.com) <abraham@abranhe.com>
 */
'use strict';
const exist = require('dtfe');
const chalk = require('chalk');
const shell = require('shelljs');
const commandExists = require('command-exists');
const repos = require('../repos.json');

const commitMessage = 'refactofing!';

commandExists('git')
  .then(() => {
    if (!exist('./projects')) {
      shell.mkdir('./projects');
    }

    shell.cd('./projects');
    try {
      repos.forEach((repo) => {
        if (exist(repo)) {
          shell.cd(repo);
          shell.exec(`git ci -m '${commitMessage}'`);
          shell.cd('../');
        }
      });
    } catch (_) {
      console.log(chalk.red('Something went wrong.'));
    }
  })
  .catch((_) => {
    console.log(chalk.red(`'git' is required!`));
  });
