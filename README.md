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
📂 src
 ┣ 📂 usecases               # Casos de uso (Application Layer)
 ┣ 📂 domain                 # Entidades e Repositórios (Domain Layer)
 ┣ 📂 infrastructure         # Infraestrutura (Banco de Dados, Serviços, etc.)
 ┃ ┣ 📂 database             # Prisma ORM e conexão com DB
 ┃ ┣ 📂 repositories         # Implementação dos repositórios
 ┃ ┣ 📂 controllers          # Controllers das rotas
 ┃ ┗ 📂 services             # Serviços externos (ex: envio de e-mail)
 ┣ 📂 presentation           # Interface de entrada (REST, GraphQL, etc.)
 ┣ 📂 test                   # Testes unitários e de integração
 ┗ 📜 main.ts                # Arquivo principal da aplicação

```

## **⚙️ Configuração do Ambiente**

4. Inicie o servidor:

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/backend
```

### 2️⃣ Instale as dependências
```bash 
npm install
```

### 3️⃣ Configure o banco de dados
Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis:
 - **defina a URL do PostgreSQL:**
 ```bash 
 DATABASE_URL="postgresql://usuario:senha@localhost:5432/escola_psicanalise"
 PORT=3000
 JWT_SECRET="sua_chave_secreta"
 ```
### 4️⃣ Executar as migrações do Prisma
```bash
npx prisma migrate dev
```

### 5️⃣ Rodar o servidor
```bash
npm run start:dev
```
A API estará disponível em http://localhost:3000.

## 📊 Modelagem de Dados
A modelagem inclui entidades, relacionamentos e value objects.

### **🔹 Entidades (Entities)**
As entidades representam os principais objetos do domínio.

### 1️⃣ Student (Estudante)

```bash
Tabela: students
---------------------------------
| id (PK)       | UUID         |
| name          | STRING       |
| email         | STRING       |
| cpf           | STRING       |
| created_at    | TIMESTAMP    |
---------------------------------
```
Um estudante tem um ID único, um nome, um email validado e um CPF validado.

*** 2️⃣ Course (Curso)


```bash
Tabela: courses
---------------------------------
| id (PK)       | UUID         |
| title         | STRING       |
| description   | TEXT         |
| created_at    | TIMESTAMP    |
---------------------------------
```
- **Um curso tem um título e uma descrição.**

### 3️⃣ Enrollment (Matrícula)
```bash
Tabela: enrollments
---------------------------------
| id (PK)        | UUID         |
| student_id (FK)| UUID         |
| course_id (FK) | UUID         |
| status         | ENUM         |
| created_at     | TIMESTAMP    |
---------------------------------
```
Um estudante pode se matricular em vários cursos e um curso pode ter vários estudantes (Relacionamento M:N).





```bash
```

```bash
```


O status pode ser ACTIVE, CANCELLED.

🔹 Value Objects
Os Value Objects ajudam a garantir consistência e regras de negócio.

📌 Email
Deve ser validado no momento da criação.

Deve ter um formato válido (exemplo: email@dominio.com).

📌 CPF
Deve ser validado no momento da criação.

Deve seguir a estrutura correta (XXX.XXX.XXX-XX).

🔹 Relacionamentos
1:N → Um estudante pode se matricular em vários cursos.

N:N → Um curso pode ter vários estudantes (através de Enrollment).

plaintext
Copiar
Editar
students (1) 🔁 (N) enrollments (N) 🔁 (1) courses
🎯 Diagrama ER (Entidade-Relacionamento)
lua
Copiar
Editar
+----------------+      +-----------------+      +---------------+
|   Students     |      |   Enrollments   |      |    Courses    |
+----------------+      +-----------------+      +---------------+
| id (PK)       |◀──┐  | id (PK)         |  ┌──▶| id (PK)       |
| name          |   │  | student_id (FK) |  │   | title         |
| email         |   │  | course_id (FK)  |  │   | description   |
| cpf           |   │  | status          |  │   | created_at    |
| created_at    |   │  | created_at      |  │   +---------------+
+----------------+   └──┴────────────────┘
🚀 Principais Regras de Negócio
✅ Um estudante pode se inscrever em múltiplos cursos.
✅ Um curso pode ter vários estudantes.
✅ O email e o CPF do estudante devem ser válidos.
✅ O status da matrícula só pode ter valores predefinidos.

Esse modelo garante uma arquitetura escalável e bem organizada seguindo o DDD. 🚀

