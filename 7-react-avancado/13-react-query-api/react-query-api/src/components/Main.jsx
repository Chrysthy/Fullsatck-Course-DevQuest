import { useQuery } from "@tanstack/react-query";

export const Main = () => {

    const fetchData = async () => {

        const response = await fetch('https://viacep.com.br/ws/01001000/json/');

        return await response.json();


    }

    const { data, isLoading } = useQuery(['cep'], fetchData);

    console.log(data);

    if (isLoading) return <p>Está carregando as informações</p>


    return (

        <ul>

            {

                <li>

                    <p>{data.logradouro}</p>
                    <p>{data.bairro}</p>
                    <p>{data.localidade}</p>
                    <p>{data.uf}</p>

                </li>


            }


        </ul>
    )
}

export default Main