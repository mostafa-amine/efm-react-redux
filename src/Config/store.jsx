
const initialState = {
    stagiaires: [
        { matricule: '1', nom: 'Briere', prenom: 'Mostafa Amine' },
        { matricule: '2', nom: 'Boumedian', prenom: 'Ahmed' },
        { matricule: '3', nom: 'Briere', prenom: 'Zayd' },
    ],
    matieres: [
        { codeMatiere: '1', intitule: 'Matiere 1', coef: 1 },
        { codeMatiere: '2', intitule: 'Matiere 2', coef: 1 },
        { codeMatiere: '3', intitule: 'Matiere 3', coef: 1 }
    ],
    notes: [
        { matricule: '1', codeMatiere: '1', note: 15 },
        { matricule: '1', codeMatiere: '2', note: 19 },
        { matricule: '1', codeMatiere: '3', note: 20 },
        { matricule: '2', codeMatiere: '3', note: 10 },
        { matricule: '3', codeMatiere: '1', note: 9 },
    ]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ajouterNote":
            return { ...state, notes: [...state.notes, action.payload] }
        case "supprimerNote":
            return { ...state, notes: [...state.notes.filter(n => n !== action.payload)] }

        default:
            return state;
    }
}