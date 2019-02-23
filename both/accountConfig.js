T9n.setLanguage('fr');

let email = AccountsTemplates.removeField('email');
let password = AccountsTemplates.removeField('password');

password.minLength = 3;

// Ajout des champs [Prénom, Nom]
AccountsTemplates.addFields([
    {
        _id: 'prenom',
        type: 'text',
        displayName: 'Prénom',
        placeholder: 'Prénom',
        required: true,
        minLength: 3,
        trim: true
    },
    {
        _id: 'nom',
        type: 'text',
        displayName: 'Nom',
        placeholder: 'Nom',
        required: true,
        minLength: 3,
        trim: true
    },
    email,
    password
]);

AccountsTemplates.configure({
    forbidClientAccountCreation: false,
    sendVerificationEmail: false
});
