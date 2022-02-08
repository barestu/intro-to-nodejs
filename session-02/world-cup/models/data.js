const fs = require('fs');
const path = require('path');
const db = path.join(__dirname, '..', '/store/db.json');
const http = require('axios').default;

const refreshData = () => {
  http
    .get('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
    .then(res => {
      fs.writeFileSync(db, JSON.stringify(res.data), 'utf-8');
      console.info('');
      console.info('score is refreshed');
    })
    .catch(err => {
      console.info(err.message);
    });
};

const getData = () => {
  return JSON.parse(fs.readFileSync(db, 'utf-8'));
};

/**
 * @param {int} id
 */
const getTeamById = id => {
  const data = getData().teams;
  return data.find(item => item.id == id);
};

/**
 * @param {int} id
 */
const getTeamName = id => {
  const team = getTeamById(id);
  if (team) {
    return team.fifaCode;
  } else {
    return null;
  }
};

/**
 * @param {int} id
 */
const getChannelById = id => {
  const data = getData().tvchannels;
  return data.find(item => item.id == id);
};

/**
 * @param {int} id
 */
const getStadiumById = id => {
  const data = getData().stadiums;
  return data.find(item => item.id == id);
};

/**
 * @param {int} id
 */
const getStadiumName = id => {
  const stadium = getStadiumById(id);
  if (stadium) {
    return stadium.name;
  } else {
    return null;
  }
};

const getGroupDataByName = name => {
  const groups = Object.entries(getData().groups);
  return groups.find(([key, value]) => key == name);
};

module.exports = {
  refreshData,
  getData,
  getTeamById,
  getTeamName,
  getChannelById,
  getStadiumById,
  getStadiumName,
  getGroupDataByName,
};
