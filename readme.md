## Torg
Project running PHP7 using the <a href="laravel.com">Laravel Framework</a>

### Setup Instructions
 You'll need the following installed on your system: 

PHP, Composer (package management), access to a mysql database

Clone the Github repo

```
git clone https://github.com/SamStenton/torg-software-engineering
```

Included will in the cloned repo is a example.env. This should be renamed to `.env` and edited to suit your needs. Most importantly your database credentials should be entered here.

In order to have real time communication via WebSockets a Pusher.com account should be created. This is free. Create a project on Pusher and copy your credentials into the `.env` file.

Before accessing the website the relevant tables need to be created. To do this open your terminal/command prompt and change directory into the project folder. The following command will run all database migrations providing your credentials have been entered correctly.
```
php artisan migrate
```

After this step setup is complete. You can access your website via a web browser and create your first account. 




