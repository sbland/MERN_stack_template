# MERN_stack_template
This is a template repository for setting up a basic MERN containorized application

# Cloning Repo

# Build steps

 - `npm install`
 - `npm run build-docker`


# Task file
Instructions on task file https://www.npmjs.com/package/tasksfile

To use task file run 
1. `npm install`
2. `npm run task -- <taskname> <...args>`


# Running Docker on windows
1. Install docker desktop
2. Test `Docker run -it alpine`

You can now continue to use docker images...

## Using WSL 2 on windows
https://docs.microsoft.com/en-us/windows/wsl/install-win10
https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers
- Open a terminal for Ubuntu on your WSL (Type Ubuntu into windows search)
- From your WSL container clone the repository using the steps above
- open the directory
- type `code .` to open the current directory in Vscode

Current position:
- Windows
- - Running wsl
- - - Running Ubuntu (Your files are saved here and installs will be here)


Choose one of the below options to run the app in a development environment

### Run via the Node Task
- from a terminal (vscode wsl or Ubuntu wsl)
- Install node js on your ubuntu WSL environment using NVM https://github.com/nvm-sh/nvm
  - follow linux instructions
  - Once NVM is installed install node using command `nvm install 12`
  - check installed by running `node -v`
- run `npm install`


### To open a nodejs container environment
- `(Ctrl + Shift + P)` then `Remote-Containers: Reopen Folder in Container... `
- Select node then version 12
...

You are now in a container in a container! See below diagram

- Windows
- - Running wsl
- - - Running Ubuntu (Your files are saved here)
- - - - Running a nodeJs container (Programs are installed here)
- - - - - Your working environment

# Troubleshooting

|error message|link to solution|Quickhelp|
|-------------|----------------|---------|
|WSL2 errors||Ensure you uhave enabled the ubuntu distro in the docker-desktop settings|
||||
