/* feedreader.js
 * Author: Bhaskarsai
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* ChkURI(arrObj) method performs validation on URL property.
         * Ensures it has a URL defined and is not empty.
         */
        function ChkURI(arrObj){
            it('URL Defined and Not empty', function(){
                expect(arrObj.url).toBeDefined();
                expect(arrObj.url).not.toBe('');
            })
         }

        /* ChkName(arrObj) method performs validation on Name property.
         * Ensures it has a name defined and is not empty.
         */
         function ChkName(arrObj){
            it('Name Defined and Not empty', function(){
                expect(arrObj.name).toBeDefined();
                expect(arrObj.name).not.toBe('');
            })
         }

         // For loop that iterates through each Object of allFeeds
         // and supply object to ChkURI method for further processing 
         for(var x=0; x < allFeeds.length; x++){
            ChkURI(allFeeds[x]);
            //ChkName(allFeeds[x]);
         }

        // For loop that iterates through each Object of allFeeds
        // and supply object to ChkName method for further processing 
         for(var x=0; x < allFeeds.length; x++){
            //ChkURI(allFeeds[x]);
            ChkName(allFeeds[x]);
         }

         /*
           =====================
           NOTE: As per the instructions or the task break-up, individual
           for-loops and methods were created, however they can be achieved 
           from one loop and one method.
           =====================
         */
    });


    /* New test suite "The menu" is created with two specs.
    *  The first spec is "Menu is hidden by default", which will check if
    *  the Menu element is hidden by default
    *
    *  The second spec demonstrates, toggle visibility of menu icon when clicked.
    */
    describe('The menu', function() {
        
        //menu-icon-link class to be disabled by default
         var body = $('body'),

        //menuIcon link on the top left corner of the page
            menuIcon = $('.menu-icon-link');

        //Check if the menu-hidden class is existing/active
        it('Menu is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* Toggle visibility of the menu when the menu icon is clicked. 
         * This test have two expectations: a) the menu display when
         * clicked and b) hides when clicked again.
         */
        it('Toggle visibility of the menu link when clicked', function() {

            //Set the visible and hide status of the menuIcon.
            var _visible = body.attr('class'),
                _hide;

            //toggle 'menu-hidden' status
            if(body.hasClass('menu-hidden') == true){
                _hide = '';
            }else{
                _hide = 'menu-hidden';
            }
        
            //Track down the menuIcon click 
            menuIcon.click();
            expect(body.attr('class')).toBe(_hide);

            menuIcon.click();
            expect(body.attr('class')).toBe(_visible);
        });
    });

    // Initial Entries suite. that loads a feed 
    // and cheks for the existanace of atleast one entry/record
    describe('Initial Entries', function() {

        //Jasmines beforeEach function for making asynchronous activities
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        //Count the number of articles loaded
        it('Check for Minimum one entry', function(done) {
            var numOfRows = $('.entry').length;
            expect(numOfRows).toBeGreaterThan(0);
            done();
        });
    });

    /* New test suite named "New Feed Selection"
     * Spec that ensures content changes when a new feed is loaded
     */
    describe('New Feed Selection', function() {
        var getCurContent;

        //Get the current content into a variable and load the new content
        beforeEach(function(done) {
            getCurContent = $('.feed').html();
            loadFeed(1, function() {
                done();
            });
        });

        //Compare new content is not matching with the previously stored content 
        it('changes the content displayed', function(done) {
            var getNewContent = $('.feed').html();
            expect(getCurContent).not.toBe(getNewContent);
            done();
        });
    });
}());
