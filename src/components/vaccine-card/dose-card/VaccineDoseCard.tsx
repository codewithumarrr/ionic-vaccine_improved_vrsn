import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { create, trash } from "ionicons/icons";
import React from "react";
import "./vaccineDoseCard.css";
import { Props } from "../../doctor-card/ApprovedDoctorsCard";
const VaccineDoseCard: React.FC<Props> = ({ mt }) => {
  return (
    <>
      <IonCard style={{ marginTop: `${mt ? 0 : null}`, marginInline: 0 }}>
        <IonItem>
          <IonLabel>BCG</IonLabel>
          <IonItem slot='end'>
            <IonButton
              fill='clear'
              className='custom-ripple doses-buttons'
              routerLink='/members/vaccine/:id/doses/edit/123'
              routerDirection='forward'
            >
              <IonIcon
                color='primary'
                icon={create}
                slot='end'
                tabIndex={0}
                aria-label='create'
              />
            </IonButton>
            <IonButton
              className='custom-ripple doses-buttons'
              fill='clear'
              expand='full'
              strong
            >
              <IonIcon
                color='primary'
                icon={trash}
                slot='end'
                aria-label='trash'
              />
            </IonButton>
          </IonItem>
        </IonItem>
        <IonCardContent>
          <p>Minimum Age Limit: At Birth</p>
          <p>Dose Order: 1</p>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default VaccineDoseCard;
