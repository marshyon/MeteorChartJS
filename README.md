## Meteor & ChartJS

using the word colour and Blaze templates

This is a Meteor application using Blaze templates to render an instnace of a
(ChartJS)[http://www.chartjs.org/]


### Download and run

download or clone this repository

change to its dirececory and install meteor if not already installed (for linux / mac):

        curl https://install.meteor.com/ | sh

for windows, see http://www.meteor.com/install and the 'windows' link

setup & run the app:

        meteor npm install 
        
        meteor -p 3333

open browser on http://localhost:3333

### Modifying Data in MongoDB

The graph should re-draw dynamically when changes are made in MongoDB

#### Listing current data

open a shell to mongo in the directory of the app:

        meteor mongo

and query the existing data, automatically inserted for us in server startup 
if not already there :

```
meteor:PRIMARY> db.number_data.find()
{ "_id" : "xkZw9RKrqLCrND7wx", "numKey" : "colourNums1", "Red" : 10, "Blue" : 12, "Yellow" : 20, "Green" : 5, "Purple" : 4, "Orange" : 4 }
{ "_id" : "QPjqhtnYZLGSiTziq", "numKey" : "colourNums2", "Red" : 1, "Blue" : 1, "Yellow" : 2, "Green" : 5, "Purple" : 9, "Orange" : 4 }
```

edit a value, in this case the number for column 'red':

```
meteor:PRIMARY> db.number_data.update({numKey: "colourNums1"},{$set: {Red: 34}})
```

the 'key' of 'colourNums1' is used to 'set' the value of the column 'Red'.

As the meteor app is using 'Deps.autorun(....)' in ```client/main.js```, the graph gets reloaded as a 
data change takes place:

```
Template.hello.onRendered(function() {                                                                                                                                  
      Deps.autorun(function() {
              graph.drawChart()
      });
});                                                                                                                                                                     
```
the imported function ```graph.drawChart()``` from graph.js does the work of
inserting a ChartJS graph into the canvas defined in ```client/main.html```

if you need to reset the database and have the sample data re-loaded, meteor
  reset will do this, cntrl-C the running meteor process and then :

        meteor reset


