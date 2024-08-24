Here is the updated overview with the additional information about the two back ends:

---

**Overview**  
Bamboo Bank is a comprehensive banking application designed for managing employees efficiently. The application offers functionality to view, add, delete, and update employee information through an intuitive user interface. Bamboo Bank is built with an Angular front end and offers two back ends, one in Java and one in Kotlin, which manage an H2 database and handle most of the application logic.

**Features**  
- View employees in an easy-to-use UI  
- Add new employees  
- Update existing employee details  
- Delete employees  

**Technologies Used**  
- **Front End**: Angular  
- **Back End**: Spring Boot (Java or Kotlin)  
- **Database**: H2  

**Installation and Setup**  
Follow these steps to set up and run Bamboo Bank:

**Prerequisites**  
- Ensure you have Node.js and npm installed.  
- Ensure you have Java Development Kit (JDK) installed.  
- Ensure you have an IDE like Visual Studio Code installed.

**Step-by-Step Installation**

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd bamboo-bank
   ```

2. **Install Front End Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install Back End Dependencies**:
   Choose either Java or Kotlin for the back end:

   - **For Java**:
     ```bash
     cd ../backend-java
     mvn clean install
     ```

   - **For Kotlin**:
     ```bash
     cd ../backend-kotlin
     mvn clean install
     ```

4. **Run the Front End**:
   - Navigate to the front end directory:
     ```bash
     cd ../frontend
     ```
   - Start the Angular development server and open it in your default browser:
     ```bash
     ng serve -o
     ```
   - The front end will be accessible on port 4200. Ensure port 4200 is open on your machine.

5. **Run the Back End**:  
   Open the appropriate back end directory in Visual Studio Code:
   ```bash
   code ../backend-java    # For Java back end
   code ../backend-kotlin  # For Kotlin back end
   ```
   Use the "Run Java" option in Visual Studio Code to start the Spring Boot application.  
   The API will be accessible on port 8082. Ensure port 8082 is open on your machine.

**Access the Application**  
Open your browser and navigate to [http://localhost:4200](http://localhost:4200) to access the Bamboo Bank front end.

**Note**:  
When using Visual Studio Code, utilize the "Run Java" option to start either the Java or Kotlin back end to ensure that the application runs correctly and that all dependencies are managed.

---

This version includes the option to use either a Java or Kotlin back end.

## Created by

Malik Maitland
