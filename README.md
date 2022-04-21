# Projeto 3 - Projetos de Sistemas Web II

Essa é uma API simplificada de encontro de alunos (meets). Ela possui 1 teste simples (utilizando Jest); 1 sistema de login (JWT); 3 CRUDs de entidades, que funcionam por co-relação (cardinalidades); e 1 sistema de autorização e autenticação (middleware).

## Students

GET /students

POST /students/create

GET /students/:id

PUT /students/:id/update

DELETE /students/:id/delete

POST /students/login

## Topics

GET /topics

POST /topics/create

GET /topics/:id

DELETE /topics/:id/delete

## Meets

GET /meets

POST /meets/create

GET /meets/:id

DELETE /meets/:id/delete
