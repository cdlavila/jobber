# Jobber
This is a REST API built with Hapi JS and Mongodb (using the Mongoose ORM), it's in charge of manage companies, users, jobs and applications (seems to Linkedin).
## Installation
To install the project, we need to have installed the next:
- Node.js 🟢
- Docker and Docker-compose 🐋

If you don't have Node.js installed, you can install it [here](https://nodejs.org/es/)

If you don't have Docker installed, you can install it [following the Docker documentation](https://docs.docker.com/engine/install/)

<blockquote>
<span>
💡
</span>
<span>
If you install Docker Desktop (on Windows and Mac), it comes with docker compose, but if you install it on Linux you must install it separately.
</span>
</blockquote>


#### Step 1
Clone the project
```
$ git clone https://github.com/cdlavila/jobber
```

#### Step 2
Duplicate the `.env.example` file and rename it to `.env`. Then, put your environment variables here.

#### Step 3
Raise the Docker containers, for this you have to run the following command in the terminal, being in the project path.
```bash
$ docker-compose up -d
```
The above command will build a network with the necessary containers for the project to run: mongodb.

#### Step 4
Install dependencies
```bash
$ npm install
```

#### Step 5
Run the server

```bash
$ npm run local
```

#### Step 6
Check server is running, by clicking on the link that appears in the terminal

#### Step 7
Testing endpoints using Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/14110882/2s8YmSrL7w)
