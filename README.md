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
- From your WSL container clone the repository using the steps above
- open the folder
- type `code .` to open the current directory in Vscode
- `(Ctrl + Shift + P)`then `Remote-Containers: Reopen Folder in Container... `)


## To mount folder on windows
You should use a wsl environment with the files hosted on the container rather that using a windows volume



### Below does not work
- `docker run -it -v //c/<path here>:/app alpine` 
- from a script yo ucan run
- `docker run -it -v /$(PWD)<path here>:/app alpine`


# Troubleshooting


|error message|link to solution|Quickhelp|
|-------------|----------------|---------|
|WSL2 errors||Ensure you uhave enabled the ubuntu distro in the docker-desktop settings|
||||
