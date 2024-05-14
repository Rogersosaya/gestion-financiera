import React from "react";

function MayorItem({ cuentaContable }) {
  // console.log(cuentaContable);
  return (
    <div className="border border-gray-300 mx-3 mb-3">
      <div className="mx-3 font-bold mb-2">{cuentaContable.name}</div>
      <div className="mx-3 mb-6">
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="border border-black px-2">Fecha</th>

            <th className="border border-black px-2">Debe</th>
            <th className="border border-black px-2">Haber</th>
          </tr>
        </thead>
        <tbody>
          {cuentaContable.cuentas.map((cuenta, index) => {
            return (
              <tr key={index}>
                <td className="border border-black px-2">{cuenta.fecha}</td>

                <td className="border border-black px-2">
                  {cuenta.tipo == "debe" ? `S/${cuenta.monto}` : ""}
                </td>
                <td className="border border-black px-2">
                  {cuenta.tipo == "haber" ? `S/${cuenta.monto}` : ""}
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td className="border border-black px-2">
              {(cuentaContable.categoria == "Activo" ||
                cuentaContable.categoria == "Gastos"||
                cuentaContable.categoria == "Costo") &&
                `S/${cuentaContable.total}`}
            </td>
            <td className="border border-black px-2">
              {(cuentaContable.categoria == "Pasivo" ||
                cuentaContable.categoria == "Patrimonio" ||
                cuentaContable.categoria == "Ingresos") &&
                `S/${cuentaContable.total}`}
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
  );
}

export default MayorItem;
