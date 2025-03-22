# 📌 Documentação do Backend - Plataforma de Cursos Online

## 📖 Introdução
Este é o backend de uma plataforma de cursos online, desenvolvido utilizando NestJS. O sistema permite o gerenciamento de alunos, cursos e matrículas, incluindo funcionalidades como cadastro, listagem, edição e exclusão.
### **🛠 Tecnologias Utilizadas**
- **NestJS - Framework backend**
- **Prisma ORM - Interação com banco de dados**
- **PostgreSQL - Banco de dados relacional**
- **Jest - Testes unitários**
- **Railway - Hospedagem do backend**

## 📂 Estrutura do Projeto
```bash
src/
├── common/                   # Código compartilhado entre módulos
│   ├── dto/                  # Objetos de transferência de dados (DTOs)
│   ├── filters/              # Filtros (por exemplo, filtros de exceções)
│   ├── guards/               # Guards de autenticação, autorização
│   ├── interceptors/         # Interceptadores (ex: para logs, métricas)
│   └── pipes/                # Pipes de validação, transformação de dados
├── modules/                  # Módulos específicos do sistema
│   ├── students/             # Módulo de gestão de alunos
│   │   ├── application/      # Casos de uso, serviços
│   │   │   ├── create-student.use-case.ts
│   │   │   └── get-student.use-case.ts
│   │   ├── domain/           # Lógica de negócios (entidades, repositórios)
│   │   │   ├── entities/     # Entidades (ex: Student)
│   │   │   └── repositories/ # Repositórios (ex: StudentRepository)
│   │   ├── infrastructure/   # Implementações específicas (ex: banco de dados)
│   │   │   └── student.repository.ts
│   │   ├── interfaces/       # Interfaces públicas
│   │   └── student.module.ts # Definição do módulo
│   ├── courses/              # Módulo de cursos
│   │   ├── application/
│   │   ├── domain/
│   │   ├── infrastructure/
│   │   └── course.module.ts
│   ├── enrollments/          # Módulo de matrículas
│   │   ├── application/
│   │   ├── domain/
│   │   ├── infrastructure/
│   │   └── enrollment.module.ts
│   └── payments/             # Módulo de pagamentos
│       ├── application/
│       ├── domain/
│       ├── infrastructure/
│       └── payment.module.ts
├── config/                   # Configurações globais (ex: banco de dados, JWT)
│   ├── database.config.ts
│   └── jwt.config.ts
├── main.ts                   # Arquivo de entrada da aplicação
├── app.module.ts             # Módulo raiz da aplicação
└── shared/                   # Utilitários compartilhados
    ├── logger.ts             # Configurações de log
    └── validation.pipe.ts    # Validação de requisições

```

## **⚙️ Configuração do Ambiente**
1. Clone o repositório:
2. Instale as dependências:
3. **Configure o banco de dados:**
   - **Crie um arquivo .env e defina a URL do PostgreSQL:**
   - **Rode as migrações:**
4. Inicie o servidor:

