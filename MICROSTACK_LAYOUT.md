Microstack-J/
│
├── README.md
├── MICROSTACK_PLAN.md
│
├── docs/
│   ├── architecture/
│   │   ├── system_overview.png
│   │   ├── microstack_cluster_local.png
│   │   ├── docker_kubernetes_relationship.png
│   │   └── diagrams_notes.md
│   │
│   ├── api/
│   │   └── swagger_openapi_specs.yaml
│   │
│   └── guides/
│       ├── setup_local_env.md
│       ├── dev_workflow.md
│       └── deployment_steps.md
│
├── src/
│   ├── users/
│   │   ├── app/
│   │   │   ├── main.py
│   │   │   ├── routes/
│   │   │   └── services/
│   │   ├── tests/
│   │   ├── requirements.txt
│   │   └── Dockerfile
│   │
│   ├── orders/
│   ├── payments/
│   ├── notifications/
│   └── inventory/
│
├── infra/
│   ├── docker/
│   │   ├── docker-compose.yml
│   │   └── env/
│   │       ├── dev.env
│   │       └── test.env
│   │
│   ├── k8s/
│   │   ├── users-deployment.yaml
│   │   ├── orders-deployment.yaml
│   │   ├── services.yaml
│   │   ├── ingress.yaml
│   │   └── namespace.yaml
│   │
│   ├── ci-cd/
│   │   ├── github-actions.yml
│   │   └── render-deploy.yml
│   │
│   └── terraform/
│       └── main.tf
│
├── tests/
│   ├── integration/
│   ├── performance/
│   └── unit/
│
└── scripts/
    ├── init_project.sh
    ├── run_local_cluster.sh
    └── cleanup_env.sh

