import { useState } from "react";
import CuentaContableInput from "./components/CuentaContableInput";
import ModalResultados from "./components/ModalResultados";

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
      <div className=" flex justify-center ">
        <div className=" flex flex-col mt-10 border-4 border-black py-5 px-7">
          <h1 className="text-center text-blue-800 font-bold text-2xl mb-7 px-10">
            Sistema y Gestión Financiera
          </h1>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-5">
              <h3 className="font-bold text-red-600">Asiento Contable</h3>
              <label htmlFor="">Cantidad de cuentas contable</label>

              <input
                value={cant}
                onChange={(e) => setCant(e.target.value)}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  py-1 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                min={0}
                max={5}
                required
              />
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-1 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4 mx-auto"
                onClick={() => setcantCuentas(cant)}
              >
                Guardar
              </button>
              <div>
                <label htmlFor="" className="">
                  Fecha:{" "}
                </label>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="border border-gray-300 "
                />
              </div>
              {Array.from({ length: cantCuentas }).map((_, index) => {
                return (
                  <div key={index}>
                    <div className="font-bold text-blue-800 inline-block mr-3">
                      Cuenta Contable #{index + 1}
                    </div>

                    <CuentaContableInput asiento={asientoContable} />
                  </div>
                );
              })}

              <div className="flex">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4 mx-auto"
                  onClick={() => addAsientosContable()}
                >
                  Terminar
                </button>
              </div>
            </div>
            <div className="col-span-7">
              <div className="text-md font-semibold">Asientos contables</div>
              <div>
                {asientosContable.map(({ fecha, cuentas }, index) => {
                  return (
                    <div key={index + fecha}>
                      <div>
                        Asiento Contable #{index + 1} (<span>{fecha}</span>)
                      </div>
                      {cuentas.map(({ name, monto, tipo }, index) => {
                        return (
                          <div key={name + index + monto}>
                            <span className="bg-red-300 px-2 rounded-full text-sm font-semibold">
                              {name}
                            </span>
                            <span className="bg-green-300 px-2 rounded-full text-sm font-semibold">
                              S/{monto}
                            </span>
                            <span className="bg-yellow-300 px-2 rounded-full text-sm font-semibold">
                              {tipo}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-5"
                  onClick={() => setOccult(false)}
                >
                  Calcular
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0  h-screen w-screen bg-gray-300/70  ${
          occult ? "hidden" : ""
        }`}
      >
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
        >
          <ModalResultados
            asientosContable={asientosContable}
            closeModal={closeModal}
            arrayCuentas={arrayCuentas}
          ></ModalResultados>
        </div>
      </div>
    </>
  );
}

export default App;
