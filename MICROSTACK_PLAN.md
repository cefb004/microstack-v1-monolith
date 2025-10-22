# ��� Microstack-j – Full Stack Java + Angular + Microservices

**Autor:** Carlos Brandão  
**Projeto:** Aplicação Full Stack (Spring Boot + Angular)  
**Objetivo:** Desenvolver uma aplicação moderna completa — backend Java + frontend Angular — com arquitetura escalável e preparada para deploy em cloud.

---

## ��� Visão Geral

O **Microstack-j** é uma aplicação *Full Stack Java* desenvolvida para fins de estudo e portfólio.  
Ela combina as principais tecnologias usadas no mercado internacional:

- **Backend:** Spring Boot (REST API, JPA, Hibernate, H2, Maven)
- **Frontend:** Angular (HTTPClient, Components, Forms, Routing)
- **Infraestrutura:** Docker, Docker Compose
- **Banco de Dados:** H2 (memória) → opção futura: PostgreSQL
- **Deploy opcional:** AWS Free Tier (EC2 ou Elastic Beanstalk)
- **Ferramentas de apoio:** Git, cURL, Postman, VS Code, Git Bash

---

## ���️ Cronograma de Desenvolvimento (Ritmo Leve – 4 Semanas)

### ��� **Semana 1 – Backend Monolítico (Spring Boot + H2)**
> Objetivo: criar uma API REST funcional com persistência de dados.

| Dia | Etapa | Descrição |
|-----|--------|-----------|
| **1** | Estrutura inicial | Criar projeto Maven, configurar `pom.xml` e endpoint Hello World. |
| **2** | Entidade + Repository | Criar `User.java` (model) e `UserRepository.java`, testar com H2. |
| **3** | Controller REST | Criar `UserController.java` e implementar CRUD básico. |
| **4** | Testes via curl/Postman | Validar `/api/users`, corrigir CORS, garantir retorno JSON. |
| **5** | Carga inicial | Criar `data.sql` com usuários de exemplo e verificar logs SQL. |

---

### ��� **Semana 2 – Frontend Angular (Consumindo a API)**
> Objetivo: construir interface web integrada ao backend.

| Dia | Etapa | Descrição |
|-----|--------|-----------|
| **6** | Setup Angular | Criar projeto (`ng new frontend`), testar com `ng serve`. |
| **7** | Estrutura de componentes | Criar `user-list` e `user-form`, configurar rotas. |
| **8** | Comunicação com API | Criar `user.service.ts` com `HttpClient` apontando para `/api/users`. |
| **9** | Listagem de usuários | Exibir tabela com dados da API no componente `user-list`. |
| **10** | Formulário de cadastro | Criar formulário para adicionar novo usuário via POST. |

---

### ⚙️ **Semana 3 – Integração e Build**
> Objetivo: consolidar backend e frontend em um app coeso.

| Dia | Etapa | Descrição |
|-----|--------|-----------|
| **11** | Validação | Adicionar validações (`@NotBlank`, `@Email`) e mensagens no frontend. |
| **12** | Testes completos | Testar CRUD via interface Angular. |
| **13** | Build integrado | Executar `ng build --prod` e servir Angular pelo Spring Boot. |
| **14** | Documentação técnica | Criar/atualizar README com comandos e setup completo. |
| **15** | Revisão geral | Refatorar código, limpar logs e revisar endpoints. |

---

### ☁️ **Semana 4 – Extensões e Deploy**
> Objetivo: preparar o projeto para portfólio e cloud.

| Dia | Etapa | Descrição |
|-----|--------|-----------|
| **16** | Docker básico | Criar `Dockerfile` e `docker-compose.yml` com backend + frontend. |
| **17** | Teste com containers | Subir ambiente local com `docker compose up`. |
| **18** | Documentação final | Atualizar README com passos de build e execução via Docker. |
| **19** | Preparação AWS | Criar conta AWS Free Tier, configurar EC2 e acesso SSH. |
| **20** | Deploy opcional | Fazer deploy e testar app no browser via IP público. |

---

## ��� Resultado Final

Ao término das 4 semanas, o **Microstack-j** incluirá:

✅ **API REST completa** (Spring Boot + H2/JPA)  
✅ **Frontend Angular funcional** (CRUD de usuários)  
✅ **Integração via HTTP (API RESTful)**  
✅ **Empacotamento full stack (Angular dentro do backend)**  
✅ **Ambiente Dockerizado pronto para deploy**  
✅ **Documentação técnica e README profissional**  
✅ **Versão hospedada opcional na AWS Free Tier**


