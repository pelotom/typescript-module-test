module.exports = function(grunt) {
  // configure tasks
  grunt.initConfig({
    ts: {
      lib: {                                 // a particular target
        src: ["src/*.ts"],        // The source typescript files, http://gruntjs.com/configuring-tasks#files
        // html: ["test/work/**/*.tpl.html"], // The source html files, https://github.com/basarat/grunt-ts#html-2-typescript-support
        // reference: "./test/reference.ts",  // If specified, generate this file that you can use for your reference management
        out: 'foo.js',                // If specified, generate an out.js file which is the merged js file
        // outDir: 'test/outputdirectory',    // If specified, the generate javascript files are placed here. Only works if out is not specified
        watch: 'src',                     // If specified, watches this directory for changes, and re-runs the current target
        options: {                         // use to override the default options, http://gruntjs.com/configuring-tasks#options
          target: 'es3',                 // 'es3' (default) | 'es5'
          // module: 'commonjs',            // 'amd' (default) | 'commonjs'
          sourceMap: true,               // true (default) | false
          declaration: true,            // true | false (default)
          comments: true                // true | false (default)
        },
      },
      client: {                                 // a particular target
        src: ["client-src/*.ts"],        // The source typescript files, http://gruntjs.com/configuring-tasks#files
        // html: ["test/work/**/*.tpl.html"], // The source html files, https://github.com/basarat/grunt-ts#html-2-typescript-support
        reference: "client-src/reference.ts",  // If specified, generate this file that you can use for your reference management
        // out: 'foo.js',                // If specified, generate an out.js file which is the merged js file
        outDir: 'client-build',    // If specified, the generate javascript files are placed here. Only works if out is not specified
        watch: 'client-src',                     // If specified, watches this directory for changes, and re-runs the current target
        // amdloader: 'client-build/amdloader.js',
        options: {                         // use to override the default options, http://gruntjs.com/configuring-tasks#options
          target: 'es3',                 // 'es3' (default) | 'es5'
          module: 'amd',            // 'amd' (default) | 'commonjs'
          sourceMap: true,               // true (default) | false
          // declaration: true,            // true | false (default)
          comments: true                // true | false (default)
        },
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks("grunt-ts");
}