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
- duration: number; (in minutes)
- course_id: string;
- video_id: string;

---

## Rotas

### Não autenticadas

<br/>

```HTTP
GET /courses
```
*exibe todos os cursos disponíveis.*

```HTTP
GET /courses/:id/lessons
```
*exibe todas as aulas de um curso específico*

---

### Autenticadas

<br/>

**Courses**

```HTTP
POST /courses
```
*Cria um novo curso*

```HTTP
PUT /courses/:id
```
*Atualiza um curso existente*

**Lessons**

```HTTP
POST /lessons
```
*Cria uma nova aula em um curso*

```HTTP
PUT /lessons/:id
```
*Atualiza uma aula existente*
