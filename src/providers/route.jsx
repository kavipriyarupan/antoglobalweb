import React from "react";

const BaseLayout = React.lazy(() => import("../pages/BaseLayout"));
const Solutions = React.lazy(() =>
  import("../pages/solutions/views/Solutions")
);
const Aboutus = React.lazy(() => import("../pages/aboutus/views/Aboutus"));
const HomePage = React.lazy(() => import("../pages/home/views/HomePage"));
const AutomotiveSolutions = React.lazy(() =>
  import("../pages/solutions/component/solutionindividual/Automotivesolution")
);
const TireIndustrySolution = React.lazy(() =>
  import("../pages/solutions/component/solutionindividual/Tireindustrysolution")
);
const GlassIndustrySolution = React.lazy(() =>
  import(
    "../pages/solutions/component/solutionindividual/Glassindustrysolution"
  )
);
const PharmaIndustrySolution = React.lazy(() =>
  import(
    "../pages/solutions/component/solutionindividual/Pharmaindustrysolution"
  )
);
const CementIndustrySolution = React.lazy(() =>
  import(
    "../pages/solutions/component/solutionindividual/Cementindustrysolution"
  )
);
const ChemicalIndustrySolution = React.lazy(() =>
  import(
    "../pages/solutions/component/solutionindividual/Chemicalindustrysolution"
  )
);
const HealthcareIndustrySolution = React.lazy(() =>
  import(
    "../pages/solutions/component/solutionindividual/Healthcareindustrysolution"
  )
);
const PaperIndustrySolution = React.lazy(() =>
  import(
    "../pages/solutions/component/solutionindividual/Paperindustrysolution"
  )
);
const ElectronicsIndustrySolution = React.lazy(() =>
  import(
    "../pages/solutions/component/solutionindividual/Electronicsindustrysolution"
  )
);
const FoodBeverageIndustrySolution = React.lazy(() =>
  import(
    "../pages/solutions/component/solutionindividual/Foodbeverageindustrysolution"
  )
);
const AgroIndustrySolution = React.lazy(() =>
  import("../pages/solutions/component/solutionindividual/Agroindustrysolution")
);
const WaterIndustrySolution = React.lazy(() =>
  import(
    "../pages/solutions/component/solutionindividual/Waterindustrysolution"
  )
);
const CharityComponent = React.lazy(() =>
  import("../pages/aboutus/component/hero/CharityComponent")
);
const Ourtech = React.lazy(() =>
  import("../pages/aboutus/component/hero/Ourtech")
);
const Careers = React.lazy(() =>
  import("../pages/aboutus/component/hero/Careers")
);

const PageLayoutcommon = React.lazy(() =>
  import("../pages/aboutus/component/hero/PageLayoutcommon")
);
const Careerone = React.lazy(() =>
  import("../pages/aboutus/component/hero/Careerone")
);
const Careertwo = React.lazy(() =>
  import("../pages/aboutus/component/hero/Careertwo")
);
const Clients = React.lazy(() =>
  import("../pages/aboutus/component/hero/Clients")
);
const Contactus = React.lazy(() =>
  import("../pages/aboutus/component/hero/Contactus")
);
const route = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/solutions",
        element: <Solutions />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/csr",
        element: <CharityComponent />,
      },
      {
        path: "/ourtech",
        element: <Ourtech />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },

      {
        path: "/pagelayout",
        element: <PageLayoutcommon />,
      },
      {
        path: "/careerone",
        element: <Careerone />,
      },
      {
        path: "/careertwo",
        element: <Careertwo />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },

      {
        path: "/automotive",
        element: <AutomotiveSolutions />,
      },
      {
        path: "/tire",
        element: <TireIndustrySolution />,
      },
      {
        path: "/glass",
        element: <GlassIndustrySolution />,
      },
      {
        path: "/pharma",
        element: <PharmaIndustrySolution />,
      },
      {
        path: "/cement",
        element: <CementIndustrySolution />,
      },
      {
        path: "/chemical",
        element: <ChemicalIndustrySolution />,
      },
      {
        path: "/healthcare",
        element: <HealthcareIndustrySolution />,
      },
      {
        path: "/paper",
        element: <PaperIndustrySolution />,
      },
      {
        path: "/electronics",
        element: <ElectronicsIndustrySolution />,
      },
      {
        path: "/food-beverage",
        element: <FoodBeverageIndustrySolution />,
      },
      {
        path: "/agro",
        element: <AgroIndustrySolution />,
      },
      {
        path: "/water",
        element: <WaterIndustrySolution />,
      },
    ],
  },
];
export default route;
