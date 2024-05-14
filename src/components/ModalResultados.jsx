import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Diarios from "./diarios/Diarios";
import Mayores from "./mayores/Mayores";
import BalanceComprobacion from "./BalanceComprobacion";
import BalanceGeneral from "./BalanceGeneral";
import EstadoResultados from "./EstadoResultados";
function ModalResultados({ closeModal, asientosContable, arrayCuentas }) {
  // console.log(asientosContable);
  // console.log(arrayCuentas);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="relative p-4 w-full max-w-7xl max-h-full">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList  scrollButtons="auto" onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Diarios" value="1" />
              <Tab label="Mayores" value="2" />
              <Tab label="Balance de comprobación" value="3" />
              <Tab label="Balance General" value="4" />
              <Tab label="Estado de resultados" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Diarios asientosContable = {asientosContable}/>
          </TabPanel>
          <TabPanel value="2">
            <Mayores arrayCuentas={arrayCuentas}/>
          </TabPanel>
          <TabPanel value="3">
            <BalanceComprobacion arrayCuentas={arrayCuentas}/>
          </TabPanel>
          <TabPanel value="4">
            <BalanceGeneral arrayCuentas={arrayCuentas}/>
          </TabPanel>
          <TabPanel value="5">
            <EstadoResultados arrayCuentas={arrayCuentas}/>
          </TabPanel>
        </TabContext>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white absolute top-2 right-2"
          onClick={() => closeModal()}
          data-modal-hide="default-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        
      </div>
    </div>
  );
}

export default ModalResultados;
