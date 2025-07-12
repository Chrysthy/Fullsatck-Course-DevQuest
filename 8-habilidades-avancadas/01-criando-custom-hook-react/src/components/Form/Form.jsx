import useFormInput from "../../hooks/useFormInput"

export default function Form() {

    const firstNameProps = useFormInput("Chrystine");
    const lastNameProps = useFormInput("Martins");

    return (

        <>

            <label htmlFor="">

                First Name:
                <input {...firstNameProps} />

            </label>

            <label htmlFor="">

                Last Name:
                <input {...lastNameProps} />

            </label>

            <p>

                <b>Bem-Vindo(a), {firstNameProps.value} {lastNameProps.value}.</b>

            </p>

        </>


    )
}