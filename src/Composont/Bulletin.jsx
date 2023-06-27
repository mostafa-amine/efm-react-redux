import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



export default function Bulletin() {
    // initilaise states
    const stagiaires = useSelector(data => data.stagiaires)
    const matieres = useSelector(data => data.matieres)
    const notes = useSelector(data => data.notes)

    // declare states
    const [matInput, setMatInput] = useState('')
    const [stg, setStg] = useState('')
    const [error, setError] = useState('')
    const [listNotes, setListeNotes] = useState('')

    // La fonction getMatiereByCode
    function getMatiereByCode(code) {
        return matieres.find(m => parseInt(m.codeMatiere) === parseInt(code))
    }

    function handleSubmit(e) {
        e.preventDefault()
        // Verifier le matricule
        const matVerif = stagiaires.find(e => parseInt(e.matricule) === parseInt(matInput));
        if (matVerif) {
            setError('')
            setStg(stagiaires.filter(e => parseInt(e.matricule) === parseInt(matInput))[0])
            setListeNotes(notes.filter(e => parseInt(e.matricule) === parseInt(matInput)))
        }
        else {
            setError("Matricule Not Found!")
            setStg('')
            setListeNotes('')
        }
    }

    function totalNoteParStg() {
        return listNotes.reduce((total, item) => {
            return (item.note + total)
        }, 0) / listNotes.length
    }

    return (
        <div>
            <Link to="/ajouter">Ajouter</Link>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="number" value={matInput} onChange={(e) => setMatInput(e.target.value)} />
                    <button type="submit">Afficher</button>
                </form>
            </div>
            {
                error && (
                    <h1 style={{ color: 'red' }}>{error}</h1>
                )
            }

            <div>
                {
                    stg && (
                        <div>
                            <h3>Nom: {stg.nom}</h3>
                            <h3>Prenom: {stg.prenom}</h3>
                        </div>
                    )
                }
                {
                    listNotes && (
                        <table border={1}>
                            <thead>
                                <tr>
                                    <td>Code matiere</td>
                                    <td>Intitule</td>
                                    <td>Note</td>
                                    <td>Coifficient</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listNotes.map((e, key) => {
                                        const matiereInfo = getMatiereByCode(e.codeMatiere)
                                        return (
                                            <tr key={key}>
                                                <td>{matiereInfo.codeMatiere}</td>
                                                <td>{matiereInfo.intitule}</td>
                                                <td>{e.note}</td>
                                                <td>{matiereInfo.coef}</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td colSpan={4} style={{ textAlign: "right" }}>Total</td>
                                    <td>{totalNoteParStg()}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div >
    )
}