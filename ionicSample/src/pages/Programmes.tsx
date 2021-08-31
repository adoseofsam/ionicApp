import { IonText,IonListHeader,IonToolbar,IonTitle,IonPage,IonHeader,IonButton,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

import React from 'react';



const program = [
  {
      scale: 'General Majors',
      programs: ['Computer Science ', '  Software Engineering ']
  },

  {
    scale: 'Other Majors',
    programs:['Information Technology', ' Computer Studies Option', ' Software Engineering (Mobile Application Technologies']
  },

  {
      scale: 'Minors are Offered as Follows',
      programs:['Computer Science', ' Software Engineering', ' Information Technology']
      
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


const Programme: React.FC = () => {
  return (
    <IonContent>
    <IonList className ='listname'>
      {
        program.map((item,x) => (
          <IonItemSliding key = {x}>
            <IonItem>
              <IonLabel>
                <IonText key = {x}>
                  {item.scale}:
                </IonText>
                <p>{item.programs }</p>
              </IonLabel>
            </IonItem>
          </IonItemSliding>

        ))
      }
      <IonItem className="course">Course Listing</IonItem>

    </IonList>
<IonButton className="goback" href='/home'>Go Back</IonButton>

  </IonContent>
);
  };

export default Programme;
