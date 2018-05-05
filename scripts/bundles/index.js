const bundles = [

    {
        /********* AETHON */
        input: {
            input: "packages/aethon/index.js"
        },
        output: {
            file: 'packages/aethon/dist/aethon.js',
            format: 'umd',
            name: 'Aethon',
            globals: 'AethonShared'
        }
    },
    {
        /********** AETHON-DOM */
        input: {
            input: "packages/aethon-dom/index.js"
        },
        output: {
            file: 'packages/aethon-dom/dist/aethon-dom.js',
            format: 'umd',
            name: 'AethonDOM',
            globals: 'AethonShared'
        }
    },
    {
        /*********** AETHON-SHARED */
        input: {
            input: "packages/aethon-shared/index.js"
        },
        output: {
            file: 'packages/aethon-shared/dist/aethon-shared.js',
            format: 'umd',
            name: 'AethonShared',
        }
    }
]
module.exports = bundles