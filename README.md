Overview :

Nasa Image Challenge is a Single-page web applicaion (SPA) that uses Nasa's image API to allow users to search, filter and view images. The application is built with React for interactivity and Semantic UI for components.

Features :

> Search NASA's image library with plain text.
> Filter search results by date range.
> View image details in a modla window.

Technologoes Used :

> React: JavaScript library for building the user interface
> Axios: For making HTTP request to NASA's API.
> Semantic-UI : UI library for pre-designed components.
> NASA Image API : Public API to fetch images and metadata.

Getting Started :

Prerequisties :
> Node.js and npm installed on your local machine.

Installation :

> Clone the Repo : git clone https://github.com/madhu98ui/my-image-challenge.git

> Install Dependencies : npm install

>Set Up Environment Variables : 
    >Create a .env file in the project root
    > Add NASA API key to the .env file : REACT_APP_NASA_API_KEY=your_api_key_here

> Run the Application : npm start

> Build for Production : npm run build

Approach and Implementation :

> Setting Up the React Application 

    Initialized a New React Project: 
        Used npx create-react-app to create the project structure. 
        Configured index.js and App.js as the entry points for the application. 
        

    Installed Semantic UI for ready-made components: 
        Used Semantic UI React to provide modals, buttons, and other UI components, saving time on designing and building common elements. 
    Set Up Custom CSS for styling: 
        Created App.css to style the application. Used custom CSS classes to add styles for responsiveness, layout, and typography. 
        
    Configuring Semantic UI and Custom CSS 
        Integrated Semantic UI: 
            Installed Semantic UI React to use pre-built components such as modals, input fields, and buttons. 
            Added Semantic UI CSS import to index.js for consistent styling across components. 
        
        Custom CSS: 
            Used App.css for additional styling not provided by Semantic UI. 
            Created custom CSS classes for layout adjustments, responsive design, and custom elements such as background images, padding, margins, and text styling. 
            
    NASA API Integration 
        Registered for NASA API Key: 
            Signed up at NASA’s API portal and obtained an API key to access NASA's image library. 
        
        Environment Variable Setup: 
            Created a .env file in the project root to securely store the API key. 
            Added the .env file to .gitignore to prevent committing sensitive data. 
            
        Configured Axios to Fetch Images: 
            Set up an Axios GET request in App.js to fetch images based on user input. 
            Filtered the API response to display only images and excluded other media types (e.g., videos, audio). 
            
    Implementing Image Search and Filtering 
        Image Search Component 
            Purpose: Allow users to search NASA’s image library via text input. 
            Implementation: 
               > Created ImageSearch.js to handle user input for search terms. 
               > Set up an input field and a search button to trigger the search. 
               > Passed the search term to App.js via props, initiating the image search when the button is clicked. 
                
        Filtering by Date 
            Purpose: Enable users to filter images by a date range. 
            Implementation: 
                > Added a date filter section that allows users to select a start and end date. 
                > Implemented logic in App.js to filter results based on the start and end date using JavaScript’s Date object. > Applied the date filter to the fetched images to show only those within the specified date range. 
                
    Modal Functionality
        Modal for Image Details
            Purpose: Display detailed information about each image in a larger view. 
            Implementation: 
                > Built a modal component (ImageModal.js) using Semantic UI to show selected image details. 
                > Included additional metadata in the modal, such as the image title, description, and a link to the high-resolution version of the image. 
                > Added a "No Results Found" message if there are no images matching the search criteria, enhancing user experience when there are no results. 
                
    Future Enhancements 
        Bookmark Feature: 
            Allow users to save their favorite images locally using local storage, so they can revisit saved images even after closing the app. 
        Voice Search: 
            Add voice search functionality using the Web Speech API, enabling hands-free interaction.  
        Social Sharing: 
            Enable sharing images to social media platforms directly from the app, increasing engagement and reach.




