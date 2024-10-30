NASA Image Challenge :

NASA Image Challenge is a single-page web application built with React and Redux that leverages NASA’s image API to allow users to search, filter, and view images. The application demonstrates state management using Redux and asynchronous actions for API calls.

Features :

	1.	Users can search NASA’s image library using plain text.

	2.	Filter search results by specifying a date range.

	3.	View detailed information about each image in a modal window.
	
	4.	Paginate search results, displaying 10 images per page for easier browsing.

	5.	Explore content quickly using search suggestions for popular topics like "Galaxies," "Nebulae," and "Planets."

Technologies Used :

	•	React: For building a dynamic user interface.

	•	Redux & Redux Toolkit: For managing global state and handling 	asynchronous actions.

	•	Axios: For making HTTP requests to NASA’s API.

	•	Semantic UI: For ready-made UI components.

	•	NASA Image API: Provides image data and metadata.

Setup :

	1.	Install Node.js

	2.	Clone the repository and navigate into the project directory: 
        git clone https://github.com/madhu98ui/my-image-challenge.git

	3.	Install dependencies:
		npm install @reduxjs/toolkit react-redux
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
	•	Implementation: The search term is dispatched as an action to Redux, triggering an API call in imageSlice.js and storing the fetched images in a centralized state.
	
    Date Filtering :
	•	Description: Users can filter images by a specific date range to narrow down search results.
	•	Implementation: Date filtering is handled in Redux. The start and end dates are stored in the Redux state and applied when filtering images, ensuring all components access the same filtered data.
	
    Image Details Modal :
	•	Description: Provides a detailed view of selected images, including title, and description.
	•	Implementation:  Implemented with Semantic UI in ImageModal.js, this modal renders dynamically from the Redux state, ensuring consistent data across components.

	Pagination :
	•	Description: Limits the number of displayed images to 10 per page, with pagination controls for navigating through results.
	•	Implementation: Pagination is managed in Redux by calculating total pages based on the search results and managing the current page in the global state.

	Search Suggestions:
	•	Description: Provides quick-access buttons with popular search terms such as "Galaxies" and "Space Missions."
	•	Implementation: Clicking a suggestion automatically dispatches a Redux action to search with the chosen term, displaying relevant images without requiring typing.


Components :

	•	ImageSearch.js: Manages user input, initiates searches, and dispatches the search term to Redux.
	•	ImageModal.js: Renders detailed view and metadata of selected images based on state in Redux.
	•	ImageTable.js: Displays search results with pagination, allowing users to browse images across pages.
	•	imageSlice.js: Contains Redux actions, reducers, and async thunks to manage global state and API interactions.
	•	Pagination.js: Provides pagination controls that interact with the Redux state for page navigation.

Enhancements :

	•	Bookmark Feature: Enable users to save favorite images for later.
	•	Social Sharing: Share images directly to social media platforms.
	•	Advanced State Management: Consider adding more Redux slices for features like user preferences, bookmarked images, or additional filter options.

Enjoy exploring NASA's incredible image collection!