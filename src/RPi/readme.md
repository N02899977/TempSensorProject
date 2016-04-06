<p>All source files that run on the Raspberry pi are included in this folder</p>

<p>index.py sets up the flask server on the pi and converts the data from the SQLite database into json.  
The json is put onto the flask server. </p>

<p>json_push.py Creates the json post to push to the LAMP server.</p>

<p>logTemp.py is a script that logs the temperature with a Raspberry Pi which uses SQLite to store data read from a DS18B20 sensor.  
It creates a cronjob when it is run for the first time and gets the temperature every 10 mintues.</p>
