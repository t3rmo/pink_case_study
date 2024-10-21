# TODOs

- Axios mit useQuery Hook auswechseln
- Unit Tests schreiben

# How to run this project
1. Clone this repository (e.g. with `git clone https://github.com/t3rmo/pink_case_study.git`)
2. `npm install`
3. `npm run dev`
4. Thats it, the project should execute with all its functionality


# Objective:
To evaluate the candidate's problem-solving skills, ability to work with TypeScript
and React, and their understanding of FHIR standards within a limited timeframe.
# Estimated Duration:
4 hours
# Project Overview:
You are tasked with creating a basic patient management interface for a radiology
diagnostics platform. This interface will interact with a mock FHIR server to
retrieve and display patient information

# Requirements:
1. Setup and Environment:
Set up a React project using Create React App with TypeScript template.
Configure necessary dependencies including a FHIR client of your choice
and any UI libraries.
2. Features to Implement:
Patient List View: Fetch and display a list of patients from the mock FHIR
server.
Patient Detail View: When a patient from the list is clicked, display
detailed information about that patient.
3. FHIR Integration:
Fullstack Softwareentwickler 2
Use the FHIR client to connect to a mock FHIR server (for example,
http://hapi.fhir.org/baseR4).
Fetch patient data using FHIR resources.
4. User Interface:
Display patient names in a list.
On selecting a patient, show detailed patient information including name,
gender, birth date, and any available address details.
5. Error Handling:
Implement basic error handling for network requests.
optional: display meaningful error messages in the UI.