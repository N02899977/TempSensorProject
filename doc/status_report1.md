Status Report #1

Project description By request from the sustainability officer, a group of 6 students (including myself) are using Raspberry Pi computers to collect temperature data from the Bliss residence hall, and compiling the data into a single database for later analysis.

Project goals (overall) To collect at least a month of data, and represent this data graphically on a website.

Your project implementation plans. Deploy about 8 raspberry pis (RPI) around Bliss Have them collect data via cronjob (scheduled task) into sqlite3 database Have Linux Apache MySQL PHP (LAMP) service pull data from RPIs Graphically represent data from LAMP server via JavaScript

How you broke up the project into components – describe each component Jabari- Logistics and Documentation Heidi - Python data collection script and crontjob Brendan - Networking, LAMP server Victoria (other group Liason)- Use flask to convert data from sqlite3 to JSON objects

To be determined - GUI and graphical representation of data

For each component above, describe how much work you have done, and what remains to be done. Include hardware and software used. Jabari - Logistics, 7 of 8 rooms have commited to have RPIs, 1 more person needed. Documentation is incomplete. Only a general schematic is complete. 6 RPIs + 6 Temperature sensors are setup (physically connected)

Summarize your project's “good” and “bad” aspects, “easy” and “tough” aspects, from the group's point of view Good: Decision making is relatively smooth. We now have the physical RPIs, and have the software to collect the data.

Bad: We failed to meet our deploy by April 1 deploy deadline. We also chose to leave all of the networking in the hands of Brendan. This is is slightly disadvantageous because we now rely on Brendan for the networking component. However, Brendan has been punctual. This however, was done out of efficiency and the interest in time. We also chose a networking option that has many "quick and dirty" fixes. This impacts the scalability and portability of our project. Without Brendan, our project is essential in its infancy. We did not evenly distribute the back end responsibilities well. However, the front end aspect will be better distributed.

Describe your goals for the next 3-4 weeks Get the networking setup so that we can deploy the Pis as soon as possible. Begin to develop our GUI and representation of the data.

List group members, and each member's contributions. Jabari - Documentation, coordinating with clients, logistics Heidi - Pythong script and cronjob are written and working. (Will perform bug check) Victoria - Flask is complete, the sqlite3 entries are returning JSON objects as desired Brendan - LAMP server still in progress. static IP address on subnet have been successfully reserved.
