## DDD example for Nest.js

### Structure
- `application` - framework-related code (controllers, DI)
- `infrastructure` - database, work with file system, logs, 3rd-party API-calls, etc 
- `domain` - business logic, framework and infrastructure-independent code

### Requirements
Domain layer should provide and use interfaces, if it need anything from infrastructure.
It should never use any code/imports from the `application` or `infrastructure` layers directly.

Infrastructure should never use any code from the `application` or `domain` layers directly.
