# MERN_stack_template
This is a template repository for setting up a basic MERN containorized application

# Cloning Repo
`git clone <repourl>`


# Running Docker on windows
1. Follow these steps to setup WSL 2.0
1. Install docker desktop
2. Test `Docker run -it alpine`

You can now continue to use docker images...

## Using WSL 2 on windows
Follow the steps in the below links
- https://docs.microsoft.com/en-us/windows/wsl/install-win10
- https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers
- Ensure yo uenable your Ubuntu install in docker-desktop

Then follow the steps below
- Open a terminal for Ubuntu on your WSL (Type Ubuntu into windows search)
- From your WSL container clone the repository using the steps above (Cloning Repo)
- open the directory
- type `code .` to open the current directory in Vscode

Current position:
- Windows
- - Running wsl
- - - Running Ubuntu (Your files are saved here and installs will be here)


Choose one of the below options to run the app in a development environment

### Run via the Node Task and docker
- from a terminal (vscode wsl or Ubuntu wsl)
- Install node js on your ubuntu WSL environment using NVM https://github.com/nvm-sh/nvm
  - follow linux instructions
  - Once NVM is installed install node using command `nvm install 12`
  - check installed by running `node -v`
- run `npm install`

Instructions on task file https://www.npmjs.com/package/tasksfile

To build and run the app:
- `npm run task docker_compose_build`
- `nom run task docker_compose_run`

### To open a nodejs container environment (NOT TESTED)
- `(Ctrl + Shift + P)` then `Remote-Containers: Reopen Folder in Container... `
- Select node then version 12
...

You are now in a container in a container! See below diagram

- Windows
- - Running wsl
- - - Running Ubuntu (Your files are saved here)
- - - - Running a nodeJs container (Programs are installed here)
- - - - - Your working environment


# Installing additional dependencies
If you are using the docker setup above to install additional dependencies you will need to install them locally to add to the package.json file then rebuild the container using `npm run task docker_build <client|server>`

# Troubleshooting

|error message|link to solution|Quickhelp|
|-------------|----------------|---------|
|WSL2 errors||Ensure you uhave enabled the ubuntu distro in the docker-desktop settings|
||||
