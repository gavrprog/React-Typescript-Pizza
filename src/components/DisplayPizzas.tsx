import React, { FC, useState } from "react";
import Pagination from "./Pagination";
import SinglPizza from "./SinglPizza";
import Pizza from "../models/Pizza";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (editPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  const [curPage, setCurPage] = useState<number>(1);
  const itemsPerPage = 2;
  const skip = itemsPerPage * (curPage - 1);
  const pizzasPaginated = pizzasList.slice(skip, curPage * itemsPerPage);

  const handleNext = () => {
    setCurPage(curPage + 1);
  };
  const handlePrev = () => {
    setCurPage(curPage - 1);
  };

  return (
    <>
      <div className="container">
        {pizzasPaginated?.map((pizza) => (
          <SinglPizza
            key={pizza.id}
            pizza={pizza}
            updatePizza={updatePizza}
            deletePizza={deletePizza}
          />
        ))}
        {/* {pizzasList.map((pizza) => {
          return <SinglPizza 
                    key={pizza.id} 
                    pizza={pizza} 
                    updatePizza={updatePizza}
                    deletePizza={deletePizza}
                  />
        })} */}
      </div>
      <Pagination
        curPage={curPage}
        itemsPerPage={itemsPerPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
        pizzasList={pizzasList}
      />
    </>
  );
};

export default DisplayPizzas;
