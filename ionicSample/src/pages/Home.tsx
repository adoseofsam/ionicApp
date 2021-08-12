import {IonButton,IonLabel,IonItem,IonList,IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sample Ionic Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
        <IonItem routerLink = '/about'>
            <IonLabel>
              About
            </IonLabel>
          </IonItem>
          <IonItem href = '/programmes'>
            <IonLabel>
              Programmes
            </IonLabel>
          </IonItem>
        </IonList>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};
          {/* <IonButton className="goback" href='/programmes'>Go programmes</IonButton> */}

export default Home;
