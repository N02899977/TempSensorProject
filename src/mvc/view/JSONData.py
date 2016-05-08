import urllib2
import json
import csv
import xlwt

#Write data to .csv file and .xls file
def writeData(data):
 
    #Load JSON data 
    theJSON = json.loads(data)
    #Create temp.csv file
    tempFileWriter = csv.writer(open("temp.csv", "wb+"))
    tempFileWriter.writerow(["Time                 "+ "Temp C   "+ "Temp F "])
       
    #Add data to the .csv file 
    
    try:
        count = 0
        while (True):  #Loop until out of bounds
            tempFileWriter.writerow([theJSON["info"][count]["time"] + "  " +  
                                 theJSON["info"][count]["tempC"] + "  " +
                                 theJSON["info"][count]["tempF"]])    
            count = count + 1
    except IndexError:
        print ".cvs created"
    
        
    #Add data to the .xls file
    wb = xlwt.Workbook()             
    tempData = wb.add_sheet('Temp Data')
    tempData.write(0, 0, "Time")        #Time Header
    tempData.write(0, 1, "Temp C")      #Temp C Header
    tempData.write(0, 2, "Temp F")      #Temp F Header
    try:
        count = 1
        while (True):  #Loop until out of bounds
            tempData.write(count, 0, theJSON["info"][count]["time"])    #Time Column
            tempData.write(count, 1, theJSON["info"][count]["tempC"])   #Temp C Column
            tempData.write(count, 2, theJSON["info"][count]["tempF"])   #Temp F Column
            count = count + 1
    except IndexError:
        print ".xls created"
        
    wb.save("temp.xls")     #Save .xls file to "temp.xls"
    
    print "Created .cvs & .xls for Bliss Hall Room " + theJSON["room"]
               
def main():
    room = input("Input Room Number (for B03 type in 03 & for OUTSIDE type in 0) ")  #Input room number to create new .csv and .xls files
    
    if room == 03:      #Bliss RM B03
       urlData = "http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=B03" 
    
    if room == 108:     #Bliss RM 108
       urlData = "http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=108" 
    
    if room == 120:     #Bliss RM 120
       urlData = "http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=120" 
     
    if room == 209:     #Bliss RM 209
       urlData = "http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=209" 
       
    if room == 223:     #Bliss RM 223
       urlData = "http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=223" 
    
    if room == 308:     #Bliss RM 308
       urlData = "http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=308" 
       
    if room == 323:     #Bliss RM 323
       urlData = "http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=323"    
       
    if room == 0:       #Bliss OUTSIDE
       urlData = "http://cs.newpaltz.edu/~loweb/pi/api/climate.php?climate=true&building=BLI&room=OUTSIDE" 
       
    #Check if URL is valid        
    webUrl = urllib2.urlopen(urlData)
    if (webUrl.getcode() == 200):
        data = webUrl.read()
        writeData(data)
    else:
        print "Recieved an error from server, cannot retrieve results " + str(webUrl.getcode)
        
#Start main()    
if __name__ == "__main__":
    main()
     