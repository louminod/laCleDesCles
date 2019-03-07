import './train.html';
import './train.css';

const TAB_NOTES = [
    'DO_1', 'RE_1', 'MI_1', 'FA_1', 'SOL_1', 'LA_1', 'SI_1',
    'DO_2', 'MI_2', 'FA_2', 'SOL_2', 'LA_2', 'SI_2',
];

const NOTES_PATH = '/images/NOTES/FA/';
const NB_SERIES = 15;

Template.train.onCreated(function () {
    this.note = new ReactiveVar('');
    this.lastNote = new ReactiveVar('');
    this.indexTab = new ReactiveVar(0);
    this.indexSerie = new ReactiveVar(0);
    this.responseActive = new ReactiveVar(false);
    this.response = new ReactiveVar(false);
    this.score = new ReactiveVar(0);
    this.end = new ReactiveVar(false);
    randomNote();
});

Template.train.helpers({
    note() {
        return NOTES_PATH + TAB_NOTES[Template.instance().indexTab.get()] + '.png';
    },
    nomNote() {
        return Template.instance().note.get();
    },
    responseActive() {
        return Template.instance().responseActive.get();
    },
    response() {
        return Template.instance().response.get();
    },
    end() {
        return Template.instance().end.get();
        //return true;
    },
    indexSerie() {
        return Template.instance().indexSerie.get();
    },
    nbSeries() {
        return NB_SERIES;
    },
    score() {
        return Template.instance().score.get();
    }
});

Template.train.events({
    'click .js-note'(event, instance) {
        event.preventDefault();

        const note = event.target.value;

        if (note.toUpperCase() == Template.instance().note.get()) {
            Template.instance().score.set(Template.instance().score.get() + 1);
            Template.instance().response.set(true);
        } else {
            Template.instance().response.set(false);
        }

        Template.instance().responseActive.set(true);
        Template.instance().lastNote.set(Template.instance().note.get())
        Template.instance().indexSerie.set(Template.instance().indexSerie.get() + 1);

        if (Template.instance().indexSerie.get() < (NB_SERIES)) {
            randomNote();
        } else {
            Template.instance().end.set(true);
        }
    }
});

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNote() {
    Template.instance().indexTab.set(entierAleatoire(1, TAB_NOTES.length) - 1);
    Template.instance().note.set(TAB_NOTES[Template.instance().indexTab.get()].split('_')[0]);

    if (Template.instance().note.get() == Template.instance().lastNote.get()) {
        randomNote();
    }
}