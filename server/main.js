import { Meteor } from 'meteor/meteor';




Meteor.startup(() => {
  if (NumberData.find().count() === 0) {
    JSON.parse(Assets.getText("colours.js")).colours.forEach(function (doc) {
      NumberData.insert(doc);
    });
  }
});



Meteor.publish('NumberData', function() {
	console.log("fired");
  	return NumberData.find();
});
