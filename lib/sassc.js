import fs from 'fs'
import sass from 'sass'

/**
 * Compile scss or sass source and write css file
 * @param {string} sourcePath
 * @param {string} outputPath
 */
const compileScss = function ( sourcePath, outputPath ) {
    try {
        const compilation = sass.compile(sourcePath)
        try {
            // write new file or overwrite existing file
            fs.writeFileSync(outputPath, compilation.css)
            return 0;
        }
        catch (err) {
            console.error(err);
            return 10;
        }
    }
    catch (err) {
        console.error(err);
        return 20;
    }
}

export default compileScss
