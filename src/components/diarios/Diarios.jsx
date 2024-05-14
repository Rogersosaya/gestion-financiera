import React from "react";
import DiarioItem from "./DiarioItem";

function Diarios({ asientosContable }) {
  return (
    <>
      <h4 className="text-blue-600 font-bold text-3xl mx-3 mb-4">Diarios:</h4>
      <div className="flex flex-wrap">
        {asientosContable.map((asiento, index) => {
          return (
            <div key={index}>
              <div className="mx-3 font-semibold">Asiento Contable #{index+1}</div>
              <DiarioItem asiento={asiento}  />
            </div>
          );
        })}
        {/* {Array.from({length: 3}).map((_,index) => {
        return (

        <DiarioItem key={index}/>
        )
      })} */}
      </div>
    </>
  );
}

export default Diarios;
