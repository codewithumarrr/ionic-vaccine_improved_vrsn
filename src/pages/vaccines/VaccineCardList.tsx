import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import HeaderButtons from "../../components/HeaderButtons";
import VaccineCard from "../../components/vaccine-card/VaccineCard";

interface IVaccineData {
  DoseCount: number;
  BrandCount: number;
  vaccine: {
    Id: number;
    Name: string;
    IsSpecial: boolean;
    Infinite: boolean;
  };
}

const VaccineCardList: React.FC = (props: any) => {
  const [data, setData] = useState<IVaccineData[]>([]);
  const [renderList, setRenderList] = useState<boolean>(false);
  useEffect(() => {
    fetchVaccineData();
  }, []);

  const fetchVaccineData = async () => {
    fetch("https://myapi.fernflowers.com/api/Vaccine/vaccine-with-count")
      .then((response) => response.json())
      .then((data: IVaccineData[]) => setData(data));
  };
  // console.log(data[0]);
  return (
    <IonPage>
      <HeaderButtons
        pageName='Vaccines'
        Showbutton={true}
        url='/members/vaccine/add'
      />
      <IonContent className='ion-padding'>
        {data &&
          data.map((item, index) => (
            <React.Fragment key={index * item.vaccine.Id + 1}>
              <VaccineCard
                Id={item.vaccine.Id}
                Name={item.vaccine.Name}
                IsSpecial={item.vaccine.IsSpecial}
                Infinite={item.vaccine.Infinite}
                DoseCount={item.DoseCount}
                BrandCount={item.BrandCount}
                mt={index === 0}
              />
            </React.Fragment>
          ))}
      </IonContent>
    </IonPage>
  );
};

export default VaccineCardList;
