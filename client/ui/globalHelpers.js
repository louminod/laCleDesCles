import moment from 'moment';

Template.registerHelper('getDisplayDateTime', function (date) {
    return moment(date).format('DD/MM/YYYY à HH:mm');
});

Template.registerHelper('getUserFullName', function (userId) {
    let user = Meteor.users.findOne({ _id: userId });
    if (user && user.profile) {
        return user.profile.prenom + " " + user.profile.nom;
    }
});

Template.registerHelper('equals', function (a, b) {
    return a == b;
});