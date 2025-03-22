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
#### 3️⃣ Configurar variáveis de ambiente
 - **Crie um arquivo .env e defina a URL do PostgreSQL:**
 ```bash 
 DATABASE_URL="postgresql://usuario:senha@localhost:5432/escola_psicanalise"
 PORT=3000
 JWT_SECRET="sua_chave_secreta"
 ```
   - **Rode as migrações:**



