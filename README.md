# AI Article Summarizer

This is a web application that summarizes articles from a given URL using the OpenAI API. The app is built using React and styled with Tailwind CSS.

## Features

*  Enter an article URL to get a concise summary.
*  View a list of previously summarized URLs.
*   Responsive UI with a clean interface.

## Technologies Used

* React
* Tailwind CSS    
* OpenAI API    
* Vite

## Getting Started

### Prerequisites

* Node.js (v18 or later)    
* An OpenAI API key

### Installation

1. Clone the repository:

    `git clone https://github.com/your-username/AI-article-summarizer.git cd AI-article-summarizer`
    
2. Install dependencies:

    `npm install`

3.  Create a `.env` file in the root directory and add your OpenAI API key:

    `VITE_OPENAI_API_KEY=your_api_key_here`
 
4.  Start the development server:

    `npm run dev`

5.  Open your browser and go to `http://localhost:5173`.   


## Project Structure

`src/ ├── assets/           # Images and logos ├── components/       # Reusable React components ├── services/         # API logic for OpenAI ├── App.jsx           # Main application file ├── index.js          # Entry point ├── main.jsx          # App initialization`


## Future Improvements

* Support for summarizing text from uploaded files
* User login and saved summaries
* Multi-language summarization