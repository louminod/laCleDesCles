import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
    action() {
        BlazeLayout.render('layout', { main: 'lander' });
    }
});

FlowRouter.route('/apprendre', {
    action() {
        BlazeLayout.render('layout', { main: 'learn' });
    }
});

FlowRouter.route('/entrainement', {
    action() {
        BlazeLayout.render('layout', { main: 'train' });
    }
});