# Heroku

## Creating Rails, React, MySQL Heroku App

1. Create Heroku app: `heroku create _YOURAPPNAME_`
2. Add MySQL Heroku add-on (For example: JawsDB)
3. Create config var `DATABASE_URL` and set equal to the MySQL url string from the add-on
4. Update config var `DATABASE_URL` to begin with adapter `mysql2`
5. Push to Heroku: `git push _REMOTENAME_ _LOCALBRANCHNAME_:_REMOTEBRANCHNAME_` (*Build will probably fail - this is OK*)
6. Add proper buildpacks for React and Ruby:

    `$ heroku buildpacks:clear -r _REMOTENAME_`
    `$ heroku buildpacks:set heroku/nodejs -r _REMOTENAME_`
    `$ heroku buildpacks:add heroku/ruby --index 2  -r _REMOTENAME_`

7. Push to Heroku: `git push _REMOTENAME_ _LOCALBRANCHNAME_:_REMOTEBRANCHNAME_`
8. Set remaining Heroku config vars
9. Run migration: `heroku run rake db:migrate -r _REMOTENAME_`


## Deploying to Heroku

Deployment generally follows the standard process.  A possible issue are the overlapping package managers of yarn and npm.  If there is an issue with yarn and npm, the console will instruct you, as follows:

1. If present in repo, delete: `package-lock.json`
2. Run: `yarn install`
3. Prepare commit: `git add yarn.lock`
4. Commit: `git commit -m "Updated Yarn lockfile"``
5. Push to Heroku: `git push _REMOTENAME_ _LOCALBRANCHNAME_:_REMOTEBRANCHNAME_`     


# Rails Starter Kit

Rails Starter Kit was created as a way to save time when starting a new Rails project. We have taken the most common functionality and configuration in our existing Rails projects, and put those into this project. Simply clone this project, and change the git remote to your remote repository. Rails Starter Kit is ready to host on Heroku.

## Start using Rails Starter Kit

1. Create a new repository on GitHub, BitBucket, or your own server
2. Create a directory for your new project, and go into it
3. Clone Rails Starter Kit into your new folder
4. Change the git remote to your new repository
5. Push changes

After creating the new repository, follow these steps in the terminal:

	$ mkdir demo
	$ cd demo
	$ git clone git@github.com:codeisstandard/rails-starter-kit.git .
	$ git remote set-url origin git@github.com:[org/repo.git]
	$ git push origin master


To update the following files with your project name, run the following command in the terminal:

  $ rake project:setup

  This will update:

  - README.md
  - app/views/layouts/application.html.erb
  - config/database.yml
  - config/initializers/session_store.rb
  - config/application.rb

Just a couple more things before you dive in:


- Update the mailer host in `config/environments/development.rb` and `config/environments/production.rb`

If everything goes well, you should be ready to start work on your new project.

## Out-of-the-box functionality

- Bootstrap with SASS
- Procfile and 12factor gem for Heroku compatibility
- Environment variables
- Upload to S3
- Sidekiq configuration for background processing
- User authentication via [Devise](https://github.com/plataformatec/devise)
- Mailer configuration
- Flash message placeholders

## References

Also check out Rails Best Practices: https://github.com/codeisstandard/rails-best-practices
