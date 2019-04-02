export const rules = {
  username: [
    v => !!v || 'Vous devez renseigner un pseudo.',
    v => v.length > 4 || 'Votre pseudo doit dépasser 4 caractères.',
    v => v.length < 16 || 'Votre pseudo ne doit pas dépasser 15 caractères.'
  ],
  email: [
    v => !!v || 'Vous devez renseigner votre e-mail.',
    v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(v) || 'Votre e-mail n\'est pas valide'
  ],
  password: [
    v => !!v || 'Vous devez renseigner votre mot de passe.',
    v => v.length > 6 || 'Votre mot de passe doit dépasser 5 caractères.',
    v => /(?=.*[a-z])/.test(v) || 'Votre mot de passe doit contenir au moins une miniscule.',
    v => /(?=.*[A-Z])/.test(v) || 'Votre mot de passe doit contenir au moins une majuscule.',
    v => /(?=.*[0-9])/.test(v) || 'Votre mot de passe doit contenir au moins un chiffre.'
  ],
  unique: {
    required: [v => !!v || 'Ce champ est obligatoire.']
  }
}
