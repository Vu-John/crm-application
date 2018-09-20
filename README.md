## Customer Relationship Management (CRM) Application

![crm_application](https://user-images.githubusercontent.com/15070059/45058677-5e98ea80-b067-11e8-9d34-d0a02472ff7b.gif)

This is a barebones CRM application that consists of a *__dashboard, customer table, customer page, and public api pages__*. The styling of the UI is built upon [material-dashboard-react](https://github.com/creativetimofficial/material-dashboard-react).

### Getting Started

### Installing

Make sure you have [Ruby](https://www.ruby-lang.org), [Bundler](http://bundler.io) and [Node.js](https://nodejs.org/en/) installed.

1. Install server dependencies `bundle install` (*Note: Make sure to have the same version of Ruby and Rails as the project*)
2. Install server dependencies for Heroku (optional)`npm install`
3. Install client dependencies `cd client && npm install` (*Note: remember to return to root after installation has finished* `cd..`)
4. Start PostgresSQL server (Mac: [Postgres.app](https://postgresapp.com/), Windows: [EDBPostgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads))
5. Run migrations `rake db:create db:migrate db:seed`
6. Run the application `bin/rake start`

### Deploying to Heroku

Make sure you have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed

```sh
heroku create <name_of_application>
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
git push heroku master
heroku run rake db:migrate db:seed
heroku open
```

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### System Architecture/Class Diagram:
### Layered Architecture

![crm_architecture](https://user-images.githubusercontent.com/15070059/45062205-eb4aa500-b075-11e8-99aa-a2595d57037b.png)


## Features
### Creating a new customer:
![crm_new_customer](https://user-images.githubusercontent.com/15070059/45002164-dac8fa80-afa1-11e8-93d3-46e9528df42d.gif)
- Features dynamic dashboard components that automatically update based on number of customers and customer status

### Writing a customer note:
![crm_new_note](https://user-images.githubusercontent.com/15070059/45002214-8f631c00-afa2-11e8-9bba-740357ffd150.gif)
- The notes component stores notes for specific customer

### Change customer status:
![crm_change_status](https://user-images.githubusercontent.com/15070059/45002369-f33a1480-afa3-11e8-892f-c040663f5e66.gif)
- Edit customer information as well as status
- Edited customer status will be reflected in the dashboard

### Public API:
<img width="1405" alt="crm_api_docs" src="https://user-images.githubusercontent.com/15070059/45061260-b0df0900-b071-11e8-9b56-f11c51971b80.png">

### Built With

* __Frontend:__ [ReactJS](https://reactjs.org/)
* __Backend:__ [Ruby 2.4.0](https://www.ruby-lang.org/en/news/2016/12/25/ruby-2-4-0-released/), [Rails 5.1.4](https://rubygems.org/gems/rails/versions/5.1.6)
* __Database:__ PostgresSQL 10
