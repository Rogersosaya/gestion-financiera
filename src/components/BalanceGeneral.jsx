import React from "react";

function BalanceGeneral({ arrayCuentas }) {
  var totalActivos = 0;
  var totalPasivos = 0;
  var totalPatrimonio = 0;

  arrayCuentas.forEach((cuentaContable) => {
    if (cuentaContable.categoria == "Activo") {
      totalActivos += cuentaContable.total;
    }
    if (cuentaContable.categoria == "Pasivo") {
      totalPasivos += cuentaContable.total;
    }
    if (cuentaContable.categoria == "Patrimonio") {
      totalPatrimonio += cuentaContable.total;
    }
  });
  var utilidadAcumulada = totalActivos - (totalPasivos + totalPatrimonio);
  return (
    <>
      <h4 className="text-blue-600 font-bold text-3xl mx-3 mb-4">
        Balance General:
      </h4>
      <div className="flex justify-center">
        <div>
          <table className="mx-3 mb-6">
            <thead>
              <tr>
                <th colSpan={2} className="border border-black px-2">
                  Activos
                </th>
              </tr>
            </thead>
            <tbody>
              {arrayCuentas.map((cuentaContable, index) => {
                return (
                  cuentaContable.categoria == "Activo" && (
                    <tr key={index + cuentaContable.name}>
                      <td className="border border-black px-2">
                        {cuentaContable.name}
                      </td>
                      <td className="border border-black px-2">
                        S/{cuentaContable.total}
                      </td>
                    </tr>
                  )
                );
              })}
              <tr>
                <td className="border border-black px-2">Total Activos</td>
                <td className="border border-black px-2">S/{totalActivos}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table className="mx-3 mb-6">
            <thead>
              <tr>
                <th colSpan={2} className="border border-black px-2">
                  Pasivos
                </th>
              </tr>
            </thead>
            <tbody>
              {arrayCuentas.map((cuentaContable, index) => {
                return (
                  cuentaContable.categoria == "Pasivo" && (
                    <tr key={index + cuentaContable.name}>
                      <td className="border border-black px-2">
                        {cuentaContable.name}
                      </td>
                      <td className="border border-black px-2">
                        S/{cuentaContable.total}
                      </td>
                    </tr>
                  )
                );
              })}
              <tr>
                <td className="border border-black px-2">Total Pasivos</td>
                <td className="border border-black px-2">S/{totalPasivos}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table className="mx-3 mb-6">
            <thead>
              <tr>
                <th colSpan={2} className="border border-black px-2">
                  Patrimonio
                </th>
              </tr>
            </thead>
            <tbody>
              {arrayCuentas.map((cuentaContable, index) => {
                return (
                  cuentaContable.categoria == "Patrimonio" && (
                    <tr key={index}>
                      <td className="border border-black px-2">
                        {cuentaContable.name}
                      </td>
                      <td className="border border-black px-2">
                        S/{cuentaContable.total}
                      </td>
                    </tr>
                  )
                );
              })}
              <tr>
                <td className="border border-black px-2">Utilidad Acumulada</td>
                <td className="border border-black px-2">
                  S/{utilidadAcumulada}
                </td>
              </tr>
              <tr>
                <td className="border border-black px-2">Total Patrimonio</td>
                <td className="border border-black px-2">
                  S/{totalPatrimonio + utilidadAcumulada}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-2xl font-bold  flex justify-center">
        <table className="text-center">
          <thead>
            <tr>
              <th className="px-7">Total Activos</th>
              <th className="px-7">=</th>
              <th className="px-7">Total Pasivos</th>
              <th className="px-7">+</th>
              <th className="px-7">Total Patrimonio</th>
            </tr>
          </thead>
          <tbody className="text-blue-700 text-3xl">
            <tr>
              <td className="px-7">S/{totalActivos}</td>
              <td className="px-7">=</td>
              <td className="px-7">S/{totalPasivos}</td>
              <td className="px-7">+</td>
              <td className="px-7">S/{totalPatrimonio + utilidadAcumulada}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BalanceGeneral;
