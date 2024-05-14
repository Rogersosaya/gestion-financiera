import React, { useState } from "react";

function CuentaContableInput({asiento}) {
  const [name, setName] = useState("10 EFECTIVO Y EQUIVALENTES DE EFECTIVO");
  const [monto, setMonto] = useState(0);
  const [tipo, setTipo] = useState("debe");
  
  const addCuentaContable = () => {
    const cuentaNueva = {
      name: name,
      monto: monto,
      tipo: tipo,
    };
    console.log(name,monto,tipo)
    // console.log(cuenta);
    // console.log(asiento)
    asiento.cuentas.push(cuentaNueva)
  };
  return (
    <>
      
      <div className="ml-2 mb-3">
        <label htmlFor="cuenta" className="block text-md font-semibold ">
          Nombre:
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>

          <select
            name=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-80 text-sm border-gray-300 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="10 EFECTIVO Y EQUIVALENTES DE EFECTIVO">
              10 EFECTIVO Y EQUIVALENTES DE EFECTIVO
            </option>
            <option value="11 INVERSIONES FINANCIERAS">
              11 INVERSIONES FINANCIERAS
            </option>
            <option value="12 CUENTAS POR COBRAR COMERCIALES – TERCEROS">
              12 CUENTAS POR COBRAR COMERCIALES – TERCEROS
            </option>
            <option value="13 CUENTAS POR COBRAR COMERCIALES – RELACIONADAS">
              13 CUENTAS POR COBRAR COMERCIALES – RELACIONADAS
            </option>
            <option value="14 CUENTAS POR COBRAR AL PERSONAL, A LOS ACCIONISTAS (SOCIOS), DIRECTORES Y GERENTES">
              14 CUENTAS POR COBRAR AL PERSONAL, A LOS ACCIONISTAS (SOCIOS),
              DIRECTORES Y GERENTES
            </option>
            <option value="16 CUENTAS POR COBRAR DIVERSAS – TERCEROS">
              16 CUENTAS POR COBRAR DIVERSAS – TERCEROS
            </option>
            <option value="17 CUENTAS POR COBRAR DIVERSAS – RELACIONADAS">
              17 CUENTAS POR COBRAR DIVERSAS – RELACIONADAS
            </option>
            <option value="18 SERVICIOS Y OTROS CONTRATADOS POR ANTICIPADO">
              18 SERVICIOS Y OTROS CONTRATADOS POR ANTICIPADO
            </option>
            <option value="20 MERCADERÍAS">20 MERCADERÍAS</option>
            <option value="21 PRODUCTOS TERMINADOS">
              21 PRODUCTOS TERMINADOS
            </option>
            <option value="22 SUBPRODUCTOS, DESECHOS Y DESPERDICIOS">
              22 SUBPRODUCTOS, DESECHOS Y DESPERDICIOS
            </option>
            <option value="23 PRODUCTOS EN PROCESO">
              23 PRODUCTOS EN PROCESO
            </option>
            <option value="24 MATERIAS PRIMAS">24 MATERIAS PRIMAS</option>
            <option value="25 MATERIALES AUXILIARES, SUMINISTROS Y REPUESTOS">
              25 MATERIALES AUXILIARES, SUMINISTROS Y REPUESTOS
            </option>
            <option value="26 ENVASES Y EMBALAJES">
              26 ENVASES Y EMBALAJES
            </option>
            <option value="27 ACTIVOS NO CORRIENTES MANTENIDOS PARA LA VENTA">
              27 ACTIVOS NO CORRIENTES MANTENIDOS PARA LA VENTA
            </option>
            <option value="28 EXISTENCIAS POR RECIBIR">
              28 EXISTENCIAS POR RECIBIR
            </option>
            <option value="30 INVERSIONES MOBILIARIAS">
              30 INVERSIONES MOBILIARIAS
            </option>
            <option value="31 INVERSIONES INMOBILIARIAS">
              31 INVERSIONES INMOBILIARIAS
            </option>
            <option value="32 ACTIVOS ADQUIRIDOS EN ARRENDAMIENTO FINANCIERO">
              32 ACTIVOS ADQUIRIDOS EN ARRENDAMIENTO FINANCIERO
            </option>
            <option value="33 INMUEBLES, MAQUINARIA Y EQUIPO">
              33 INMUEBLES, MAQUINARIA Y EQUIPO
            </option>
            <option value="34 INTANGIBLES">34 INTANGIBLES</option>
            <option value="35 ACTIVOS BIOLÓGICOS">35 ACTIVOS BIOLÓGICOS</option>
            <option value="36 DESVALORIZACIÓN DE ACTIVO INMOVILIZADO">
              36 DESVALORIZACIÓN DE ACTIVO INMOVILIZADO
            </option>
            <option value="37 ACTIVO DIFERIDO">37 ACTIVO DIFERIDO</option>
            <option value="38 OTROS ACTIVOS">38 OTROS ACTIVOS</option>
            <option value="39 DEPRECIACIÓN, AMORTIZACIÓN Y AGOTAMIENTO ACUMULADOS">
              39 DEPRECIACIÓN, AMORTIZACIÓN Y AGOTAMIENTO ACUMULADOS
            </option>
            <option value="40 TRIBUTOS Y APORTES AL SISTEMA DE PENSIONES Y DE SALUD POR PAGAR">
              40 TRIBUTOS Y APORTES AL SISTEMA DE PENSIONES Y DE SALUD POR PAGAR
            </option>
            <option value="41 REMUNERACIONES Y PARTICIPACIONES POR PAGAR">
              41 REMUNERACIONES Y PARTICIPACIONES POR PAGAR
            </option>
            <option value="42 CUENTAS POR PAGAR COMERCIALES – TERCEROS">
              42 CUENTAS POR PAGAR COMERCIALES – TERCEROS
            </option>
            <option value="43 CUENTAS POR PAGAR COMERCIALES – RELACIONADAS">
              43 CUENTAS POR PAGAR COMERCIALES – RELACIONADAS
            </option>
            <option value="44 CUENTAS POR PAGAR A LOS ACCIONISTAS, DIRECTORES Y GERENTES">
              44 CUENTAS POR PAGAR A LOS ACCIONISTAS, DIRECTORES Y GERENTES
            </option>
            <option value="45 OBLIGACIONES FINANCIERAS">
              45 OBLIGACIONES FINANCIERAS
            </option>
            <option value="46 CUENTAS POR PAGAR DIVERSAS – TERCEROS">
              46 CUENTAS POR PAGAR DIVERSAS – TERCEROS
            </option>
            <option value="47 CUENTAS POR PAGAR DIVERSAS – RELACIONADAS">
              47 CUENTAS POR PAGAR DIVERSAS – RELACIONADAS
            </option>
            <option value="48 PROVISIONES">48 PROVISIONES</option>
            <option value="49 PASIVO DIFERIDO">49 PASIVO DIFERIDO</option>
            <option value="50 CAPITAL SOCIAL">50 CAPITAL SOCIAL</option>
            <option value="51 ACCIONES DE INVERSIÓN">
              51 ACCIONES DE INVERSIÓN
            </option>
            <option value="52 CAPITAL ADICIONAL">52 CAPITAL ADICIONAL</option>
            <option value="56 RESULTADOS NO REALIZADOS">
              56 RESULTADOS NO REALIZADOS
            </option>
            <option value="57 EXCEDENTE DE REVALUACIÓN">
              57 EXCEDENTE DE REVALUACIÓN
            </option>
            <option value="58 RESERVAS">58 RESERVAS</option>
            <option value="60 COMPRAS">60 COMPRAS</option>
            <option value="61 VARIACIÓN DE EXISTENCIAS">
              61 VARIACIÓN DE EXISTENCIAS
            </option>
            <option value="62 GASTOS DE PERSONAL, DIRECTORES Y GERENTES">
              62 GASTOS DE PERSONAL, DIRECTORES Y GERENTES
            </option>
            <option value="63 GASTOS DE SERVICIOS PRESTADOS POR TERCEROS">
              63 GASTOS DE SERVICIOS PRESTADOS POR TERCEROS
            </option>
            <option value="64 GASTOS POR TRIBUTOS">
              64 GASTOS POR TRIBUTOS
            </option>
            <option value="65 OTROS GASTOS DE GESTIÓN">
              65 OTROS GASTOS DE GESTIÓN
            </option>
            <option value="66 PÉRDIDA POR MEDICIÓN DE ACTIVOS NO FINANCIEROS AL VALOR RAZONABLE">
              66 PÉRDIDA POR MEDICIÓN DE ACTIVOS NO FINANCIEROS AL VALOR
              RAZONABLE
            </option>
            <option value="67 GASTOS FINANCIEROS">67 GASTOS FINANCIEROS</option>
            <option value="68 VALUACIÓN Y DETERIORO DE ACTIVOS Y PROVISIONES">
              68 VALUACIÓN Y DETERIORO DE ACTIVOS Y PROVISIONES
            </option>
            <option value="69 COSTO DE VENTAS">69 COSTO DE VENTAS</option>
            <option value="70 VENTAS">70 VENTAS</option>
            <option value="71 VARIACIÓN DE LA PRODUCCIÓN ALMACENADA">
              71 VARIACIÓN DE LA PRODUCCIÓN ALMACENADA
            </option>
            <option value="72 PRODUCCIÓN DE ACTIVO INMOVILIZADO">
              72 PRODUCCIÓN DE ACTIVO INMOVILIZADO
            </option>
            <option value="73 DESCUENTOS, REBAJAS Y BONIFICACIONES OBTENIDOS">
              73 DESCUENTOS, REBAJAS Y BONIFICACIONES OBTENIDOS
            </option>
            <option value="74 DESCUENTOS, REBAJAS Y BONIFICACIONES CONCEDIDOS">
              74 DESCUENTOS, REBAJAS Y BONIFICACIONES CONCEDIDOS
            </option>
            <option value="75 OTROS INGRESOS DE GESTIÓN">
              75 OTROS INGRESOS DE GESTIÓN
            </option>
            <option value="76 GANANCIA POR MEDICIÓN DE ACTIVOS NO FINANCIEROS AL VALOR RAZONABLE">
              76 GANANCIA POR MEDICIÓN DE ACTIVOS NO FINANCIEROS AL VALOR
              RAZONABLE
            </option>
            <option value="77 INGRESOS FINANCIEROS">
              77 INGRESOS FINANCIEROS
            </option>
            <option value="78 CARGAS CUBIERTAS POR PROVISIONES">
              78 CARGAS CUBIERTAS POR PROVISIONES
            </option>
            <option value="79 CARGAS IMPUTABLES A CUENTAS DE COSTOS Y GASTOS">
              79 CARGAS IMPUTABLES A CUENTAS DE COSTOS Y GASTOS
            </option>
            <option value="81 PRODUCCIÓN DEL EJERCICIO">
              81 PRODUCCIÓN DEL EJERCICIO
            </option>
            <option value="82 VALOR AGREGADO">82 VALOR AGREGADO</option>
            <option value="83 EXCEDENTE BRUTO (INSUFICIENCIA BRUTA) DE EXPLOTACIÓN">
              83 EXCEDENTE BRUTO (INSUFICIENCIA BRUTA) DE EXPLOTACIÓN
            </option>
            <option value="84 RESULTADO DE EXPLOTACIÓN">
              84 RESULTADO DE EXPLOTACIÓN
            </option>
            <option value="85 RESULTADO ANTES DE PARTICIPACIONES E IMPUESTOS">
              85 RESULTADO ANTES DE PARTICIPACIONES E IMPUESTOS
            </option>
            <option value="87 PARTICIPACIONES DE LOS TRABAJADORES">
              87 PARTICIPACIONES DE LOS TRABAJADORES
            </option>
            <option value="88 IMPUESTO A LA RENTA">
              88 IMPUESTO A LA RENTA
            </option>
            <option value="89 DETERMINACIÓN DEL RESULTADO DEL EJERCICIO">
              89 DETERMINACIÓN DEL RESULTADO DEL EJERCICIO
            </option>
            <option value="91 COSTOS POR DISTRIBUIR.">
              91 COSTOS POR DISTRIBUIR.
            </option>
            <option value="92 COSTOS DE PRODUCCIÓN.">
              92 COSTOS DE PRODUCCIÓN.
            </option>
            <option value="93 CENTROS DE COSTOS.">93 CENTROS DE COSTOS.</option>
            <option value="94 GASTOS ADMINISTRATIVOS.">
              94 GASTOS ADMINISTRATIVOS.
            </option>
            <option value="95 GASTOS DE VENTAS.">95 GASTOS DE VENTAS.</option>
            <option value="96 GASTOS FINANCIEROS">96 GASTOS FINANCIEROS</option>
          </select>
        </div>
        <label htmlFor="cuenta" className="block text-md font-semibold mt-2">
          Monto:
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-80 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <label htmlFor="cuenta" className="block text-md font-semibold mt-2">
          Debe o Haber:
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <select
            
            
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-80 text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="debe">Debe</option>
            <option value="haber">Haber</option>
          </select>
        </div>
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4 mx-auto"
          onClick={() => addCuentaContable()}
        >
          Agregar
        </button>
      </div>
    </>
  );
}

export default CuentaContableInput;
