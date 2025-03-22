### **📂 Camadas do Projeto Backend**
O backend do projeto segue uma arquitetura baseada em camadas bem definidas, garantindo modularidade, escalabilidade e facilidade de manutenção.

## **1️⃣ Domain (Domínio)**
📌 A camada de domínio representa as regras de negócio e os conceitos essenciais da aplicação. Esta camada é independente de frameworks e bibliotecas externas.
- **Entities (Entidades): Representam os objetos principais do sistema, como Student, Course e Enrollment, com suas propriedades e comportamentos.**
- **Repositories (Interfaces de Repositório): Definem as operações que podem ser realizadas no banco de dados sem implementar a lógica de acesso.**
- **Value Objects: Representam conceitos imutáveis e específicos do domínio, como Email, CPF e Money.**

@@ **2️⃣ Use Cases (Casos de Uso)**
📌 Contém a lógica de aplicação, orquestrando as regras de negócio do domínio. Aqui ficam os serviços que interagem com os repositórios para executar operações específicas.

**Cada caso de uso encapsula uma funcionalidade, como:
- **EnrollStudentUseCase.ts → Matricular um estudante em um curso**
- **CancelEnrollmentUseCase.ts → Cancelar uma matrícula**
- **CreateCourseUseCase.ts → Criar um novo curso**
- **UpdateStudentUseCase.ts → Atualizar dados do estudante**

Essa camada age como intermediária entre o domínio e as interfaces externas (banco de dados, API REST, etc.), garantindo que a lógica do negócio fique centralizada.

3️⃣ Infrastructure (Infraestrutura)
📌 Responsável por integrar a aplicação com tecnologias externas, como banco de dados, serviços de email, cache e APIs externas.

Database (Banco de Dados): Implementações concretas dos repositórios definidos no domínio, utilizando o Prisma para interagir com o banco.
HTTP (Controllers e DTOs): Controladores que recebem requisições HTTP e interagem com os casos de uso. Aqui também estão os Data Transfer Objects (DTOs) que validam e formatam os dados da API.
Interceptors & Middlewares: Implementações de middlewares e interceptadores para logging, autenticação e outras funções transversais.
Services (Serviços externos): Comunicação com serviços de terceiros, como envio de emails, processamento de pagamentos e armazenamento na nuvem.
4️⃣ Presentation (Apresentação)
📌 Camada de interface com o usuário, lidando com requisições HTTP, WebSockets ou GraphQL.

GraphQL (Resolvers): Implementação de queries e mutations para GraphQL, caso o projeto utilize essa tecnologia.
REST (Controllers): Controladores responsáveis por expor os endpoints da API REST e chamar os casos de uso correspondentes.
WebSocket (Gateways): Comunicação em tempo real via WebSockets para notificações ou chats.
🎯 Resumo
Domain → Define as regras de negócio e os modelos de dados.
Use Cases → Implementa a lógica de aplicação e orquestra chamadas ao domínio.
Infrastructure → Integração com banco de dados, serviços externos e comunicação HTTP.
Presentation → Define como a API é exposta via REST, GraphQL ou WebSockets.
