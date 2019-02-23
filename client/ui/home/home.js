import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './home.html';

Template.home.events({
    'click .js-logout'(event, instance) {
        Meteor.logout();
    },
    'click .js-learn'(event, instance) {
        FlowRouter.go('/apprendre');
    },
    'click .js-train'(event, instance) {
        FlowRouter.go('/entrainement');
    },
});