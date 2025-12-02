# Microstack V1 – Monolithic Application (MVC Architecture)
[![Demo Online](https://img.shields.io/badge/demo-online-brightgreen)](https://microstack-j-front.onrender.com/)

📌 Overview

Microstack V1 is the initial monolithic implementation of the Microstack platform.
It was built using the Model–View–Controller (MVC) architecture and serves as the foundation for understanding the system before evolving it into a distributed microservices ecosystem.

This repository is used for learning, experimentation, benchmarking, and comparison with the later Microstack-J microservices architecture.

🧱 Architecture

The system follows a traditional MVC structure:

Model – Represents the domain entities and application data.

View – Templates/UI layer rendered by the server.

Controller – Handles HTTP requests, orchestrates logic, and interacts with services and models.

This design keeps the code modular and maintainable, while still operating as a single deployable artifact.

🛠 Tech Stack

Depending on your exact implementation, adjust the items—but here is a professional baseline:

Java (or your language here)

Spring Boot (MVC) or your MVC framework of choice

Thymeleaf / JSP / HTML templates

PostgreSQL / H2 (development mode)

REST endpoints (internal and external)

Maven or Gradle

Docker (optional)

🚀 How to Run the Project
1. Clone the repository
git clone https://github.com/your-user/microstack-v1-monolith.git
cd microstack-v1-monolith

2. Build
mvn clean install

3. Run
mvn spring-boot:run

4. Access
http://localhost:8080

📂 Project Structure
```
microstack-v1-monolith/
 ├── src/
 │   ├── main/
 │   │   ├── java/... (Controllers, Services, Models)
 │   │   ├── resources/
 │   │   │   ├── templates/ (Views)
 │   │   │   └── application.properties
 │   └── test/
 ├── pom.xml or build.gradle
 └── README.md
```

🌱 Purpose of This Version

This monolithic version exists to:

Learn the fundamentals of the Microstack platform.

Understand domain boundaries before splitting into independent services.

Benchmark monolith vs microservices performance.

Compare architecture, scalability, observability, deployments, and persistence strategies.

🔄 Evolution Path

This project is a precursor to the distributed Microstack-J system.
The evolution plan includes:

Splitting modules into independent microservices (Users, Orders, Notifications, Inventory).

Introducing an API Gateway.

Adding polyglot services (Java, Node, Rust, Elixir).

Moving to cloud environments such as AWS and Render.

Implementing async messaging (Redis), observability, CI/CD, and multicloud patterns.

The monolith remains useful as the baseline to compare both architectures.

📜 License

MIT License

![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0-brightgreen?logo=springboot&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-17-red?logo=angular&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-24.0-blue?logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-1.30-blue?logo=kubernetes&logoColor=white)
![Kafka](https://img.shields.io/badge/Apache%20Kafka-3.7-black?logo=apachekafka&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-3.12-FF6600?logo=rabbitmq&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-2.51-orange?logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-10.4-orange?logo=grafana&logoColor=white)
![ELK Stack](https://img.shields.io/badge/ELK%20Stack-Elastic%20Search%20%7C%20Logstash%20%7C%20Kibana-blueviolet?logo=elasticstack&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?logo=githubactions&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-Automation-D24939?logo=jenkins&logoColor=white)

## 📌 Status

This project is work in progress and meant for study and experimentation.
Future iterations may expand microservices.
