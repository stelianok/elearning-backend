# Estrutura do Banco de dados

## Tabelas

### Users

- id: string
- name: string
- email: string;
- password: string;


### Courses

- id: string;
- name: string;
- image: string;

### Lesson

- id: string;
- name: string;
- order: number;
- duration: number; (in minutes)
- course_id: string;
- video_id: string;

---

## Rotas

### Não autenticadas

<br/>

**Courses**

```HTTP
GET /courses
```
*exibe todos os cursos disponíveis.*

```HTTP
GET /courses/:id/lessons
```
*exibe todas as aulas de um curso específico*

```HTTP
GET /courses/:id/lessons/:lesson_id
```
*exibe uma aula específica de um curso específico*

**Users**

```HTTP
POST /users
```
*Cadastra um novo usuário administrador*

---

### Autenticadas

<br/>


**Users**

```HTTP
GET /users
```
*Lista todos os usuários*

```HTTP
DELETE /users
```
*Deleta usuário*


**Courses**

```HTTP
POST /courses
```
*Cria um novo curso*

```HTTP
PUT /courses/:id
```
*Atualiza um curso existente*

```HTTP
DELETE /courses/:id
```
*Deleta um curso*

**Lessons**

```HTTP
POST /lessons
```
*Cria uma nova aula em um curso*

```HTTP
PUT /lessons/:id
```
*Atualiza uma aula existente*

```HTTP
DELETE /lessons/:id
```
*Atualiza uma aula existente*
