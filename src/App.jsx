import { useState } from "react";
import CuentaContableInput from "./components/CuentaContableInput";
import ModalResultados from "./components/ModalResultados";
import { 
  FaCalculator, 
  FaCalendarAlt, 
  FaPlus, 
  FaCheck, 
  FaChartLine, 
  FaBuilding,
  FaMoneyBillWave,
  FaClipboardList
} from "react-icons/fa";

function App() {
  const [cant, setCant] = useState(0);
  const [cantCuentas, setcantCuentas] = useState(0);
  const [fecha, setFecha] = useState("");
  const [asientosContable, setAsientosContable] = useState([]);
  const asientoContable = {
    fecha: fecha,
    cuentas: [],
  };
  const addAsientosContable = () => {
    setAsientosContable([...asientosContable, asientoContable]);

    setCant(0);
    setcantCuentas(0);
    setFecha("");
  };
  const closeModal = () => {
    setOccult(true);
  };
  const [occult, setOccult] = useState(true);
  const getCategoria = (name) => {
    const numeroCuenta = parseInt(name.split(" ")[0]); // Extraer el número de la cuenta

    if (numeroCuenta >= 10 && numeroCuenta <= 39) {
      return "Activo";
    } else if (numeroCuenta >= 40 && numeroCuenta <= 49) {
      return "Pasivo";
    } else if (numeroCuenta >= 50 && numeroCuenta <= 59) {
      return "Patrimonio";
    } else if (numeroCuenta >= 60 && numeroCuenta <= 68) {
      return "Gastos";
    } else if (numeroCuenta == 69) {
      return "Costo";
    } else if (numeroCuenta >= 70 && numeroCuenta <= 79) {
      return "Ingresos";
    } else if (numeroCuenta >= 90 && numeroCuenta <= 99) {
      return "Gastos";
    } else {
      return "Categoría no definida";
    }
  };
  // const AsientoEjemplo = [
  //   {
  //     fecha: "20/21/23",
  //     cuentas: [
  //       {
  //         name: "50 CAPITAL SOCIAL",
  //         monto: 50000,
  //         tipo: "haber",
  //       },
  //       {
  //         name: "10 EFECTIVO Y EQUIVALENTES DE EFECTIVO",
  //         monto: 50000,
  //         tipo: "debe",
  //       },
  //     ],
  //   },
  //   {
  //     fecha: "21/21/23",
  //     cuentas: [
  //       {
  //         name: "70 VENTAS",
  //         monto: 20000,
  //         tipo: "haber",
  //       },
  //       {
  //         name: "10 EFECTIVO Y EQUIVALENTES DE EFECTIVO",
  //         monto: 18000,
  //         tipo: "debe",
  //       },
  //       {
  //         name: "12 CUENTAS POR COBRAR COMERCIALES – TERCEROS",
  //         monto: 2000,
  //         tipo: "debe",
  //       },
  //     ],
  //   },
  // ];
  // const nuevoArray= [];
  let arrayCuentas = [];
  // asientosContable.forEach((asiento) => {
  //   asiento.cuentas.forEach((cuenta) => {
  //     const existingCuenta = arrayCuentas.find(
  //       (item) => item.name === cuenta.name
  //     );
  //     if (existingCuenta) {
  //       existingCuenta.cuentas.push({
  //         fecha: asiento.fecha,
  //         monto: cuenta.monto,
  //         tipo: cuenta.tipo,
  //       });
  //     } else {
  //       arrayCuentas.push({
  //         name: cuenta.name,
  //         categoria: getCategoria(cuenta.name),
  //         cuentas: [
  //           {
  //             fecha: asiento.fecha,
  //             monto: cuenta.monto,
  //             tipo: cuenta.tipo,
  //           },
  //         ],
  //       });
  //     }
  //   });
  // });
  asientosContable.forEach((asiento) => {
    asiento.cuentas.forEach((cuenta) => {
      const existingCuenta = arrayCuentas.find(
        (item) => item.name === cuenta.name
      );
      if (existingCuenta) {
        existingCuenta.cuentas.push({
          fecha: asiento.fecha,
          monto: cuenta.monto,
          tipo: cuenta.tipo,
        });
      } else {
        arrayCuentas.push({
          name: cuenta.name,
          categoria: getCategoria(cuenta.name),
          total: 0, // Inicializamos el total en 0
          cuentas: [
            {
              fecha: asiento.fecha,
              monto: cuenta.monto,
              tipo: cuenta.tipo,
            },
          ],
        });
      }
    });
  });

  // Calcular el total para cada cuenta en el nuevoArray
  arrayCuentas.forEach((cuenta) => {
    let total = 0;
    cuenta.cuentas.forEach((asiento) => {
      if (
        (cuenta.categoria === "Activo" ||
          cuenta.categoria === "Gastos" ||
          cuenta.categoria === "Costo") &&
        asiento.tipo === "debe"
      ) {
        total += Number(asiento.monto);
      } else if (
        (cuenta.categoria === "Activo" ||
          cuenta.categoria === "Gastos" ||
          cuenta.categoria === "Costo") &&
        asiento.tipo === "haber"
      ) {
        total -= Number(asiento.monto);
      } else if (
        (cuenta.categoria === "Pasivo" ||
          cuenta.categoria === "Patrimonio" ||
          cuenta.categoria === "Ingresos") &&
        asiento.tipo === "haber"
      ) {
        total += Number(asiento.monto);
      } else if (
        (cuenta.categoria === "Pasivo" ||
          cuenta.categoria === "Patrimonio" ||
          cuenta.categoria === "Ingresos") &&
        asiento.tipo === "debe"
      ) {
        total -= Number(asiento.monto);
      }
    });
    cuenta.total = total;
  });
  arrayCuentas = arrayCuentas
    .map((cuenta) => {
      return {
        ...cuenta,
        cuentas: cuenta.cuentas.sort(
          (a, b) => new Date(a.fecha) - new Date(b.fecha)
        ),
      };
    })
    .sort((a, b) => {
      const numA = parseInt(a.name.match(/^\d+/)[0]);
      const numB = parseInt(b.name.match(/^\d+/)[0]);
      if (numA !== numB) {
        return numA - numB;
      } else {
        // Si los números al inicio del nombre son iguales, ordenar por la fecha de la primera cuenta
        const fechaA = new Date(a.cuentas[0].fecha);
        const fechaB = new Date(b.cuentas[0].fecha);
        return fechaA - fechaB;
      }
    });
  const entradaArrayCuentas = [
    {
      name: "31 INVERSIONES INMOBILIARIAS",
      otros: "otros31",
      cuentas: [
        {
          fecha: "2024-05-27",
        },
        {
          fecha: "2024-05-19",
        },
        {
          fecha: "2024-04-19",
        },
      ],
    },
    {
      name: "43 CUENTAS POR PAGAR COMERCIALES – RELACIONADAS",
      otros: "otros43",
      cuentas: [
        {
          fecha: "2024-05-27",
        },
      ],
    },
    {
      name: "41 REMUNERACIONES Y PARTICIPACIONES POR PAGAR",
      otros: "otros41",
      cuentas: [
        {
          fecha: "2024-06-27",
        },
      ],
    },
  ];
  const salida = [
    {
      name: "31 INVERSIONES INMOBILIARIAS",
      otros: "otros31",
      cuentas: [
        {
          fecha: "2024-04-19",
        },
        {
          fecha: "2024-05-19",
        },
        {
          fecha: "2024-05-27",
        },
      ],
    },
    {
      name: "41 REMUNERACIONES Y PARTICIPACIONES POR PAGAR",
      otros: "otros41",
      cuentas: [
        {
          fecha: "2024-06-27",
        },
      ],
    },
    {
      name: "43 CUENTAS POR PAGAR COMERCIALES – RELACIONADAS",
      otros: "otros43",
      cuentas: [
        {
          fecha: "2024-05-27",
        },
      ],
    },
  ];
  // const nuevoArray = [
  //   {
  //     name: "10 EFECTIVO Y EQUIVALENTES DE EFECTIVO",
  //     categoria: getCategoria("10 EFECTIVO Y EQUIVALENTES DE EFECTIVO"),
  //     total: 100,
  //     cuentas: [
  //       {
  //         fecha: "20/21/23",
  //         monto: 200,
  //         tipo: "debe",
  //       },
  //       {
  //         fecha: "21/21/23",
  //         monto: 100,
  //         tipo: "haber",
  //       },
  //     ],
  //   },
  //   {
  //     name: "11 INVERSIONES FINANCIERAS",
  //     categoria: getCategoria("11 INVERSIONES FINANCIERAS"),
  //     total: 100,
  //     cuentas: [
  //       {
  //         fecha: "20/21/23",
  //         monto: 200,
  //         tipo: "debe",
  //       },
  //     ],
  //   },
  //   {
  //     name: "42 CUENTAS POR PAGAR COMERCIALES – TERCEROS",
  //     categoria: getCategoria("42 CUENTAS POR PAGAR COMERCIALES – TERCEROS"),
  //     total: -100,
  //     cuentas: [
  //       {
  //         fecha: "21/21/23",
  //         monto: 100,
  //         tipo: "debe",
  //       },
  //     ],
  //   },
  // ];
  // const cuentaNueva ={
  //   name: "as",
  //   monto: 20000,
  //   tipo:"DEBE",
  // }
  // asientoContable.cuentas.push(cuentaNueva)
  // console.log(asientoContable);
  // console.log(arrayCuentas);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-4 shadow-lg">
              <FaBuilding className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Sistema de Gestión Financiera
            </h1>
            <p className="text-lg text-gray-600">
              Control contable y análisis financiero profesional
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
              <h2 className="text-2xl font-semibold text-white flex items-center">
                <FaCalculator className="mr-3" />
                Panel de Control Contable
              </h2>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Panel - Asiento Contable */}
                <div className="lg:col-span-5">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center">
                      <FaPlus className="mr-2" />
                      Nuevo Asiento Contable
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Cantidad de cuentas contables
                        </label>
                        <div className="flex items-center space-x-3">
                          <input
                            value={cant}
                            onChange={(e) => setCant(e.target.value)}
                            type="number"
                            className="flex-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 py-2.5 px-4 transition-all duration-200"
                            min={0}
                            max={5}
                            required
                          />
                          <button
                            type="button"
                            className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
                            onClick={() => setcantCuentas(cant)}
                          >
                            <FaCheck className="mr-2" />
                            Guardar
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Fecha del asiento
                        </label>
                        <div className="flex items-center space-x-3">
                          <FaCalendarAlt className="text-gray-400" />
                          <input
                            type="date"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            className="flex-1 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 py-2.5 px-4 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Cuentas Contables */}
                      {Array.from({ length: cantCuentas }).map((_, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                            </div>
                            <span className="font-semibold text-blue-800">
                              Cuenta Contable #{index + 1}
                            </span>
                          </div>
                          <CuentaContableInput asiento={asientoContable} />
                        </div>
                      ))}

                      <div className="pt-4">
                        <button
                          type="button"
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-lg text-lg py-3 px-6 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                          onClick={() => addAsientosContable()}
                        >
                          <FaCheck className="mr-3" />
                          Finalizar Asiento
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Asientos Contables */}
                <div className="lg:col-span-7">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center">
                      <FaClipboardList className="mr-2" />
                      Asientos Contables Registrados
                    </h3>
                    
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {asientosContable.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <FaClipboardList className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                          <p>No hay asientos contables registrados</p>
                          <p className="text-sm">Comienza creando un nuevo asiento</p>
                        </div>
                      ) : (
                        asientosContable.map(({ fecha, cuentas }, index) => (
                          <div key={index + fecha} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-blue-800">
                                Asiento #{index + 1}
                              </h4>
                              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {fecha}
                              </span>
                            </div>
                            <div className="space-y-2">
                              {cuentas.map(({ name, monto, tipo }, idx) => (
                                <div key={name + idx + monto} className="flex items-center space-x-3 text-sm">
                                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                                    {name}
                                  </span>
                                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                                    S/ {monto.toLocaleString()}
                                  </span>
                                  <span className={`px-3 py-1 rounded-full font-medium ${
                                    tipo === 'debe' 
                                      ? 'bg-red-100 text-red-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {tipo === 'debe' ? 'DEBE' : 'HABER'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="pt-6 text-center">
                      <button
                        type="button"
                        className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-semibold rounded-lg text-lg py-3 px-8 transition-all duration-200 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        onClick={() => setOccult(false)}
                      >
                        <FaChartLine className="mr-3" />
                        Generar Reportes Financieros
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 ${occult ? "hidden" : ""}`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative h-full w-full flex items-center justify-center p-4">
          <ModalResultados
            asientosContable={asientosContable}
            closeModal={closeModal}
            arrayCuentas={arrayCuentas}
          />
        </div>
      </div>
    </>
  );
}

export default App;
