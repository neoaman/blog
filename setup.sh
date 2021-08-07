#!/bin/bash
# sudo su
# apt update && apt -y upgrade
# apt-get -y install apache2 
# apt-get -y install libapache2-mod-wsgi-py3
# cd /var/www/
# git clone https://github.com/neoaman/blog.git
# cp deploy.sh ~/
apt-get -y install python3.8
ln -sT /usr/bin/python3 /usr/bin/python
apt -y install python3-pip
ln -sT /usr/bin/pip3 /usr/bin/pip
pip3 install virtualenv
virtualenv /home/ubuntu/venv/sol
source /home/ubuntu/venv/sol/bin/activate
pip install -r requirements.txt
python manage.py migrate
chown www-data:www-data db.sqlite3
chown www-data:www-data /var/www/blog
chown www-data:www-data /var/www/blog/
chown www-data:www-data /var/www/blog/*
chown www-data:www-data /var/www/blog/staticfiles/
chown www-data:www-data /var/www/blog/staticfiles/*
cp custom.conf /etc/apache2/sites-available/
cd /etc/apache2/sites-available/
a2enmod wsgi
a2ensite custom.conf
a2dissite default-ssl.conf
a2dissite 000-default.conf
service apache2 restart