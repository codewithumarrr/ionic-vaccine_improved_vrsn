import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonCheckbox
} from "@ionic/react";
import HeaderButtons from "../../components/HeaderButtons";
// interface IParam {
// //   match: {
// //     params: {
// //       id: number;
// //     };
// //   };
// }
const AddVaccine: React.FC= (
//     {
//   match: {
//     params: { id },
//   },
// }
) => {
  const [name, setName] = useState("");
  const [minAge, setminAge] = useState("");
  const [maxAge, setmaxAge] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", name, minAge, maxAge);
  };

  return (
    <IonPage>
      <HeaderButtons pageName="Add Vaccine"></HeaderButtons>
      <IonContent>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel color="primary" position="floating">
              Name
            </IonLabel>
            <IonInput
              type="text"
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel color="primary">
              Is-Special
            </IonLabel>
            <IonCheckbox
              value={minAge}
              placeholder="Select One"
              onIonChange={(e) => setminAge(e.detail.value)}
              slot="end"
            >
            </IonCheckbox>
          </IonItem>

          <IonItem>
            <IonLabel color="primary"  >
             Infinite
            </IonLabel>
            <IonCheckbox
              value={maxAge}
              placeholder="Select One"
              onIonChange={(e) => setmaxAge(e.detail.value)}
              slot="end"
            >
            </IonCheckbox>
          </IonItem>

          <IonButton type="submit" fill="solid" color="primary" slot="start">
            Add
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddVaccine;