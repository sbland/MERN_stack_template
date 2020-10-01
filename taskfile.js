/* Instructions on task file https://www.npmjs.com/package/tasksfile */

const { sh, cli } = require('tasksfile');
require('dotenv').config();
let { PROJECT_NAME, TAG, PORT } = process.env;
let ROOT = process.env.PWD;

TAG = TAG || 'latest';
PORT = PORT || 5000;
ROOT_VOLUME = ROOT.replace(/([A-Z]):\//, "\/\/$1\/");

const run_wrap = (fn) => (...args) => {
  if (!PROJECT_NAME) throw Error('Ensure PROJECT_NAME is set in .env file')
  fn(...args);
}


function hello_world(options, name="bob"){
  console.log(`hello ${name}`);
}


function rundocker(options) {
  sh(`docker run -it -p ${PORT}:5000 -v ${ROOT_VOLUME}/app/server:/app ${PROJECT_NAME}:${TAG} `);
}

function builddocker(options, mode = 'PRODUCTION', runOnComplete = false) {
  console.log(ROOT_VOLUME)
  console.log(`building ${PROJECT_NAME}`);
  sh(`cd ${ROOT}/app/server && docker build -t ${PROJECT_NAME}:${TAG} .`);
  if (runOnComplete) rundocker()
}


cli({
  hello_world: run_wrap(hello_world),
  builddocker: run_wrap(builddocker),
})