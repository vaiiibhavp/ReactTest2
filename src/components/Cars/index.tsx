import type { FC, ReactElement } from "react";
import { useEffect, useState } from "react";

import { Cars, Car, CarDetail } from "@/@types";

import CarData from "@/assets/cars.json";

interface CarListProps {
  label: string;
  category: string;
  detail: string;
}

const CarList: FC<CarListProps> = ({
  label,
  detail,
  category,
}): ReactElement => {
  const [type, setType] = useState<Cars>({});

  const [highestSelling, setHighestSelling] = useState<CarDetail>({
    value: "",
    count: 0,
    percentage: 0,
  });
  const [secondHighestSelling, setSecondHighestSelling] = useState<CarDetail>({
    value: "",
    count: 0,
    percentage: 0,
  });

  useEffect((): void => {
    const specificCategory: Cars = {};
    // adding individual item for display via array
    CarData.forEach((item: Car): void => {
      if (item[category as keyof Car] in specificCategory) {
        specificCategory[
          item[category as keyof Car] as keyof typeof specificCategory
        ].push(item);
      } else {
        specificCategory[item[category as keyof Car]] = [item];
      }
    });
    setType(specificCategory);
  }, [CarData]);

  useEffect((): void => {
    const sortedArray: [string, Car[]][] = Object.entries(type).sort(
      (a: [string, Car[]], b: [string, Car[]]): number => {
        return b[1].length - a[1].length;
      }
    );

    if (sortedArray.length) {
      setHighestSelling({
        value: sortedArray?.at(0)?.[0] || "",
        count: sortedArray?.at(0)?.[1]?.length || 0,
        percentage:
          ((sortedArray?.at(0)?.[1]?.length || 0) / CarData.length) * 100,
      });
      setSecondHighestSelling({
        value: sortedArray?.at(1)?.[0] || "",
        count: sortedArray?.at(1)?.[1]?.length || 0,
        percentage:
          ((sortedArray?.at(1)?.[1]?.length || 0) / CarData.length) * 100,
      });
    }
  }, [type]);

  return (
    <div className="car-details">
      <div className="mb-10">
        <u className="name-space">A</u>
        <strong>{label}</strong>
      </div>
      <div className="mb-20">
        <small>{detail}</small>
      </div>
      <div className="d-flex">
        <div className="car-model w-40 d-flex">
          {category === "Model" ? (
            <>
              <div>
                <h2 className="model-count">{Object.keys(type).length}</h2>
                <h4>Unique values</h4>
              </div>
            </>
          ) : (
            <>
              <div className="w-50 d-flex justify-between">
                <div className="w-100">{highestSelling?.value}</div>
                <div className="w-100">{secondHighestSelling?.value}</div>
                <div className="others w-100">
                  Others (
                  {CarData.length -
                    highestSelling?.count -
                    secondHighestSelling?.count}
                  )
                </div>
              </div>
              <div className="w-50 d-flex justify-between">
                <div className="w-100 percent">
                  {highestSelling?.percentage.toFixed(2) + "%"}
                </div>
                <div className="w-100 percent">
                  {secondHighestSelling?.percentage.toFixed(2) + "%"}
                </div>
                <div className="others w-100 percent">
                  {(
                    100 -
                    highestSelling?.percentage -
                    secondHighestSelling?.percentage
                  ).toFixed(2) + "%"}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="car-info w-60 d-flex">
          <div className="progess-bar valid w-100 mb-10"></div>
          <div className="w-60">
            <div>
              Valid <span className="color-dot valid"></span>
            </div>
            <div>
              Mismatched <span className="color-dot mis-matched"></span>
            </div>
            <div className="mb-10">
              Missing <span className="color-dot missing"></span>
            </div>
            <div>Unique</div>
            <div>Most Common</div>
          </div>
          <div className="w-30">
            <div>{CarData.length}</div>
            <div>0%</div>
            <div className="mb-10">0%</div>
            <div>{Object.keys(type).length}</div>
            <div>{highestSelling?.value}</div>
          </div>
          <div className="w-10 others">
            <div>100%</div>
            <div>0%</div>
            <div className="mb-10">0%</div>
            <div></div>
            <div>{highestSelling?.percentage.toFixed(2) + "%"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
