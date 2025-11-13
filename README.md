# MicroStack-J

[![Demo Online](https://img.shields.io/badge/demo-online-brightgreen)](https://microstack-j-front.onrender.com/)

Overview

MicroStack-J is a Full Stack Java application designed to demonstrate a modern microservices architecture.
The project combines:

- Backend with Spring Boot microservices.

- Frontend with Angular.

- Infrastructure with Docker, Kubernetes, and CI/CD pipelines.

- Data Engineering layer with open-source tools for ETL/ELT, real-time data processing, and analytics dashboards.

This project is intended for learning purposes, serving as a sandbox for practicing backend, frontend, DevOps, and data engineering integration.

## 🏗️ Architecture
🔹 Application Layer

- Angular Frontend → User interface (CRUD, dashboards).

- Spring Boot Microservices → Core business logic (e.g., Person, Game Rental, Publisher).

- PostgreSQL → Relational database for transactional data.

🔹 Infrastructure Layer

- Docker → Containerization.

- Kubernetes → Orchestration and scalability.

- GitHub Actions → CI/CD pipelines.

- Kafka / RabbitMQ → Messaging and event-driven communication.

🔹 Data Engineering Layer

- Apache Kafka → Streams of business events (e.g., rentals).

- MinIO (S3 compatible) → Data Lake storage for raw events.

- Apache Airflow → Orchestration of ETL/ELT pipelines.

- dbt (Data Build Tool) → SQL-based transformations inside the Data Warehouse.

- PostgreSQL / ClickHouse → Data Warehouse for analytics.

-Apache Superset / Metabase → Dashboards and BI visualization.

## 📊 Data Flow Example

A user rents a game (via Angular → Spring Boot → PostgreSQL).

The event is published to Kafka.

The Analytics Service consumes the event and stores raw data in MinIO (Data Lake).

Airflow + dbt pipelines process and transform data into the Data Warehouse (PostgreSQL/ClickHouse).

Superset/Metabase provides real-time dashboards accessible via the frontend.
## Goals

- Learn and practice Full Stack Java development.

- Build a modular and scalable microservices ecosystem.

- Explore event-driven architecture with Kafka.

- Integrate a Data Engineering pipeline for analytics.

- Provide dashboards for insights and monitoring.

## 🛠️ Tech Stack

Backend

- Java 17 + Spring Boot

- REST APIs

- PostgreSQL

- Frontend

- Angular

- TypeScript

Infrastructure

- Docker & Docker Compose

- Kubernetes

- GitHub Actions

Data Engineering

- Apache Kafka

- MinIO (Data Lake)

- Apache Airflow

dbt

PostgreSQL / ClickHouse

Apache Superset / Metabase

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
Future iterations may expand microservices, add new data pipelines, and improve analytics capabilities.
