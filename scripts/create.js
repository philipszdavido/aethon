let fs = require("fs");

function run() {
    let args = process.argv

    if (args.length < 3) {
        throw new Error('Directory name must be specified')
    }
    let dir = args[2]
    createDir(dir)
}

function createDir(dirName) {
    let curr = './packages/' + dirName
    dirName = process.cwd() + '\\packages\\' + dirName
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName)

        //console.log(curr)
        process.chdir(curr)
        npmInit()
    } else {
        throw new Error('Directory already exists.')
    }
}

function npmInit() {
    const { exec } = require('child_process');
    const child = exec('npm init -y')
    child.addListener('exit', () => {
        console.log('done')
        displayPackage()
    })
}

function displayPackage(params) {
    console.log(require('./package.json').version)
}
run()

//console.log(require('./../package.json').version)