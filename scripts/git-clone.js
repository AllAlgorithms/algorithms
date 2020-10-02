/**
 * Clone all the repositories.
 *
 * @author Carlos Abraham Hernandez (abranhe.com) <abraham@abranhe.com>
 */
'use strict';
const exist = require('dtfe');
const chalk = require('chalk');
const shell = require('shelljs');
const commandExists = require('command-exists');
const repos = require('../repos.json');

commandExists('git')
  .then(() => {
    if (!exist('./projects')) {
      shell.mkdir('./projects');
    }

    shell.cd('./projects');
    try {
      repos.forEach((repo) => {
        if (!exist(repo)) {
          shell.exec(`git clone https://github.com/allalgorithms/${repo}.git`);
        }
      });
    } catch (_) {
      console.log(chalk.red('Something went wrong cloning the repos.'));
    }
  })
  .catch((_) => {
    console.log(chalk.red(`'git' is required!`));
  });
