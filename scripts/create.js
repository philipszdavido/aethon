let fs = require("fs");
let path = require('path')

function run() {
    let args = process.argv

    if (args.length < 3) {
        throw new Error('Directory name must be specified')
    }
    let dir = args[2]

    logDirFile(dir,'dir')
    createDir(dir)
}

function createDir(dirName) {
    let curr = './packages/' + dirName
    dirName = process.cwd() + '\\packages\\' + dirName
    if (!fs.existsSync(dirName)) {
        logDirFile(dirName,'dir')
        fs.mkdirSync(dirName)
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
        //displayPackage()
        createDirsAndIndex()
    })
}

function createDirsAndIndex() {
    logDirFile('src','dir')
    fs.mkdirSync('src')

    process.chdir('src')

    logDirFile('src/index.js','file')
    fs.writeFileSync('index.js')
    process.chdir('../')
    
    logDirFile('index.js','file')
    fs.writeFileSync('index.js')
}

function displayPackage(params) {
    if (fs.existsSync('./package.json')) {
        //const fielCont = fs.readFileSync('./package.json')
            //console.log(fielCont)
            //console.log(require('package.json').version)
    }
}
function logDirFile(dirFile, type) {
    switch(type){
        case 'file':
            console.log(`[creating file] ${dirFile}`)
            break;
        case 'dir':
            console.log(`[creating dir] ${dirFile}`)
            break;
        default:
            break;
    }
}
run()