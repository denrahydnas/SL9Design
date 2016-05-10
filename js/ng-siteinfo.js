'use strict';

var app = angular.module("myApp", []);
                         
app.controller('MainController', ['$scope', function ($scope) { 
    
    $scope.headshot = "../img/headshot2.jpg";
    
    $scope.aboutme1 = "I've had a great career in the arts - working behind the scenes as a theatre technician and  production manager. I've been an electrician, a touring technical manager and a flying director, rigging aerial systems and choreographing Peter Pan productions around the world. I love mixing creative thinking with practical solutions and coming up with new ways of resolving problems."; 
    
    $scope.aboutme2 = "These days I'm excited to learn all I can about web design and development. I started experimenting with web design while coordinating content for my company's mobile redesign.  I was surprised by how much I enjoyed working on the project!  I took a few online courses and then was lucky to discover the Code Louisville program - a 12 week coding bootcamp offered through the Louisville Free Public Library and Kentuckiana Works.  I completed the Front-End dev cohort and immediately signed up for the PHP course, beginning this summer.  Now, I'm hooked and can't wait to learn more.  One of my next projects is a site for the Performing Arts Collaborative, a group of local theatre technicians, administrators and designers who are driven to educate and involve area students in local arts opportunities. I'm thrilled that they asked me to build their site, and I hope to continue my path into software development while maintaining my ties to Louisville's arts community."; 
    
    $scope.aboutme3 = "My theatre background has given me unique skills that are applicable to many different fields.  I'm a skilled project manager who knows how manage my time to meet crucial deadlines, because there are no deadlines quite like Opening Night.  Coordinating load-ins and figuring out flying scenarios is creative problem-solving on a giant scale.  I've directed crews of varying levels of experience through projects large and small, and I've worked closely with designers and directors to make their creations come to life.  I'd love to put my skills to work for you."; 
   
    $scope.education = ["B.A., University of Missouri-Columbia", 
                        "Exchange student University of Ulster-Coleraine",
                        "ETCP certified arena rigger", 
                        "University of Louisvile Online, Illustrator CS6, March 2015", 
                        "Code Louisville Front-End Development, completed March 2016"
                        "Treehouse.com: Front-End Development and Web Design tracks",
                        "Code Louisville PHP Development, starting May 2016",
                        "DesignLab UX Research and Strategy course, May 2016"];
    
    $scope.languages = ["HTML & CSS",
                        "JavaScript & JQuery",
                        "Angular.js",
                        "Wordpress & Shopify",
                        "Adobe Illustrator, InDesign, Photoshop",
                        "Google Docs, Developer Tools, Analytics",
                        "Microsoft Office Suite",
                        "French and Korean"];
        
    $scope.projects = [{
                    title: 'Code Louisville Project: Louisville Rotaract',
                    link: "https://github.com/Denrahydnas/CodeLouisvilleProject",
                    image: "../img/rotaract.JPG",
                    blurb: "I created a site for Louisville Rotaract as part of my Code Louisville Front-End Development course. Rotaract is a partner of Rotary International, and the Louisville branch is working to attract new membership. I took all of the photos of Louisville featured in the page headers and edited them with Photoshop. I added interactive elements using JQuery and Angular.js. The next step is to adapt my project design into a working site with a Wordpress CMS that the club can update and maintain themselves. Please click on the image to review my code on Github."
                },
                {
                    title: "ZFX Flying Effects harness manuals",
                    link: "http://www.zfxflying.com/harnesses/" ,
                    image: "../img/harnesses.JPG",
                    blurb: "I created ZFX flying harness manuals for publication and inclusion with all harness sales and rentals. I laid out the outlines for structure and wrote all of the content. I worked to improve my skills with Adobe Illustrator in order to create the illustrations for the project.  I edited all changes and worked closely with Mindsalt Design on the art direction. Click the photo above to view all inpection sheets and manuals."
                },
                {
                    title: 'Louisville Ballet and Louisville Orchestra spring collaboration',
                    link: '',
                    image: '',
                    blurb: "The first two pieces in the presentation required the full orchestra to be onstage with the dancers performing downstage. The design for Petroushka (the third piece in the program) required nearly 600 feet of structure that could be hung at dramatic angles and support both working and faux lighting instruments. It also needed to be able to fly into place during a twenty minute intermission. The full orchestra would also need to be moved offstage quickly during the same 20 minute intermission.  I decided to use equipment typically used in arena and rock & roll rigging to safely achieve the desired look, along with a rolling 28ft x 48ft platform to shift the orchestra equipment offstage. Working with IATSE local #17, we made the scene change in under 20 minutes every night."
                }];
    
    
    
    };
                                  
    
}]);