// use custom extension for the output file
module.exports = {
    main: {
        options: {
            archive: 'app.zip'
        },
        files: [
            {  // makes all src relative to cwd
                expand: true,
                cwd: 'dist/',
                src: ['**'],
                dest: './'
            }
        ]
    }
}