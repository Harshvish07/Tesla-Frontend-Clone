import React from "react";
import CatCard from "../../components/CatCard";
import Crouser from "../../components/Crouser";
import SmallCard from "../../components/SmallCard";
import MyFreeMap from "./MyFreeMap";
import redcar from "../../assets/redcar.jpg";
import silvercar from "../../assets/silvercar.jpg";
import cybertruck from "../../assets/Card-Cybertruck.jpg";
import model3 from "../../assets/Card-Model-3.jpg";
import modelS from "../../assets/Card-Model-S.jpg";
import modelX from "../../assets/Card-Model-X.jpg";
import modelY from "../../assets/Card-ModelY.jpg";
import modelM from "../../assets/Model-3-Mobile-US.jpg";
import modelM2 from "../../assets/Model-Y-Mobile-US.jpg";
import cybertruck1 from "../../assets/1Cybertruck-Mobile.jpg";
import model31 from "../../assets/1Model-3-Mobile.jpg";
import modelS1 from "../../assets//1Model-S-Mobile.jpg";
import modelX1 from "../../assets/1Model-X-Mobile.jpg";
import modelY1 from "../../assets/1Model-Y-Mobile.jpg";
import gridAmerican from "../../assets/Homepage-Grid-American-Heroes.jpg";
import gridCompare from "../../assets/Homepage-Grid-Compare.jpg";

import {
  solarM,
  solarD,
  solarR,
  solarRD,
  megaD,
  megaM,
  powerM,
  powerD
} from "../../components/image";

const slides = [
  {
    title: "Model S",
    offer: "5% off",
    desktopImage: redcar,
    mobileImage: modelM
  },
  {
    title: "Model Y",
    offer: "15% off",
    desktopImage: silvercar,
    mobileImage: modelM2
  }
];

const categorie = [
  {
    header: "Midsize SUV",
    model: "Model Y",
    description: "Up to 357 mi Range (EPA est.)",
    offer: " From $37,490 After Federal Tax Credit",
    desktopImage: modelY,
    mobileImage: modelY1
  },
  {
    header: " SUV",
    model: "Model 3",
    description: "Up to 357 mi Range (EPA est.)",
    offer: " From $37,490 After Federal Tax Credit",
    desktopImage: model3,
    mobileImage: model31
  },
  {
    header: "UV",
    model: "Cybertruck",
    description: "Up to 357 mi Range (EPA est.)",
    offer: " From $37,490 After Federal Tax Credit",
    desktopImage: cybertruck,
    mobileImage: cybertruck1
  },
  {
    header: "V",
    model: "Model X",
    description: "Up to 357 mi Range (EPA est.)",
    offer: " From $37,490 After Federal Tax Credit",
    desktopImage: modelX,
    mobileImage: modelX1
  },
  {
    header: "Midsize SUV",
    model: "Model S",
    description: "Up to 357 mi Range (EPA est.)",
    offer: " From $37,490 After Federal Tax Credit",
    desktopImage: megaM,
    mobileImage: megaM
  }
];

const options = [
  {
    header: "Compare Model",
    description: "Find the Tesla vehicle that’s right for you.",
    button: "Compare Model",
    image: gridCompare
  },
  {
    header: "American Heroes",
    description:
      "$1,000 off for military, first responders, teachers and students.",
    button: "Learn More",
    image: gridAmerican
  }
];

const slider2 = [
  {
    model: "Solar Panels",
    description: "Use Solar Energy to Power Your Home and Charge Your Tesla",

    desktopImage: solarD,
    mobileImage: solarM
  },
  {
    model: "Powerwall",
    description: "Keep Your Lights On During Outage",

    desktopImage: powerD,
    mobileImage: powerM
  },
  {
    model: "Solar Roof",
    description: "Generate Clean Energy With Your Roof",

    desktopImage: solarRD,
    mobileImage: solarR
  },
  {
    model: "Megapack",
    description: "Massive Batteries for Massive Energy Support",

    desktopImage: solarD,
    mobileImage: solarM
  }
];

function Home() {
  return (
    // new
    <div className=" bg-white pb-32 ">
      {/* <Card /> */}
      <div className="w-full h-200 items-stretch">
        <Crouser slides={slides} autoSlides={true} />

        <CatCard categorie={categorie} />
        <SmallCard options={options} />
        <MyFreeMap />
        <CatCard categorie={slider2} />
        <div className="md:p-10 my-15 p-4 pb-10 md:h-70 h-80 md:mx-20 flex flex-col gap-4">
          <h3 className="text-xs text-gray-600">
            For Long-Range Rear-Wheel Drive models with 19" wheels.
          </h3>
          <p className="text-xs text-gray-600">
            Before the Federal Tax Credit, Model Y Long Range Rear-Wheel Drive
            starts at $46,630. Price includes Destination and Order Fees but
            exclude taxes and other fees. Subject to change. Vehicle shown has
            upgrades that will increase the price. The $7,500 Federal Tax Credit
            is available to eligible buyers and subject to MSRP caps. Not all
            vehicles, customers or finance options will be eligible.Before the
            Federal Tax Credit, Model Y Long Range Rear-Wheel Drive starts at
            $46,630. Price includes Destination and Order Fees but exclude taxes
            and other fees. Subject to change. Vehicle shown has upgrades that
            will increase the price. The $7,500 Federal Tax Credit is available
            to eligible buyers and subject to MSRP caps. Not all vehicles,
            customers or finance options will be eligible. Terms apply.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
