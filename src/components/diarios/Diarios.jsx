import React from "react";
import DiarioItem from "./DiarioItem";
import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";

function Diarios({ asientosContable }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <FaBookOpen className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Libro Diario</h3>
          <p className="text-gray-600">Registro cronológico de transacciones contables</p>
        </div>
      </div>

      {/* Content */}
      {asientosContable.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <FaBookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h4 className="text-lg font-medium mb-2">No hay asientos contables</h4>
          <p className="text-sm">Comienza creando asientos contables para ver el libro diario</p>
        </div>
      ) : (
        <div className="space-y-6">
          {asientosContable.map((asiento, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-blue-800">
                    Asiento Contable #{index + 1}
                  </h4>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span className="font-medium">{asiento.fecha}</span>
                </div>
              </div>
              <DiarioItem asiento={asiento} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Diarios;
