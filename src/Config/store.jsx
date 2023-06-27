
const initialState = {
    stagiaires: [
        { matricule: '1', nom: 'Briere', prenom: 'Mostafa Amine' }
    ],
    matieres: [
        { codeMatiere: '1', intitule: 'Matiere 1', coef: 1 },
        { codeMatiere: '2', intitule: 'Matiere 2', coef: 1 },
        { codeMatiere: '3', intitule: 'Matiere 3', coef: 1 }
    ],
    notes: [
        { matricule: '1', codeMatiere: '1', note: 15 },
        { matricule: '1', codeMatiere: '2', note: 15 },
    ]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ajouterNote":
            return { ...state, notes: [...state.notes, action.payload] }
        case "supprimerNote":
            return { ...state, notes: [...state.notes.filter(n => n !== action.payload)] }
        case "filterNote":
            return { ...state, notes: [...state.notes.filter(n => parseInt(n.matricule) === parseInt(action.payload))] }
        default:
            return state;
    }
}