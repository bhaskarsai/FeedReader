#Overview:
	index.html initially creates a menu with four (4) menu items, each with a name and Datafeeder (URL) from which the data loads into the page after executing Jasmine Test scripts successfully. 

#Following are the menu details.
	Menu 1:
		Udacity Blog (http://blog.udacity.com/feeds/posts/default?alt=rss)

	Menu 2:
		CSS Tricks (http://css-tricks.com/feed)

	Menu 3:
		HTML5 Rocks(http://feeds.feedburner.com/html5rocks)

	Menu 4:
		Linear Digressions (http://feeds.feedburner.com/udacity-linear-digressions)


#app.js
	This file is included in index.html and renders core logic of data preparation and data loading into appropriate sections of the page.

#style.css
	This file contains all necessary classes for rendering within HTML Page design and interact with jQuery. 

#feeder.js
	This is a Jasmine spec file, contains various test cases for performing various validations as defined in the project. Each test case validates the rules defined in the project specifications and show a successful message, incase of finding an error while executing the test case, Jasmine will an error message by showing the expected results.

#How to configure the project
	Unzip "frontend-nanodegree-feedreader" folder and point to your localhost. 
	(ex: By typing http://localhost should render and display the index.html file within your local server environment)


#Executing Testcase 1: (loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty)

	expect(NAME/URI.properties).toBeDefined();
	expect(NAME/URI.properties).not.toBe('');

	A forloop, which loops through allFeeds array object and checks NAME and URI properties are defined and are not left blank.  
	The above lines of the Jasmine specs will perform required validation on each index of allFeeds array.

	#failure scenario:
	a) Edit app.js and update allFeeds array by leaving some Name properties to blank and removing URL property
	b) Read "how to read an error" section for Error details

	#Correct Scenario:
	a) Edit app.js and make sure to meet the test case specifications. (ex: Define URI and Name properties and not leave them blank)
	b) Read "Success Messages" section for understanding the successful execution of the specs.


#Executing Testcase 2: (Create "The menu" suite, menu element is hidden by default and ensures the menu changes visibility when the menu icon is clicked)
	
	describe('The menu', function(){}) //Create 'The menu' suite
	expect(HTML with appropriate CSS id/clss).toBe(true);  // Make sure it follows the default status

	This test case started by defining the new suite called "The menu" (Observe the first line of code), after that a spec "Menu is hidden by default" which will ensure CSS class is existing/present for hiding the menu element and finally another spec "Toggle visibility of the menu link when clicked", that tracks the existance of "menu-hidden" class.  If the "menu-hidden" class exists the menu will be visible, and the menu disables when the class doesn't exist in DOM structure.

	#failure scenario:
	a) Edit app.js and add  $('body').toggleClass('menu-hidden');  anywhere in the file outside a function.  As this will display the menu item, "Menu is hidden by default" spec will be failed.
	b) Before making this change, fix the file back from the changes made from the above test case.
	c) Edit app.js and comment the line $('body').toggleClass('menu-hidden');  in menuIcon.on('click', function(){}) event.  As the page is turned to CSS Tricks section from Udacity block, "menu-hidden" status should be turned to blank ('') as per the testcase.  In this case, "menu-hidden" is disabled, and due to it's unavailable status, the testcase can't execute one of the toggle scenarios and fails the scenario.
	d) Read "how to read an error" section for Error details

	#Correct Scenario:
	a) Undo the changes from the above steps #a and #c and reload/refresh localhost
	b) Read "Success Messages" section for understanding the successful execution of the specs.


#Executing Testcase 3: (A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container)
	
	HINT: Jasmine's beforeEach and asynchronous done() function.

	beforeEach();
	expect(numOfRows).toBeGreaterThan(0);

	"Initial Entries" Suite demonstrates, iterating through various synchronus activities and checking the number of articles loaded in the page, also make sure the number of articles loaded are more than 0 (minimum 1 to many)

	#failure scenario:
	a) Edit feeder.js, locate 'Check for Minimum one entry' spec and add an abnormal number to 'expect(numOfRows).toBeGreaterThan(0);' example: expect(numOfRows).toBeGreaterThan(1000000);.  This will look for those number of records to be loaded and fails due to insufficient records. 
	b) Read "how to read an error" section for Error details

	#Correct Scenario:
	a) Undo the changes from the above steps #a
	b) Read "Success Messages" section for understanding the successful execution of the specs.


#Executing Testcase 4: (Ensure when a new feed is loaded by the loadFeed function that the content actually changes)
	
	HINT: loadFeed is an asynchronous function.

	expect(getCurContent).not.toBe(getNewContent);

	This test case will basically compare the current and previously loaded contents and writes if they are not same. This will ensure the latest content loaded was not same as the previously loaded content. 

	#failure scenario:
	a) Edit feeder.js, locate 'changes the content displayed' spec under 'New feed selection' and change expect(getCurContent).not.toBe(getNewContent); to expect(getCurContent).toBe(getNewContent);.  This will look whether the previously loaded content is same as the current content,  as this won't be the same it fail the scenario.
	b) Read "how to read an error" section for Error details

	#Correct Scenario:
	a) Undo the changes from the above steps #a
	b) Read "Success Messages" section for understanding the successful execution of the specs.


#How to read an error:
	a)  Jasmine displays an error by displaying Total specs and failures msg (ex: 13 specs, 2 failures)
	b)  Observe Suite and Spec details (ex: Suite = "RSS Feeds",  Spec = "URL Defined and Not empty") under Red-BAR
	c)  Observe the Expected results (ex: "Expected undefined to be defined.") in a grey-bar, displays under Spec and Suite details.  This will help us locate the exact test case and the line of code that is causing the issue, hence we can locate the business logic easily and provide a fix.
	d) Observe the dots dipalyed, beneath the Framework title (Jasmine 2.1.2).  Each Red dot represents an error of the spec.

#Success Messages:
	a) These messages are always be displayed in Green
	b) Observe a message that says total number of specs and 0 errors (ex: 13 specs, 0 failures)
	c) Observe Suite name/s followed by specs in green color status. 
	d) Observe the dots dipalyed, beneath the Framework title (Jasmine 2.1.2).  Each green dot represents a successful execution of a spec
