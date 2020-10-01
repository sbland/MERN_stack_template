/* Instructions on task file https://www.npmjs.com/package/tasksfile */

const { sh, cli } = require('tasksfile');
require('dotenv').config();
let { PROJECT_NAME, TAG, PORT } = process.env;
let ROOT = process.env.PWD;

TAG = TAG || 'latest';
PORT = PORT || 5000;
ROOT_VOLUME = ROOT.replace(/([A-Z]):\//, "\/\/$1\/");
LOG_LOCATION = `${ROOT}/task_logs/`

const run_wrap = (fn) => (...args) => {
  if (!PROJECT_NAME) throw Error('Ensure PROJECT_NAME is set in .env file')
  sh(`mkdir -p ${LOG_LOCATION};`)
  fn(...args);
}


function hello_world(options, name="bob"){
  console.log(`hello ${name}`);
}


function docker_run(options, target) {
  const targets = {
    server: () => sh(`docker run -it -p ${PORT}:5000 -v ${ROOT_VOLUME}/app/server:/node/app ${PROJECT_NAME}_app_server:${TAG}  > ${LOG_LOCATION}/docker_run_app_server.log`, {async: true}),
    client: () => sh(`docker run -it -p 3000:3000 -v ${ROOT_VOLUME}/app/client:/node/app ${PROJECT_NAME}_app_client:${TAG}  > ${LOG_LOCATION}/docker_run_app_client.log`, {async: true}),
  }
  if (target) targets[target]();
  else Object.values(targets).forEach((t) => t())
  // else Object.values(targets).forEach((t) => t());
}

function docker_build(options, target, mode = 'DEVELOPMENT') {
  const targets = {
    server: () => sh(`cd ${ROOT}/app/server && docker build -t ${PROJECT_NAME}_app_server:${TAG} . > ${LOG_LOCATION}/docker_build_app_server.log`, {async: true}),
    client: () => sh(`cd ${ROOT}/app/client && docker build -t ${PROJECT_NAME}_app_client:${TAG} . > ${LOG_LOCATION}/docker_build_app_client.log`, {async: true}),
  }
  if (target) targets[target]();
  else Object.values(targets).forEach((t) => t())
}
function docker_compose_build(options) {
  sh(`cd ${ROOT} && docker-compose build > ${LOG_LOCATION}/docker_build_app_server.log`, {async: true})
}

function docker_compose_run(optons) {
  sh(`cd ${ROOT} && docker-compose up > ${LOG_LOCATION}/docker_build_app_server.log`, {async: true})
}

cli({
  hello_world: run_wrap(hello_world),
  docker_build: run_wrap(docker_build),
  docker_run: run_wrap(docker_run),
  docker_compose_build: run_wrap(docker_compose_run),
  docker_compose_run: run_wrap(docker_compose_run),
})