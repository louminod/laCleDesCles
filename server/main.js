import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import './publications';

Meteor.startup(() => {
});

Accounts.onCreateUser((options, user) => {
    if (options.profile) {
        user.profile = options.profile;
        user.profile.privilege = "user";
    }
    return user;
});
