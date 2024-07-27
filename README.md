# Sistema de Gestão de Tarefas

## Descrição do Projeto
O Sistema de Gestão de Tarefas é uma aplicação back-end desenvolvida com Node.js, Express, TypeScript e Prisma ORM. Este projeto tem como objetivo fornecer uma plataforma robusta para o gerenciamento de tarefas, permitindo que os usuários criem, atualizem, visualizem e excluam tarefas de forma eficiente.

## Tecnologias Utilizadas
- Node.js: Plataforma de desenvolvimento para construir aplicações de rede rápidas e escaláveis.
- Express: Framework web minimalista para Node.js que facilita a criação de APIs RESTful.
- TypeScript: Superset do JavaScript que adiciona tipagem estática ao código, melhorando a manutenção e a escalabilidade.
- Prisma: ORM moderno que simplifica a interação com bancos de dados relacionais, utilizando um modelo de dados intuitivo e migrações automatizadas.
- PostgreSQL: Banco de dados relacional utilizado para armazenar as informações das tarefas e usuários.



### Funcionalidades
- **Criação de Tarefas**: Permite que os usuários criem novas tarefas especificando título, descrição e prioridade.
- **Atualização de Tarefas**: Permite que os usuários atualizem os detalhes das tarefas existentes, incluindo título, descrição e prioridade.
- **Listagem de Tarefas**: Permite que os usuários visualizem todas as tarefas cadastradas, ordenadas por prioridade.
- **Relacionamento Usuário-Tarefa**: Cada tarefa é associada a um usuário específico, garantindo a integridade e organização dos dados.


### Futuras implementação
- **Filtragem de Tarefas**: Permite que os usuários filtrem tarefas com base na prioridade.

## Estrutura do Projeto
- Controllers: Contém a lógica de controle das rotas, gerenciando as requisições e respostas da API.
- Services: Contém a lógica de negócios e interação com o banco de dados através do Prisma.
- Prisma: Definem a estrutura dos dados utilizando o Prisma ORM.


### Como Executar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/diego-goncalves-dev/task-management-system.git
   ```

2. Instale as dependências:
   ```sh
   cd task-management-system
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione sua URL de conexão com o PostgreSQL:
     ```sh
     DATABASE_URL="sua_url_de_conexao_postgresql"
     ```

4. Execute as migrações do Prisma para criar as tabelas no banco de dados:
   ```sh
   npx prisma migrate dev --name init
   ```

5. Inicie o servidor:
   ```sh
   npm run dev
   ```































