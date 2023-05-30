import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonDatetime,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonPopover,
} from "@ionic/react";
import { body, fingerPrint, trash } from "ionicons/icons";
import React, { useRef, useState } from "react";
export type Props = {
  mt: boolean;
};
const ApprovedDoctorsCard: React.FC<Props> = ({ mt }) => {
  const [date, setSelectedDate] = useState("");
  return (
    <IonCard style={{ marginTop: `${mt ? 0 : null}`, marginInline: 0 }}>
      <IonCardHeader>
        <IonItem className='pointer-events: none item md ion-activatable ion-focusable hydrated'>
          {" "}
          Dr Salman Ahmad Bajwa{" "}
          <IonItem lines='none' slot='end'>
            Expiry : May 2022
            {/* <IonInput label='Expiry' value={date} id='date' />
                <IonPopover
                  trigger='date'
                  size='auto'
                  style={{ width: "7rem" }}
                >
                  <IonDatetime
                    title='pickDate'
                    size='cover'
                    value='2019-10-01T15:43:40.394Z'
                    display-timezone='utc'
                    preferWheel
                    presentation='date'
                    showDefaultButtons
                    onIonChange={(e: any) => setSelectedDate(e.details.value)}
                  ></IonDatetime>
                </IonPopover> */}
          </IonItem>
          <IonIcon
            color='primary'
            icon={trash}
            size='small'
            slot='end'
            role='img'
            className='md ion-color ion-color-primary icon-small hydrated'
            aria-label='trash'
          ></IonIcon>
        </IonItem>
      </IonCardHeader>
      <IonCardContent className='md card-content-md hydrated'>
        <p>Email: salmanbajwa777@gmail.com</p>
        <p>Number: 3335196658</p>
        <p>PMDC No: 50423-P</p>
        <IonButton
          color='tertiary'
          fill='outline'
          size='small'
          tabIndex={0}
          //   ng-reflect-router-link='/members/doctor/1/permissions'
          className='ion-color ion-color-tertiary md button button-small button-outline ion-activatable ion-focusable hydrated'
        >
          <IonIcon
            icon={fingerPrint}
            role='img'
            className='md hydrated'
            aria-label='finger print'
          ></IonIcon>{" "}
          Permissions{" "}
        </IonButton>
        <IonButton
          color='tertiary'
          fill='outline'
          size='small'
          tabIndex={0}
          //   ng-reflect-router-link='/members/doctor/1/permissions'
          aria-disabled='true'
          className='ion-color ion-color-tertiary md button button-small button-outline button-disabled ion-activatable ion-focusable hydrated'
        >
          <IonIcon
            icon={body}
            role='img'
            className='md hydrated'
            aria-label='body'
          ></IonIcon>{" "}
          Patients{" "}
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default ApprovedDoctorsCard;
