## Meteor & ChartJS

using the word colour and Blaze templates

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


