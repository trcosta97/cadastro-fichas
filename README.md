# Fichas API: A Spring Boot Application for Managing Manufacturing Records

The Fichas API is a robust Spring Boot application designed to manage and track manufacturing records (fichas) in a production environment. It provides a comprehensive set of RESTful endpoints for creating, retrieving, updating, and deleting records related to machines, users, and manufacturing forms.

This application serves as a backend system for a manufacturing process management tool, allowing users to create and manage records of machine inspections, maintenance tasks, or production logs. It incorporates secure user authentication using JWT tokens and provides a user-friendly frontend interface for interacting with the API.

## Repository Structure

The repository is organized into two main directories: `fichasApi` for the backend Spring Boot application and `front` for the frontend React application.

### Backend (`fichasApi`)
- `src/main/java/br/com/thiago/fichasApi`: Contains the main application code
  - `controller`: REST controllers for handling HTTP requests
  - `domain`: Entity classes and repositories
  - `infra`: Configuration classes for security, CORS, and Swagger
  - `service`: Business logic services
- `src/main/resources`: Application properties and configuration files
- `src/test`: Test classes for the application
- `pom.xml`: Maven project configuration file

### Frontend (`front/fichasWeb`)
- `src`: Contains the React application source code
  - `routes`: React components for different pages
  - `styled`: Styled components for UI elements
- `package.json`: npm project configuration file
- `vite.config.js`: Vite build tool configuration

## Usage Instructions

### Backend Setup

1. Ensure you have Java 17 and Maven installed on your system.
2. Navigate to the `fichasApi` directory.
3. Run `mvn clean install` to build the project and download dependencies.
4. Start the application using `mvn spring-boot:run`.

The API will be available at `http://localhost:8080`.

### Frontend Setup

1. Ensure you have Node.js and npm installed on your system.
2. Navigate to the `front/fichasWeb` directory.
3. Run `npm install` to install dependencies.
4. Start the development server using `npm run dev`.

The frontend application will be available at `http://localhost:5173`.

### API Endpoints

- `/login`: POST request for user authentication
- `/usuario`: User management endpoints
- `/ficha`: Manufacturing record management endpoints
- `/maquina`: Machine management endpoints

For detailed API documentation, access the Swagger UI at `http://localhost:8080/swagger-ui.html` when the backend is running.

### Authentication

The API uses JWT for authentication. To access protected endpoints:

1. Obtain a token by sending a POST request to `/login` with valid credentials.
2. Include the token in the `Authorization` header of subsequent requests as `Bearer <token>`.

### Common Use Cases

1. Creating a new manufacturing record:
   ```javascript
   const response = await axios.post('http://localhost:8080/ficha', {
     autor: { id: authorId },
     maquina: { id: machineId },
     aprovado: true,
     comentarios: 'Maintenance completed successfully'
   }, {
     headers: { 'Authorization': `Bearer ${token}` }
   });
   ```

2. Retrieving all manufacturing records:
   ```javascript
   const response = await axios.get('http://localhost:8080/ficha/all', {
     headers: { 'Authorization': `Bearer ${token}` }
   });
   ```

### Troubleshooting

1. JWT Token Issues:
   - Problem: "Token JWT inválido ou expirado!"
   - Solution: Ensure you're using a valid, non-expired token. Re-authenticate if necessary.

2. CORS Issues:
   - Problem: Cross-Origin Resource Sharing (CORS) errors in the browser console.
   - Solution: Verify that the `CorsConfiguration` class is properly configured and that the frontend origin is allowed.

3. Database Connection Issues:
   - Problem: "Unable to connect to database" error.
   - Solution: Check the database configuration in `application.properties` and ensure the database server is running.

For further assistance, enable debug logging by adding `logging.level.root=DEBUG` to `application.properties`.

## Data Flow

The request data flow in the Fichas API follows these steps:

1. Client sends a request to a specific endpoint.
2. The `SecurityFilter` intercepts the request and validates the JWT token if present.
3. If authenticated, the request reaches the appropriate controller.
4. The controller delegates to the corresponding service for business logic processing.
5. The service interacts with repositories to perform CRUD operations on the database.
6. The response flows back through the service and controller to the client.

```
[Client] <-> [SecurityFilter] <-> [Controller] <-> [Service] <-> [Repository] <-> [Database]
```

Key technical considerations:
- JWT tokens are used for stateless authentication.
- CORS is configured to allow requests from the frontend origin.
- The application uses Spring Data JPA for database interactions.

## Infrastructure

The Fichas API utilizes the following key infrastructure components:

- Spring Security: Handles authentication and authorization
- JWT: Used for secure token-based authentication
- H2 Database: In-memory database for development (can be replaced with a production database)
- Swagger/OpenAPI: Provides API documentation and testing interface

The `SpringDocConfigurations` class configures Swagger to include JWT authentication:

```java
@Bean
public OpenAPI customOpenAPI() {
    return new OpenAPI()
            .components(new Components()
                    .addSecuritySchemes("bearer-key",
                            new SecurityScheme().type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")));
}
```

This configuration ensures that the Swagger UI includes the option to authenticate using a JWT token when testing the API endpoints.