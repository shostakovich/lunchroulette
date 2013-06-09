module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        staticDir: 'static/',
        staticAssets: 'static/assets/',
        staticStyles: 'static/assets/styles/',

        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= staticStyles %>main.css': '<%= staticStyles %>main.scss'
                }
            },
            dist: {
                files: {
                    '<%= staticStyles %>main.css': '<%= staticStyles %>main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['<%= staticStyles %>**/*.scss'],
                tasks: ['sass:dev']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

};