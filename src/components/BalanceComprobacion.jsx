import React from "react";

function BalanceComprobacion({ arrayCuentas }) {
  console.log(arrayCuentas);
  var totalDebe = 0;
  var totalHaber = 0;
  arrayCuentas.forEach(cuentaContable => {
    if(cuentaContable.categoria == "Activo" || cuentaContable.categoria=="Gastos" || cuentaContable.categoria=="Costo"){
      totalDebe += cuentaContable.total
    }
    if(cuentaContable.categoria == "Pasivo" || cuentaContable.categoria=="Patrimonio" || cuentaContable.categoria=="Ingresos"){
      totalHaber += cuentaContable.total
    }
  })
  return (
    <>
      <h4 className="text-blue-600 font-bold text-3xl mx-3 mb-4">
        Balance De Comprobación:
      </h4>
      <div className="">
        <table className="mx-3 mb-6">
          <thead>
            <tr>
              <th className="border border-black px-2">Cuentas</th>
              <th className="border border-black px-2">Debe</th>
              <th className="border border-black px-2">Haber</th>
            </tr>
          </thead>
          <tbody>
            {arrayCuentas.map((cuentaContable, index) => {
              return (
              <tr key={index}>
                <td className="border border-black px-2">
                  {cuentaContable.name}
                </td>
                <td className="border border-black px-2">
                  {(cuentaContable.categoria == "Activo" ||
                    cuentaContable.categoria == "Gastos" ||
                    cuentaContable.categoria == "Costo") &&
                    `S/${cuentaContable.total}`}
                </td>
                <td className="border border-black px-2">
                  {(cuentaContable.categoria == "Pasivo" ||
                    cuentaContable.categoria == "Patrimonio" ||
                    cuentaContable.categoria == "Ingresos") &&
                    `S/${cuentaContable.total}`}
                </td>
              </tr>);
            })}
            <tr>
            <td></td>
            <td className="border border-black px-2">S/{totalDebe}</td>
            <td className="border border-black px-2">S/{totalHaber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BalanceComprobacion;
