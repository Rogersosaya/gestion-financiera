import React from "react";

function EstadoResultados({ arrayCuentas }) {
  // console.log(arrayCuentas.find((cuenta) => cuenta.name == "70 VENTAS").total);
  console.log(arrayCuentas)
  const ventaCuenta = arrayCuentas.find(
    (cuenta) => cuenta.name === "70 VENTAS"
  );
  const ventas = ventaCuenta ? ventaCuenta.total : 0;
  const costoCuenta = arrayCuentas.find(
    (cuenta) => cuenta.name == "69 COSTO DE VENTAS"
  );
  console.log(costoCuenta)
  const costoVentas = costoCuenta ? costoCuenta.total : 0;

  const utilidadBruta = ventas - costoVentas;
  var gastosOperativos = 0;

  arrayCuentas.forEach((cuenta) => {
    if (cuenta.name == "62 GASTOS DE PERSONAL, DIRECTORES Y GERENTES" || cuenta.name == "63 GASTOS DE SERVICIOS PRESTADOS POR TERCEROS") {
      gastosOperativos += cuenta.total;
    } 
  }); // Aquí proporcionamos 0 como valor inicial para el acumulador
  const utilidadOperativa = utilidadBruta - gastosOperativos;
  const otrosGastos = 0;
  const otrosIngresos = 0;

  const utilidadAntesParticipacion =
    utilidadOperativa - otrosGastos + otrosIngresos;
  const participacionUtilidad = 0;
  const utilidadAntesImpuestos =
    utilidadAntesParticipacion - participacionUtilidad;
  const impuestoRenta = (0.3 * utilidadAntesImpuestos).toFixed(1);
  const utilidadFinal = utilidadAntesImpuestos - impuestoRenta;
  return (
    <>
      <h4 className="text-blue-600 font-bold text-3xl mx-3 mb-4">
        Estado de Resultados:
      </h4>
      <div className="flex justify-center">
        <table className="mx-3 mb-6">
          <thead>
            <tr>
              <th className="border border-black px-2">Concepto</th>
              <th className="border border-black px-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-2">Ventas</td>
              <td className="border border-black px-2">S/{ventas}</td>
            </tr>
            <tr>
              <td className="border border-black px-2">Costo de Ventas</td>

              <td className="border border-black px-2">S/{costoVentas}</td>
            </tr>
            <tr>
              <td className="border border-black px-2">Utilidad Bruta</td>

              <td className="border border-black px-2">S/{utilidadBruta}</td>
            </tr>
            <tr>
              <td className="border border-black px-2">Gastos operativos</td>

              <td className="border border-black px-2">S/{gastosOperativos}</td>
            </tr>
            <tr>
              <td className="border border-black px-2">Utilidad Operativa</td>

              <td className="border border-black px-2">
                S/{utilidadOperativa}
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2">Otros gastos</td>

              <td className="border border-black px-2">S/{otrosGastos}</td>
            </tr>
            <tr>
              <td className="border border-black px-2">Otros Ingresos</td>

              <td className="border border-black px-2">S/{otrosIngresos}</td>
            </tr>
            <tr>
              <td className="border border-black px-2">
                Utilidad antes de Participación
              </td>

              <td className="border border-black px-2">
                S/{utilidadAntesParticipacion}
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2">
                Participación Utilidad
              </td>

              <td className="border border-black px-2">
                S/{participacionUtilidad}
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2">
                Utilidad antes de Impuestos
              </td>

              <td className="border border-black px-2">
                S/{utilidadAntesImpuestos}
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2">Impuesto a la Renta</td>

              <td className="border border-black px-2">S/{impuestoRenta}</td>
            </tr>
            <tr>
              <td className="border border-black px-2 text-xl font-bold text-blue-700">
                Utilidad Neta
              </td>

              <td className="border border-black px-2">S/{utilidadFinal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EstadoResultados;
