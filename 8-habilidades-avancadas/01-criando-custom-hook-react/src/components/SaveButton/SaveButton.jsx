import { useOnlineStatus } from '../../hooks/useOnlineStatus';

const SaveButton = () => {

    const isOnline = useOnlineStatus();

    function handleSaveClick() {
        console.log("Save clicked!");

    }

    return (

        <>

            <button disabled={!isOnline} onClick={handleSaveClick}>

                {isOnline ? "Save progress" : "Reconnecting..."}

            </button>


        </>

    )
}

export default SaveButton;