'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsSrc: 'lib/src/js',
        cssSrc: 'lib/src/css',

        jshint: {
            options: {
                lastsemic: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                devel: true,
                browser: true,
                undef: true,
                globals: {
                    jQuery: true,
                    $: true,
                    Modernizr: true
                }
            },
            beforeConcat:{
                src: ['src/assets/js/modules/*.js']
            },
            afterConcat: {
                src:['src/assets/js/main.js']
            },
            afterUglify: {
                src:['src/assets/js/main.min.js']
            }
        },

        concat: {
            dist: {
                src: ['src/assets/js/modules/*.js'],
                dest: 'src/assets/js/main.js'
            }
        },

        uglify:{
            options:{
                beautify: false
            },
            dist: {
                src: 'src/assets/js/main.js',
                dest: 'src/assets/js/main.min.js'
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        watch: {
            compass: {
                files: ['src/assets/sass/**/**/*.{scss,sass}'],
                tasks: ['compass']
            },
            jshint:{
                files: ['src/assets/js/modules/*.js'],
                tasks: ['jshint:beforeConcat','concat','jshint:afterConcat','uglify']
            }
        },

        cssmin: {
            minify: {
                files: {
                    'src/assets/css/main.min.css': ['src/assets/css/*.css']
                }
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.registerTask('w', ['watch']);
    grunt.registerTask(
        'c', [
            'jshint:beforeConcat',
            'concat',
            'jshint:afterConcat',
            'uglify',
            'cssmin'
        ]
    );

};