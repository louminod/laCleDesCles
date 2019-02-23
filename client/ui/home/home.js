import './home.html';

Template.home.events({
    'click .js-logout'(event, instance) {
        Meteor.logout();
    }
});