# Blog 
## Link https://blog.aman.solutions
## Initiating the projects   
`mkdir vlog` #Create a directory **vlog** for the project   
`cd vlog`   
`django-admin startproject blog` # Start a django project with name **blog**   
`npx create-react-app frontend --template cra-template-pwa` # Start a react project with name **frontend**   

## Update Settings for Django and React project    
- Update settings.py   
    <s>
    ```python
    STATIC_URL = '/static/'
    ```
    </s>

    ```python
    STATIC_URL = '/stuck/'

    STATICFILES_DIRS = [BASE_DIR/'frontend'/'build'/'static']
    STATIC_ROOT = BASE_DIR/'static'
    FRONTEND_ROOT = BASE_DIR/'frontend'/'build'
    ```
    and also add the template directory   
    ```py
    TEMPLATES = [
        {
            ...
            'DIRS': [BASE_DIR / "frontend" / "build"],
            ...
        }
    ]
    ```
- Update urls.py   
    ```python
    from django.contrib import admin
    from django.urls import path,re_path,include

    from django.conf import settings
    from django.views.static import serve
    from django.views.generic import TemplateView

    admin.site.site_header = "Aman Solutions"
    admin.site.index_title = "Vlog CMS"
    admin.site.site_title = "Vlog Dashboard"

    urlpatterns = [
        path('admin/', admin.site.urls),

        re_path(r'^$', TemplateView.as_view(template_name="index.html"), name='home'),
        re_path(r'^stuck/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}), # Local Static Files
        re_path(r'^(?P<path>.*)$', serve, { 'document_root': settings.FRONTEND_ROOT }),  # For Frontend files
    ]
    ```
- Generate requirements.txt   
    `pip freeze > requirements.txt`   
- Update package.json   
    ```json
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build && (cd ../ && echo yes | python manage.py collectstatic)",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "(cd ../ python manage.py runserver)"
    }
    ```
## Initiate a empty Repository   
- Remove .git and .gitignore from frontend   
    ```
    (cd frontend && rm -r .git && rm -r .gitignore)
    ```
- Add a .gitignore file   
    ```md
    ### Django ###
    *.log
    *.pot
    *.pyc
    __pycache__/
    local_settings.py
    db.sqlite3
    db.sqlite3-journal

    # PEP 582; used by e.g. github.com/David-OConnor/pyflow
    __pypackages__/

    # Celery stuff
    celerybeat-schedule
    celerybeat.pid

    # Environments
    .env
    .vscode
    .venv

    ### react ###
    .DS_*
    logs
    **/*.backup.*
    **/*.back.*

    node_modules
    bower_components

    *.sublime*
    psd
    thumb
    sketch

    # Shell scripts
    connect.sh
    build.sh

    # End of https://www.toptal.com/developers/gitignore/api/django,react
    ```
- Initiate a new repository.   
    ```
    git init
    ```
- Add remote repository   
    ```
    git remote add origin https://github.com/neoaman/vlog.git
    ```
- Create build.sh for production work   
    ```sh
    (cd frontend && npm run build)
    echo yes | python manage.py collectstatic
    git add .
    git commit -m "$1"
    ```
- Push the repository with latest build.
    ```
    ./build.sh "Initial Commit"
    ```

## Additional Setups for Server   
- Add custom.conf file for apache2   
    ```md
    <VirtualHost *:80>
            
        ServerName blog.aman.solutions

        DocumentRoot /var/www/vlog
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        <Directory /var/www/vlog/static>
            Order allow,deny
            Allow from all
            Require all granted
        </Directory>

        <Directory /var/www/vlog/blog>
            <Files wsgi.py>
                Require all granted
            </Files>
        </Directory>

        WSGIDaemonProcess aman_solutions_project python-path=/var/www/vlog/ python-home=/home/ubuntu/venv/sol
        WSGIProcessGroup aman_solutions_project
        WSGIScriptAlias / /var/www/vlog/blog/wsgi.py application-group=%{GLOBAL}

    </VirtualHost>
    ```
- Add setup.sh to install dependency in server   
    ```sh
    # sudo su
    # apt update && apt -y upgrade
    # apt-get -y install apache2 
    # apt-get -y install libapache2-mod-wsgi-py3
    # cd /var/www/
    # git clone https://github.com/neoaman/blog.git
    cp deploy.sh ~/
    apt-get -y install python3.8
    ln -sT /usr/bin/python3 /usr/bin/python
    apt -y install python3-pip
    ln -sT /usr/bin/pip3 /usr/bin/pip
    pip3 install virtualenv
    virtualenv /home/ubuntu/venv/sol
    source /home/ubuntu/venv/sol/bin/activate
    pip install -r requirements.txt
    chown www-data:www-data db.sqlite3
    chown www-data:www-data /var/www/blog
    chown www-data:www-data /var/www/blog/
    chown www-data:www-data /var/www/blog/*
    python manage.py migrate
    cp custom.conf /etc/apache2/sites-available/
    cd /etc/apache2/sites-available/
    a2enmod wsgi
    a2ensite custom.conf
    a2dissite default-ssl.conf
    a2dissite 000-default.conf
    service apache2 restart
    ```
- Add connect.sh to connect to and activate.sh to activate the environment(Optional)   
    ```
    ssh -i "/media/xxx/xxx/xxx/xxx/xxx.pem" ubuntu@xxx.xxx.xxx.xxx.xxx.compute.amazonaws.com
    ```   
## Initial Hosting Procedure   
- Open the production server   
    ```
    /connect.sh
    ```
    > or manually using putty
- Run the command below one by one
    ```
    sudo su
    apt update && apt -y upgrade
    apt-get -y install apache2 
    apt-get -y install libapache2-mod-wsgi-py3
    cd /var/www/
    git clone https://github.com/neoaman/vlog.git
    cd vlog
    source setup.sh
    ```

# Use of shell script   
```sh
#!/bin/bash
# trap echo "mycleanup" EXIT

server="ubuntu@ec2-34-222-33-198.us-west-2.compute.amazonaws.com"
key="/media/aman/Study/WEBSITES/Credential/solution.pem"

case $1 in 

    activate|a )
        # source /home/ubuntu/venv/sol/bin/activate;;
        workon sol;;

    build|b )
        echo "Building ..." ;
        (cd frontend && npm run build);;

    connect|c )
        echo "Connecting to production Server ... ";
        ssh -i "$key" "$server";;

    deploy|d )
        echo Deploying ... ;

        msg="$2"
        if [ -z "$msg" ]
        then echo -n 'Write your commit :- ' ; read msg;
        fi
        git add . ;
        git commit -m "$msg" ;
        git push origin master ;;

    kill|k )
        echo "Kill backend..";
        kill $(lsof -t -i:8000) ;
        kill $(lsof -t -i:3000) ;;

    push|p)
        echo "Pushing to master ... ";
        msg="$2"
        if [ -z "$msg" ]
        then echo -n 'Write your commit :- ' ; read msg;
        fi
        git add . ;
        git commit -m "$msg" ;
        git push origin master ;;
        
    start|s )
        echo "Starting Development Server ...";
        python manage.py runserver & (cd frontend && npm start) ;;

    serve ) 
        (cd frontend && serve -s build) ;;

    server )
        echo Starting django Server ...;
        python manage.py runserver;;




    # pyout )
    #     echo "Python output ...";
    #     trail -f /proc/$(lsof -t -i:8000)/fd/1 ;;

    * ) 
        echo "Cant understand";;
esac
```

# Head Ache   
## Django CORS   
Edit [settings.py](vlog/settings.py)   
```python
CORS_ORIGIN_WHITELIST = ['http://localhost:3000'] 
# OR
CORS_ALLOW_CREDENTIALS = True 
# OR
CORS_ORIGIN_ALLOW_ALL=True 
# OR
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

MIDDLEWARE = [
           'corsheaders.middleware.CorsMiddleware',
             ....
              ]

INSTALLED_APPS = [
               ....
             'corsheaders',
               .....
                ]

```
## React homepage and proxy   
Edit [package.json](frontend/package.json)   
```json
  "homepage": "http://127.0.0.1:8000",
  "proxy": "http://127.0.0.1:8000",
```

## Using Python Decouple for env variables   

```python
from decouple import config

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = config('SECRET_KEY',"sUpErSeCrEtKeY")

DEBUG = config('DEBUG', default=False, cast=bool)

ALLOWED_HOSTS = [config('HOST',default='127.0.0.1'),config('DOMAIN',default='localhost')]
```
.env file for local   
```env
DEBUG = True
```
.env for server   
```env
SECRET_KEY = xxxxxxxxxx Secret key xxxxxxxxxxxx
DEBUG = False
DOMAIN = xxx.xxx.com
HOST = xxx.xxx.xxx.163
```

## For collect static and serving static files in prod
Create a setting_prod
```python
from .settings import *

STATICFILES_DIRS = [BASE_DIR/'frontend'/'build'/'static']
STATIC_ROOT = BASE_DIR / "staticfiles"
```
change the collect static function in package.json
```json
"build": "react-scripts build && (cd ../ && echo yes | python manage.py collectstatic --settings=vlog.setting_prod)",
```
Change wsgi.py 
from 
`os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vlog.settings')`
to
`os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vlog.setting_prod')`

## Solve problems from PWA
Maskable icon manifest.json
