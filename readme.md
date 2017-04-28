## Torg
Project running PHP7 using the <a href="laravel.com">Laravel Framework</a>

<a href="http://torg.samuelstenton.com">Live Site</a>

<a href="https://samstenton.github.io/torg-software-engineering/">Documentation</a>

### Setup Instructions
 You'll need the following installed on your system: 

 * PHP
 * <a href="https://getcomposer.org/">Composer</a> (Package Management)
 * A MYSQL server

Clone the Github repo

```
git clone https://github.com/SamStenton/torg-software-engineering
```

The projects dependancies will need to be installed via composer. Run the following command.
```
composer update
```

Included will in the cloned repo is a example.env. This should be renamed to `.env` and edited to suit your needs. Most importantly your database credentials should be entered here.

In order to have real time communication via WebSockets a Pusher.com account should be created. This is free. Create a project on Pusher and copy your credentials into the `.env` file.

Before accessing the website the relevant tables need to be created. To do this open your terminal/command prompt and change directory into the project folder. The following command will run all database migrations providing your credentials have been entered correctly.
```
php artisan migrate
```

After this step setup is complete. You can access your website via a web browser and create your first account. 


### Contribution
To make changes to the project you'll need to install the local development suite. This can be done with this command:
```
npm install
```

The project uses ES6 Javascrip and SCSS/SASS for styling. Source files can be located in `torg/resources`. For your changes to these files to be shown on the site you will need to run `npm run dev` which will convert ES6 code into more widely supported ES2015 code and any `.scss` files into a single .css file. The generated files are located within the `public` directory. 

Running `npm run dev` on every change to the frontend code can become tiresome and take up lots of time. If you use the `npm run watch` command instead your code will be re-compiled on each save and any browsers automatically realoaded using <a href="https://www.browsersync.io/">browsersync</a>. 
