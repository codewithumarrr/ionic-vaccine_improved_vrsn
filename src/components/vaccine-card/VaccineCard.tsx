import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import { bandageOutline, create, trash } from "ionicons/icons";
import "./vaccineCard.css";
interface IVaccineData {
  Id: number;
  Name: string;
  IsSpecial: boolean;
  Infinite: boolean;
  DoseCount: number;
  BrandCount: number;
  mt: boolean;
}
const VaccineCard: React.FC<IVaccineData> = ({
  Id,
  Name,
  IsSpecial,
  Infinite,
  DoseCount,
  BrandCount,
  mt
}) => {
  return (
    <IonCard style={{ marginTop: `${mt ? 0 : null}`, marginInline: 0 }}>
      <IonItem className='item md ion-focusable item-label hydrated'>
        <IonIcon
          icon={bandageOutline}
          slot='start'
          style={{ marginRight: "16px" }}
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
          routerLink={`/members/vaccine/edit/${Id}`}
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
        <IonButton className='custom-ripple' fill='clear'>
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
      <IonCardContent className='md card-content-md hydrated'>
        <p>Minimum Age Limit</p>

        <IonButton
          color='tertiary'
          fill='outline'
          size='small'
          tabIndex={0}
          routerLink={`/members/vaccine/${Id}/doses`}
          routerDirection='forward'
          className='ion-color ion-color-tertiary md button button-small button-outline ion-activatable ion-focusable hydrated'
        >
          Doses &nbsp;{" "}
          <IonBadge
            color='primary'
            className='ion-color ion-color-primary md hydrated'
          >
            {DoseCount}
          </IonBadge>
        </IonButton>
        <IonButton
          color='tertiary'
          fill='outline'
          size='small'
          tabIndex={0}
          routerLink={`/members/vaccine/${Id}/brands`}
          routerDirection='forward'
          className='ion-color ion-color-tertiary md button button-small button-outline ion-activatable ion-focusable hydrated'
        >
          {" "}
          Brands &nbsp;{" "}
          <IonBadge
            color='primary'
            className='ion-color ion-color-primary md hydrated'
          >
            {BrandCount}
          </IonBadge>
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default VaccineCard;
