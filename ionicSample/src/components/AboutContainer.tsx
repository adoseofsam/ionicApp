import './AboutContainer.css';
import React from 'react';
import { IonList,IonThumbnail,IonImg,IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
// import { arrow-undo } from 'ionicons/icons';
// import AboutPage from '../components/AboutPage';

import me from '../imgs/me.jpeg';
interface ContainerProps { }

const AboutContainer: React.FC<ContainerProps> = () => {
    return (
        <IonPage className ="profile">
          <IonContent fullscreen>
            <IonCard>
              <IonCardHeader className = "titles" >
                <IonCardSubtitle >About Me</IonCardSubtitle>
                <IonCardTitle>Getting to know Samantha James</IonCardTitle>
              </IonCardHeader>
              <IonImg className="photo" src={me} alt="Samantha" />
              <IonCardContent>
              My name is Samantha James, an aspiring Penetration Tester and Software Developer. I am an individual who thrives off positivity in just about every aspect of my life, while also being curious, incisive, passionate, and punctilious in the things I do. 
              In addition, I enjoy creating and exploiting vulnerabilities, watching penetration testing YouTube videos, and finding courses and communities to further develop my skill set.
              My love for computing developed during my early high school years where my Information Technology teacher served as an instrumental catalyst for this field. 
              She had always inspired me and showed me the benefits of not only doing well in the subject, but also the differences that I could make by choosing this career path.
          </IonCardContent>
            </IonCard>
            <IonButton className="goback" href='/home'>Go Back</IonButton>
          </IonContent>
        </IonPage>
      );
    };

export default AboutContainer;
