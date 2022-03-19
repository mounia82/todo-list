import { useState,useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/fr';

const DateDuJour = () => {

    const [today, setToday] = useState(new Date());
    //              Permet de modifier la date

    useEffect(() => {
        const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        console.log('today', today.getTime());
        console.log('tomorrow', tomorrow.getTime());
    
        const waitTime = tomorrow.getTime() - today.getTime();
        console.log('Wait (en ms)', waitTime);

        // ↓ On attent demain minuit pour update (si l'utilisateur reste sur la page...)
        const timerID = setTimeout(() => {
            setToday(new Date());
        }, waitTime);

        // ↓ On stop le timeout si l'utilisateur quitte la page
        return () => {
            clearTimeout(timerID);
        }
    });
    

    const displayToday = moment(today).format('D MMMM YYYY');

    return (
        <p>{displayToday}</p>
    );
};

export default DateDuJour;

   