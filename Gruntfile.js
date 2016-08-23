/*
    Copyright
    Developers: Steven Granados
                Anthony Vega
*/
'use strict';
module.exports = function (grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    // Configurable paths
    var config = {
            app: 'app',
            dist: 'dist'
        };

    grunt.initConfig({

        // Project settings
        config: config,

        //Get package meta data
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            min: {
                files: {
                    '<%= config.dist %>/js/script.js': ['<%= config.app %>/js/script.js']
                }
            }
        },
        compass: {
            dev: {
                options: {
                    outputStyle: 'expanded',
                    noLineComments: true,
					sassDir: '<%= config.app %>/sass',
					cssDir: '<%= config.dist %>/css'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed',
                    noLineComments: false,
					sassDir: '<%= config.app %>/sass',
					cssDir: '<%= config.dist %>/css'
                }
            }
        },
        express: {
            options: {
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        watch: {
            js: {
                files: ['<%= config.app %>/js/{,*/}*.js'],
                tasks: ['jshint', 'copy:scripts'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            css: {
                files: '<%= config.app %>/sass/{,*/}*.{scss,sass}',
                tasks: ['compass:dev', 'copy:styles'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: ['<%= config.app %>/views/{,*/}*.*'],
                tasks: ['compile-handlebars'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            images: {
                files: '<%= config.app %>/img/{,*/}*.*',
                tasks: ['copy:images'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            videos: {
                files: '<%= config.app %>/video/{,*/}*.*',
                tasks: ['copy:video'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            express: {
                files:  [ 'server.js', '!**/node_modules/**', '!Gruntfile.js' ],
                tasks:  [ 'express:dev' ],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                '<%= config.app %>/js/{,*/}*.js',
                '!<%= config.app %>/js/vendor/*'
            ]
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.*',
                        'fonts/{,*/}*.*',
                        '{css,js}/vendor/{,*/}**'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '.tmp/styles',
                dest: '<%= config.dist %>/css/',
                src: '{,*/}*.css'
            },
            scripts: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>',
                dest: '<%= config.dist %>',
                src: 'js/*{.js,.json}'
            },
            images: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/img/',
                dest: '<%= config.dist %>/img/',
                src: '{,*/}*.*'
            },
            videos: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/video/',
                dest: '<%= config.dist %>/video/',
                src: '{,*/}*.*'
            }
        },
        'compile-handlebars': {
            globbedTemplateAndOutput: {
                template: '<%= config.app %>/views/*.html',
                partials: '<%= config.app %>/views/partials/*.html',
                templateData: {},
                output: '<%= config.dist %>/*.html'
            }
        }
    });
    grunt.registerTask('default', 'Restart the server.', [
        'clean',
        'compass:dev',
        'compile-handlebars',
        'jshint',
        'copy',
        'express:dev',
        'watch'
    ]);
    // // Restart
    grunt.registerTask('restart', 'Restart the server.', [
        'clean',
        'compass:dev',
        'compile-handlebars',
        'jshint',
        'copy',
        'express:dev',
        'watch'
    ]);

    grunt.registerTask('dist', 'Start dist environment.', [
        'clean',
        'compass:dist',
        'compile-handlebars',
        'jshint',
        'copy',
        'uglify',
        'express:dev',
        'watch'
    ]);

    grunt.registerTask('dev', 'Start dev environment', [
        'clean',
        'compass:dev',
        'compile-handlebars',
        'jshint',
        'copy',
        'express:dev',
        'watch'
    ]);

    grunt.registerTask('jenkinsRelease', 'Prepares dist for Jenkins release.', [
        'clean',
        'compass:dev',
        'compile-handlebars',
        'jshint',
        'copy'
    ]);
};
