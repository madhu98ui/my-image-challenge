NASA Image Challenge :

NASA Image Challenge is a single-page web application built with React that leverages NASA’s image API to allow users to search, filter, and view images.

Features
	1.	Users can search NASA’s image library using plain text.
	2.	Filter search results by specifying a date range.
	3.	View detailed information about each image in a modal window.

Technologies Used
	•	React: For building a dynamic user interface.
	•	Axios: For making HTTP requests to NASA’s API.
	•	Semantic UI: For ready-made UI components.
	•	NASA Image API: Provides image data and metadata.

Setup
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

Key Features
	Image Search :
	•	Allows users to search NASA’s image library by entering keywords.
	•	User input is handled via ImageSearch.js with an input field and a search button, and microphone functionality for      voice-based search.
	
    Date Filtering :
	•	Users can filter images by a specific date range.
	•	Filters applied in App.js using JavaScript’s Date object to display images within the selected range.
	
    Image Details Modal :
	•	Detailed view of selected images with title, description, and high-resolution link.
	•	Created using ImageModal.js with Semantic UI.
	•	Displays a “No Results Found” message when no images match search criteria.

Components
	•	ImageSearch.js: Manages user input and initiates searches.
	•	ImageModal.js: Renders detailed view and metadata of selected images.

Enhancements
	•	Bookmark Feature: Enable users to save favorite images for later.
	•	Social Sharing: Share images directly to social media platforms.

Enjoy exploring NASA's incredible image collection!