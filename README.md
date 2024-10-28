NASA Image Challenge :

NASA Image Challenge is a single-page web application built with React that leverages NASA’s image API to allow users to search, filter, and view images.

Features :

	1.	Users can search NASA’s image library using plain text.

	2.	Filter search results by specifying a date range.

	3.	View detailed information about each image in a modal window.
	
	4.	Paginate search results, displaying 10 images per page for easier browsing.

	5.	Explore content quickly using search suggestions for popular topics like "Galaxies," "Nebulae," and "Planets."

Technologies Used :

	•	React: For building a dynamic user interface.

	•	Axios: For making HTTP requests to NASA’s API.

	•	Semantic UI: For ready-made UI components.

	•	NASA Image API: Provides image data and metadata.

Setup :

	1.	Install Node.js

	2.	Clone the repository and navigate into the project directory: 
        git clone https://github.com/madhu98ui/my-image-challenge.git

	3.	Install dependencies:
        npm install

	4.	Set up environment variables:
	•	Create a .env file in the root directory.
	•	Add your NASA API key: REACT_APP_NASA_API_KEY=your_api_key_here

	5.	Run the application:
        npm start

	6.	Build for production:
        npm run build

Key Features :

	Image Search :
	•	Description: Allows users to search NASA’s image library by entering keywords.
	•	Implementation: User input is handled via ImageSearch.js with an input field, a search button, and a microphone icon for voice-based search.
	
    Date Filtering :
	•	Description: Users can filter images by a specific date range to narrow down search results.
	•	Implementation: Date filtering is applied in App.js, using JavaScript’s Date object to display images within the selected range.
	
    Image Details Modal :
	•	Description: Provides a detailed view of selected images, including title, description, and a high-resolution link.
	•	Implementation: Created with ImageModal.js using Semantic UI and displays a “No Results Found” message when no images match search criteria.

	Pagination :
	•	Description: Limits the number of displayed images to 10 per page, with pagination controls for navigating through results.
	•	Implementation: The application dynamically calculates the total pages based on the number of search results, allowing users to browse large datasets smoothly.

	Search Suggestions:
	•	Description: Provides quick-access buttons with popular search terms such as "Galaxies" and "Space Missions."
	•	Implementation: Clicking a suggestion automatically performs a search with the chosen term, displaying relevant images without requiring typing.


Components :

	•	ImageSearch.js: Manages user input and initiates searches.
	•	ImageModal.js: Renders detailed view and metadata of selected images.
	•	ImageTable.js: Displays search results with pagination for easier navigation.

Enhancements :

	•	Bookmark Feature: Enable users to save favorite images for later.
	•	Social Sharing: Share images directly to social media platforms.

Enjoy exploring NASA's incredible image collection!