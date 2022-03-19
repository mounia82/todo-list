import { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/fr';




 //var moment= moment().format('HH:mm:ss');

 const Horloge = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Start du timer ↓
        const timerID = setTimeout(() => {
            console.log('Clic');

            // Mise à jours du state
            setTime(new Date());
        }, 500);

        // Arret du timer ↓
        return () => {
           clearTimeout(timerID);
        }
    });

    // Séparation des différents element de la date à afficher
    const heure = moment(time).format('HH');
    const minute = moment(time).format('mm');
    const seconde = moment(time).format('ss');

    // Note : Il est possible de formatter en une seul fois :)

    return (
        <p>{heure} : {minute} : {seconde}</p>
    );
};

export default Horloge;