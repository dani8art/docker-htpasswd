'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-release-github');

    grunt.loadNpmTasks('grunt-banner');

    grunt.loadNpmTasks('grunt-dockerize');

    // Project configuration.
    grunt.initConfig({
        //Load configurations
        pkg: grunt.file.readJSON('package.json'),

        latestReleaseNotes: grunt.file.read('extra/latest-release-notes', {
            encoding: 'utf8'
        }).toString(),

        //Add license notice and latest release notes
        usebanner: {
            readme: {
                options: {
                    position: 'bottom',
                    banner: '## License notice\n\n<%= latestReleaseNotes %>',
                    replace: /##\sLicense\snotice(\s||.)+/g,
                    linebreak: false
                },
                files: {
                    src: ['README.md']
                }
            }
        },

        //Make a new release on github
        //"grunt release" for pacth version
        //"grunt release:minior" for minior version
        //"grunt release:major" for major version
        release: {
            options: {
                changelog: true, //NOT CHANGE
                changelogFromGithub: true, //NOT CHANGE
                githubReleaseBody: 'See [CHANGELOG.md](./CHANGELOG.md) for details.', //NOT CHANGE
                npm: false, //CHANGE TO TRUE IF YOUR PROJECT IS A NPM MODULE 
                //npmtag: true, //default: no tag
                beforeBump: [], // IS NOT READY YET
                afterBump: [], // IS NOT READY YET
                beforeRelease: [], // IS NOT READY YET
                afterRelease: [], // IS NOT READY YET
                updateVars: ['pkg'], //NOT CHANGE
                github: {
                    repo: "dani8art/docker-htpasswd",
                    accessTokenVar: "GITHUB_ACCESS_TOKEN", //SET ENVIRONMENT VARIABLE WITH THIS NAME
                    usernameVar: "GITHUB_USERNAME" //SET ENVIRONMENT VARIABLE WITH THIS NAME
                }
            }
        },

        //USE THIS TASK FOR BUILDING AND PUSHING docker images
        dockerize: {
            'docker-htpasswd-latest': {
                options: {
                    auth: {
                        email: "DOCKER_HUB_EMAIL", //SET ENVIRONMENT VARIABLE WITH THIS NAME
                        username: "DOCKER_HUB_USERNAME", //SET ENVIRONMENT VARIABLE WITH THIS NAME
                        password: "DOCKER_HUB_PASSWORD" //SET ENVIRONMENT VARIABLE WITH THIS NAME
                    },
                    name: 'htpasswd',
                    push: true
                }
            },
            'docker-htpasswd-version': {
                options: {
                    auth: {
                        email: "DOCKER_HUB_EMAIL", //SET ENVIRONMENT VARIABLE WITH THIS NAME
                        username: "DOCKER_HUB_USERNAME", //SET ENVIRONMENT VARIABLE WITH THIS NAME
                        password: "DOCKER_HUB_PASSWORD" //SET ENVIRONMENT VARIABLE WITH THIS NAME
                    },
                    name: 'htpasswd',
                    tag: '<%= pkg.version %>',
                    push: true
                }
            }
        }
    });

    grunt.registerTask('buildOn', function () {
        grunt.config('pkg.buildOn', grunt.template.today("yyyy-mm-dd"));
        grunt.file.write('package.json', JSON.stringify(grunt.config('pkg'), null, 2));
    });

    // Default task(s).
    grunt.registerTask('default', ['usebanner']);

    //BUILD TASK
    grunt.registerTask('build', ['buildOn', 'usebanner', 'dockerize']);

};