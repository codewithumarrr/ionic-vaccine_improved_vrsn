import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { bandageOutline, colorFilter, create, trash } from "ionicons/icons";
//   import "./vaccineCard.css";
import { IBrandData } from "../../../pages/vaccines/brands/VaccineBrandCardList";
interface IimprovedIBrandData extends IBrandData {
  mt: boolean;
}
const VaccineBrandCard: React.FC<IimprovedIBrandData> = ({
  Id,
  Name,
  VaccineId,
  mt,
}) => {
  console.log("name : ", Name);
  return (
    <IonCard style={{ marginTop: `${mt ? 0 : null}`, marginInline: 0 }}>
      <IonItem className='item md ion-focusable item-label hydrated'>
        <IonIcon
          icon={colorFilter}
          slot='start'
          style={{ "margin-right": "16px" }}
          role='img'
          className='md hydrated'
          aria-label='bandage outline'
        ></IonIcon>
        <IonLabel className='sc-IonLabel-md-h sc-IonLabel-md-s md hydrated'>
          <b>{Name}</b>
        </IonLabel>
        <IonButton
          fill='clear'
          className='custom-ripple'
          routerLink='/members/vaccine/edit/1'
          routerDirection='forward'
        >
          <IonIcon
            color='primary'
            icon={create}
            size='large'
            slot='end'
            tabIndex={0}
            role='img'
            className='md ion-color ion-color-primary icon-large hydrated'
            aria-label='create'
          />
        </IonButton>
        <IonButton className='custom-ripple' fill='clear' expand='full' strong>
          <IonIcon
            color='primary'
            icon={trash}
            size='large'
            slot='end'
            role='img'
            className='md ion-color ion-color-primary icon-large hydrated'
            aria-label='trash'
          />
        </IonButton>
      </IonItem>
    </IonCard>
  );
};

export default VaccineBrandCard;
