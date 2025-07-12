import { useState } from "react"

export default function Form() {

    const [firstName, setFirstName] = useState("Chrystine")

    const [lastName, setLastName] = useState("Martins")

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    return (

        <>

            <label htmlFor="">

                First Name:
                <input type="text" value={firstName} onChange={handleFirstNameChange} />

            </label>

            <label htmlFor="">

                Last Name:
                <input type="text" value={lastName} onChange={handleLastNameChange} />

            </label>

            <p>

                <b>Bem-Vindo(a), {firstName} {lastName}.</b>

            </p>

        </>


    )
}