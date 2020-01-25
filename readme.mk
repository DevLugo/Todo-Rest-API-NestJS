# TODO REST-API-JWT-Authentication with NestJS/Typescript 
A Simple Rest API for a TODO-List with JWT-Authentication
### Tech
We uses a number of open source projects to work properly:

* [NestJs] - NestJs
* [TypeScript] - TypeScript
* [TypeORM] - ORM for Sql database
* [PassportJs] - Authentication library
* [dotenv] - python-dotenv
* [docker] - docker
* [docker-compose] - docker-compose

### Installation

This boilerplate requires [Python](https://nodejs.org/) v3.6+ to run.

Run the docker container wirh the following commands.

```sh
$ cd Flask-Docker-SQLAlchemy-Tests
$ docker-compose up -d
$ docker exec -it {dockerid} bash
```

And you need to modify the database conexion variables at ./app/.env file

### Run (Inside on the docker container)

```sh
$ ./start.sh
```

### Migrations (Inside on the docker container)
You need to create the db mannualy and then, write this on the terminal:

```sh
$ flask db init
$ flask db migrate
$ flask db upgrade
```
and done, this command create the full tables on the db

### Testing
For testing purpose we use a diferente database.This databas will be empty because for every test the tables will'be create and delete.
```sh
$ python tests.py
```

  [NestJs]: <https://nestjs.com/>
  [TypeScript]: <https://www.typescriptlang.org/>
  [TypeORM]: <https://typeorm.io/>
  [PassportJs]: <http://www.passportjs.org//>
  [NodeJs]: <https://nodejs.org/es/>
  [dotenv]: <https://www.npmjs.com/package/dotenv>
  [docker]: <https://www.docker.com/>
  [docker-compose]: <https://docs.docker.com/compose/>
  
  
  By Rodolfo Lugo
  

 
