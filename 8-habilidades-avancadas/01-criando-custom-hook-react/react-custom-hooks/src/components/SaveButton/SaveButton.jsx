import { useState, useEffect } from 'react'

const SaveButton = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {

        function handleOnline() {
            setIsOnline(true);
        }

        function handleOffline() {
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, [])

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