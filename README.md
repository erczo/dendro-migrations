# Dendro Migrations

TODO: Briefly describe this repo and Project Dendro


## Instructions

1. Be sure you have Node version 6.5.x. If you’re using nvm, you may need to `nvm use 6.5.0`.

2. Clone this repo.

3. Install the migration tool via `npm install -g migrate-mongo`. See [migrate-mongo](https://github.com/seppevs/migrate-mongo) for more information.

4. Make this project directory the current directory, i.e. `cd dendro-migrations`.

5. If all goes well, you should be able to run the predefined package scripts.


## To build and publish the Docker image

1. Make this project directory the current directory, i.e. `cd dendro-migrations`.

2. Build the project `docker build -t dendro:dendro-migrations .`.

3. Tag the desired image, e.g. `docker tag f0ec409b5194 dendro/dendro-migrations:latest`.

4. Push it via `docker push dendro/dendro-migrations`.
