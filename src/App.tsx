import type { FC, ReactElement } from "react";

import { CarList } from "./components";

const App: FC = (): ReactElement => {
  return (
    <div className="car-wrapper">
      <CarList label="Maker" category="Make" detail="Company of the vehicle" />
      <CarList label="Model" category="Model" detail="Car Model" />
      <CarList
        label="Vehicle Class"
        category="Vehicle Class"
        detail="Class of vahicle depending on their utility, capacity and weight"
      />
    </div>
  );
};

export default App;
