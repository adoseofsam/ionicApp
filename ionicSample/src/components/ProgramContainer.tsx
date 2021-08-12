import './ProgramContainer.css';
import { IonText,IonListHeader,IonToolbar,IonTitle,IonPage,IonHeader,IonButton,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

import React from 'react';
interface ContainerProps { }


const program = [
  {
      scale: 'General',
      programs: ['Computer Science Major ','Software Engineering Major']
  },

  {
    scale: 'Bsc',
    programs:['Information Technology', ' Computer Studies Option', ' Software Engineering (Mobile Application Technologies']
  },

  {
      scale: 'Minors',
      programs:['Computer Science', ' Software Engineering', 'Information Technology']
      
  }


];

// const undergradLst = () => (
//   <ul>
//         {program.map(program => (
//             <li key={program.scale}>
//                 <div>{program.scale}</div>
//                 <div>{program.programs}</div>
//             </li>
//         ))}
//     </ul>
// );


const ProgramContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent>
    <IonList>
      {
        program.map((item,x) => (
          <IonItemSliding key = {x}>
            <IonItem>
              <IonLabel className = "lst">
                <IonText key = {x}>
                  {item.scale}:
                </IonText>
                <p>{item.programs }</p>
              </IonLabel>
            </IonItem>
          </IonItemSliding>
        ))
      }

    </IonList>
<IonButton className="goback" href='/home'>Go Back</IonButton>

  </IonContent>
);
  };

export default ProgramContainer;
