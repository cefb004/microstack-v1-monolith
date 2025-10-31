# ��� Microstack-J — Documentação Técnica

Este diretório reúne toda a documentação técnica do projeto **Microstack-J**, organizada por tema e propósito.  
Aqui estão incluídas informações sobre **arquitetura**, **modelagem de dados**, **processos de deploy**, além de diagramas e materiais de apoio ao desenvolvimento.

---

## ��� Estrutura Geral

```text
docs/
├── architecture/ → Diagramas e visão arquitetural do sistema
├── data/ → Modelagem e documentação de dados
├── deploy/ → Processo de deploy, DevOps e CI/CD
```

---

## ���️ Arquitetura (`architecture/`)

Contém os **diagramas e descrições estruturais** do sistema:
- Diagramas de componentes e comunicação entre módulos;
- Desenhos de topologia (frontend, backend, banco de dados);
- Estratégias de autenticação, segurança e versionamento de APIs;
- Decisões arquiteturais (ADR) e roadmap técnico.

��� Arquivo principal: [`architecture/README.md`](architecture/README.md)

---

## ���️ Modelagem de Dados (`data/`)

Contém informações sobre a **estrutura e representação dos dados**:
- Diagramas ER ou modelos orientados a documentos (JSON);
- Dicionário de dados e definições de schema;
- Estratégias de versionamento e fluxo de dados entre módulos.

��� Arquivo principal: [`data/README.md`](data/README.md)

---

## ��� Deploy e DevOps (`deploy/`)

Contém os **materiais relacionados à entrega e implantação** da aplicação:
- Diagramas do ciclo **DevOps** e **CI/CD**;
- Documentação de build e automação de deploy;
- Instruções futuras para ambientes **Docker Compose**, **Render** e **AWS Free Tier**.

��� Arquivo principal: [`deploy/README.md`](deploy/README.md)

---

## ��� Diretrizes Gerais

- Todos os diagramas devem ser armazenados em formato `.png` (imagem) e, se possível, acompanhados do arquivo-fonte original (`.drawio`, `.excalidraw`, etc.).
- Cada subdiretório possui um `README.md` com instruções específicas.
- A documentação será expandida à medida que o projeto evoluir (ex: testes, CI/CD pipelines, observabilidade).

---

## ��� Referências Recomendadas

- *Designing Data-Intensive Applications* — Martin Kleppmann  
- *The DevOps Handbook* — Gene Kim, Jez Humble, Patrick Debois  
- *Software Architecture in Practice* — Len Bass et al.  
- Documentação oficial das tecnologias utilizadas (Spring Boot, Angular, Docker, Render, AWS)

---

> **Manutenção:**  
> Este documento deve ser atualizado sempre que um novo diretório, diagrama ou tema técnico for adicionado à documentação do projeto.
