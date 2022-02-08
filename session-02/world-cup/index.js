const { program } = require('commander');
const models = require('./models/manage');

program.version('1.0.0').description('World Cup 2018 Russia');

program
  .command('refresh')
  .alias('r')
  .description('Get newest data from server')
  .action(() => {
    models.refreshData();
  });

program
  .command('show:stadiums')
  .alias('std')
  .description('Get stadiums data')
  .action(() => {
    models.getStadiums();
  });

program
  .command('show:tvs')
  .alias('tv')
  .description('Get tv channels data')
  .action(() => {
    models.getTvChannels();
  });

program
  .command('show:teams')
  .alias('t')
  .description('Get teams data')
  .action(() => {
    models.getTeams();
  });

program
  .command('show:group-match')
  .alias('ga')
  .description('Get groups match data')
  .action(() => {
    models.getGroupsMatch();
  });

program
  .command('show:match')
  .alias('g')
  .description('Get match data by group name')
  .action((str, options) => {
    const groupName = options.args[0] || '';
    models.getMatchByGroupName(groupName);
  });

program.parse(process.argv);
