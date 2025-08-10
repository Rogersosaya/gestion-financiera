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
import { 
  FaTimes, 
  FaChartBar, 
  FaBook, 
  FaBalanceScale, 
  FaBuilding, 
  FaChartLine 
} from "react-icons/fa";

function ModalResultados({ closeModal, asientosContable, arrayCuentas }) {
  // console.log(asientosContable);
  // console.log(arrayCuentas);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabConfig = [
    { value: "1", label: "Diarios", icon: FaBook, component: Diarios, props: { asientosContable } },
    { value: "2", label: "Mayores", icon: FaChartBar, component: Mayores, props: { arrayCuentas } },
    { value: "3", label: "Balance de Comprobación", icon: FaBalanceScale, component: BalanceComprobacion, props: { arrayCuentas } },
    { value: "4", label: "Balance General", icon: FaBuilding, component: BalanceGeneral, props: { arrayCuentas } },
    { value: "5", label: "Estado de Resultados", icon: FaChartLine, component: EstadoResultados, props: { arrayCuentas } }
  ];

  return (
    <div className="relative w-full max-w-7xl max-h-full">
      {/* Modal content */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <FaChartBar className="mr-3" />
              Reportes Financieros
            </h2>
            <button
              type="button"
              className="text-white hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-white hover:bg-opacity-20"
              onClick={() => closeModal()}
              data-modal-hide="default-modal"
            >
              <FaTimes className="w-5 h-5" />
              <span className="sr-only">Cerrar modal</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList 
              scrollButtons="auto" 
              onChange={handleChange} 
              aria-label="Reportes financieros"
              sx={{
                '& .MuiTab-root': {
                  color: '#6B7280',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  minHeight: '48px',
                  '&.Mui-selected': {
                    color: '#2563EB',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#2563EB',
                  height: '3px',
                },
              }}
            >
              {tabConfig.map((tab) => (
                <Tab 
                  key={tab.value}
                  label={
                    <div className="flex items-center space-x-2">
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </div>
                  } 
                  value={tab.value} 
                />
              ))}
            </TabList>
          </Box>

          {/* Tab Panels */}
          {tabConfig.map((tab) => (
            <TabPanel 
              key={tab.value} 
              value={tab.value}
              sx={{ 
                padding: '24px',
                backgroundColor: '#F8FAFC'
              }}
            >
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <tab.component {...tab.props} />
              </div>
            </TabPanel>
          ))}
        </TabContext>
      </div>
    </div>
  );
}

export default ModalResultados;
