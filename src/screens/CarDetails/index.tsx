import React from "react";
import { StatusBar } from "react-native";

import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Content,
  About,
  Accessories,
  Footer,
  OfflineInfo,
} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            {
              id: String(1),
              photo:
                "https://production.autoforce.com/uploads/version/profile_image/6737/comprar-tiptronic_13d79f3c1b.png",
            },
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>RS Coupé R8</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 140</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory
            key="speed"
            name={"380km/h"}
            icon={getAccessoryIcon("speed")}
          />
          <Accessory
            key="acceleration"
            name={"3.2s"}
            icon={getAccessoryIcon("acceleration")}
          />
          <Accessory
            key="turning_diameter"
            name={"800 HP"}
            icon={getAccessoryIcon("turning_diameter")}
          />
          <Accessory
            key="gasoline_motor"
            name={"Gasolina"}
            icon={getAccessoryIcon("gasoline_motor")}
          />
          <Accessory
            key="exchange"
            name={"Auto"}
            icon={getAccessoryIcon("exchange")}
          />
          <Accessory
            key="seats"
            name={"2 pessoas"}
            icon={getAccessoryIcon("seats")}
          />
        </Accessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => {}}
        />
      </Footer>
    </Container>
  );
}
