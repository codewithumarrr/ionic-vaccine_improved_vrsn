import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import React from "react";
import { Props } from "./ApprovedDoctorsCard";
const UnApprovedDoctorsCard: React.FC<Props> = ({ mt }) => {
  return (
    <IonCard style={{ marginTop: `${mt ? 0 : null}`, marginInline: 0 }}>
      <IonItem className='item md ion-focusable item-label hydrated'>
        <IonLabel className='sc-IonLabel-md-h sc-IonLabel-md-s md hydrated'>
          <b>Johnd</b>
        </IonLabel>
        <IonButton
          color='tertiary'
          fill='outline'
          size='small'
          slot='end'
          className='ion-color ion-color-tertiary md button button-small button-outline ion-activatable ion-focusable hydrated'
        >
          {" "}
          Approve &nbsp;{" "}
        </IonButton>
      </IonItem>
      <IonCardContent className='md card-content-md hydrated'>
        <p>Email: ccboracay2020@gmail.com</p>
        <p>Number: 9452118724</p>
        <p>PMDC No: 48483-g</p>
      </IonCardContent>
    </IonCard>
  );
};

export default UnApprovedDoctorsCard;
