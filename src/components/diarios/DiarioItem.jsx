import React from "react";

function DiarioItem({ asiento }) {
  var totalDebe = 0;
  var totalHaber = 0;
  asiento.cuentas.forEach(cuenta => {
    if(cuenta.tipo == "debe"){
      totalDebe+=Number(cuenta.monto);
    }else{
      totalHaber+=Number(cuenta.monto);
    }
  });
  return (
    <div>
      
      <table className="mx-3 mb-6">
        <thead>
          <tr>
            <th className="border border-black px-2">Fecha</th>
            <th className="border border-black px-2">Cuenta</th>
            <th className="border border-black px-2">Debe</th>
            <th className="border border-black px-2">Haber</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={asiento.cuentas.length + 1} className="border border-black px-2">
              {asiento.fecha}
            </td>
          </tr>
          {asiento.cuentas.map((cuenta, index) => {
            return (<tr key={index}>
              <td className="border border-black px-2">{cuenta.name}</td>
              <td className="border border-black px-2">{cuenta.tipo=="debe" ? `S/${cuenta.monto}` :""}</td>
              <td className="border border-black px-2">{cuenta.tipo=="haber" ? `S/${cuenta.monto}` :""}</td>
            </tr>)
            
          })}
          <tr>
            <td></td>
            <td></td>
            <td className="border border-black px-2">S/{totalDebe}</td>
            <td className="border border-black px-2">S/{totalHaber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DiarioItem;
