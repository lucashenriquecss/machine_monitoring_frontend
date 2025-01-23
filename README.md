# Frontend Angular para Gerenciamento de Máquinas

Este projeto é uma interface frontend desenvolvida em Angular para gerenciar máquinas industriais. A aplicação consome a API RESTful desenvolvida no backend e apresenta funcionalidades como exibição, cadastro e atualização de dados de máquinas em tempo real.

---

## 🚀 Funcionalidades

1. **Dashboard de Máquinas**
   - Exibe uma lista das máquinas cadastradas, mostrando:
     - Nome da máquina.
     - Localização.
     - Status atual (operando, parada para manutenção, desligada).
   - Atualização do status das máquinas em tempo real usando **WebSockets**.

2. **Cadastro de Máquinas**
   - Página com um formulário para cadastrar uma nova máquina.
   - Validações de formulário (campos obrigatórios e formatos corretos).

3. **Detalhes da Máquina**
   - Página para exibir os detalhes completos de uma máquina específica.
   - Inclui informações como:
     - Identificador único.
     - Nome da máquina.
     - Localização.
     - Status atual.

---

## 🛠 Ferramentas e Tecnologias

- **Framework**: [Angular](https://angular.io/)
- **Linguagem**: TypeScript
- **Gerenciamento de Estados**: RxJS
- **Comunicação com a API**: HttpClient (Angular)
- **WebSockets**: Angular WebSocket API (`@angular/common/http`)
- **Estilização**: CSS,  Material
- **Gerenciamento de Pacotes**: npm

---

## 🎯 Objetivos do Projeto

- Fornecer uma interface interativa e responsiva para o gerenciamento de máquinas.
- Permitir que os usuários interajam com os dados da API em tempo real.
- Criar um fluxo intuitivo para o cadastro e consulta de máquinas.

---

## 🚀 Como Iniciar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

1. **Node.js**  
   - Download: [https://nodejs.org/](https://nodejs.org/)

2. **Angular CLI**  
   - Instale o Angular CLI globalmente:
     ```bash
     npm install -g @angular/cli
     ```
   - Verifique a instalação:
     ```bash
     ng version
     ```

3. **Backend API**  
   - Certifique-se de que a API RESTful de gerenciamento de máquinas esteja configurada e rodando. Consulte o [README do backend](https://github.com/lucashenriquecss/machine_monitoring_backend) para mais detalhes.

---

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/lucashenriquecss/machine_monitoring_frontend.git
2. Instale as dependências
   ```bash
   npm install
3. Lembrete
   #Lembrar de configurar o recebimento do websocket na pasta

4 Iniciar serviço
  ```bash
  ng serve

