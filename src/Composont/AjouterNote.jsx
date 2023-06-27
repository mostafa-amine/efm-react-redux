import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function AjouterNote() {
    // initialise dispatch
    const dispatch = useDispatch()
    // Les notes
    var notes = useSelector(data => data.notes)
    // Les matirucles
    const matieres = useSelector(data => data.matieres)

    const [matiere, setMatiere] = useState(matieres[0].codeMatiere);
    const [matricule, setMaticule] = useState('');
    const [note, setNote] = useState('');


    function handleDelete(note) {
        dispatch({ type: "supprimerNote", payload: note })
    }

    function handleAjoute() {
        // get the data and store it in an object
        const newNote = {
            matricule: matricule,
            codeMatiere: matiere,
            note: note,
        }
        dispatch({ type: "ajouterNote", payload: newNote })
    }

    function handleFilter() {
        dispatch({ type: "filterNote", payload: matricule })
    }

    return (
        <>
            <Link to="/bulletin">Afficher Bulletin</Link>
            <div className="saisieStg">
                <input onChange={(e) => setMaticule(parseInt(e.target.value))} value={matricule} type="number" placeholder="matricule" />
                <input onChange={(e) => setNote(e.target.value)} value={note} type="number" placeholder="Note" />
                <select value={matiere} onChange={(e) => setMatiere(e.target.value)}>
                    {
                        matieres.map((m) => (
                            <option key={m.codeMatiere} value={m.codeMatiere}>{m.intitule}</option>
                        ))
                    }
                </select>
                <button onClick={() => handleAjoute()}>Ajouter Note</button>
                <button onClick={() => handleFilter()}>Filter</button>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>matricule</th>
                        <th>codeMatiere</th>
                        <th>note</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes
                            .map((note, index) => (
                                <tr key={index}>
                                    <td>{note.matricule}</td>
                                    <td>{note.codeMatiere}</td>
                                    <td>{note.note}</td>
                                    <td>
                                        <button onClick={() => handleDelete(note)}>Supprimer</button>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </>
    )
}