#!/usr/bin/python

# tempLog.py
# Heidi Fritz
# Log Current Time, Temperature in Celsius and Fahrenheit
# Puts date, time, temperature in a sqlite3 database(temp.db)

import sqlite3  # must do 'sudo apt-get install sqlite'
import os
from crontab import CronTab  # must do 'sudo pip install python-crontab'
import datetime



# Returns temperature in Celcius and Fahernheit in a list
def getTemp():
        tempfile = open("/sys/bus/w1/devices/28-000006972625/w1_slave")
	tempfile_text = tempfile.read()
	tempfile.close()
	tempC=float(tempfile_text.split("\n")[1].split("t=")[1])/1000
	tempF=tempC*9.0/5.0+32.0
	return [tempC, tempF]

# Returns date and time in a list
def getDatetime():
        # Create date and time strings in Year-Month-Day and Hour:Min:Sec format
        date = datetime.datetime.strftime(datetime.datetime.now(), '%Y-%m-%d')
        time = datetime.datetime.strftime(datetime.datetime.now(), '%I:%M:%S')
        return [date, time]
        
# Creates a database and table to log temperature and time
def logTemp():
        tableName = "Temp"
        databaseName = '/home/pi/Documents/EmbeddedLinux/ELSpring2016/code/temp.db'
        
	# connect to database
        conn = sqlite3.connect(databaseName)
        print "Opened database successfully."
        print "Currently working in " + databaseName

        # check if the table 'Temperature' already exists
        cursor = conn.cursor()
        
        query = cursor.execute("SELECT COUNT(*) FROM sqlite_master WHERE type = 'table' AND name = '%s';"
                               %tableName)
        exists = cursor.fetchone()[0]  # fetches result of query
        if not(exists):
           # there are no tables named 'Temperature'
           conn.execute("CREATE TABLE %s(DATE TEXT, TIME TEXT, TEMPC INTEGER, TEMPF INTEGER);"
                        %tableName)
           print "Table created."
           conn.execute("INSERT INTO %s(DATE,TIME,TEMPC,TEMPF) VALUES (?, ?, ?, ?);"
                        %tableName, (getDatetime()[0], getDatetime()[1], getTemp()[0], getTemp()[1]))
           conn.commit()
           print "Temp recorded in " + tableName + "."
        else:
           # there is a table named 'Temperature'
           conn.execute("INSERT INTO %s(DATE,TIME,TEMPC,TEMPF) VALUES (?, ?, ?, ?);"
                        %tableName, (getDatetime()[0], getDatetime()[1], getTemp()[0], getTemp()[1]))
           conn.commit()
           print "Temp recorded in" + tableName + "."
              
        conn.close()

        return 0

# Creates a cron job to run this file
def createJob():
        cron = CronTab(user='root')
        job = cron.new(command='sudo python /home/pi/Documents/EmbeddedLinux/ELSpring2016/code/tempLog.py')
        job.minute.every(1)
        job.enable()
        cron.write()
        if cron.render():
            print cron.render()
        print "CronJob created."
        return 0

# Checks for a cron job. Calls createJob() if job exists otherwise calls logTemp()
def run():
        cron = CronTab(user='root')
        # check if cronjob exists
        if not cron.render():    
            createJob()
        else:
            logTemp()
        return 0

run()
