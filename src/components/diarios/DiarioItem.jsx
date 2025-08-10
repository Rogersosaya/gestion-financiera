import React from "react";
import { FaDatabase, FaMoneyBillWave, FaBalanceScale } from "react-icons/fa";

function DiarioItem({ asiento }) {
  var totalDebe = 0;
  var totalHaber = 0;
  asiento.cuentas.forEach(cuenta => {
    if(cuenta.tipo == "debe"){
      totalDebe+=Number(cuenta.monto);
    }else{
      totalHaber+=Number(cuenta.monto);
    }
  });

  const isBalanced = totalDebe === totalHaber;

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <FaDatabase className="w-4 h-4" />
                  <span>Cuenta</span>
                </div>
              </th>
              <th className="px-4 py-3 text-right font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-end space-x-2">
                  <FaMoneyBillWave className="w-4 h-4" />
                  <span>Debe</span>
                </div>
              </th>
              <th className="px-4 py-3 text-right font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-end space-x-2">
                  <FaMoneyBillWave className="w-4 h-4" />
                  <span>Haber</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {asiento.cuentas.map((cuenta, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 text-sm text-gray-800 font-medium">
                  {cuenta.name}
                </td>
                <td className="px-4 py-3 text-sm text-right">
                  {cuenta.tipo === "debe" ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      S/ {Number(cuenta.monto).toLocaleString()}
                    </span>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-right">
                  {cuenta.tipo === "haber" ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      S/ {Number(cuenta.monto).toLocaleString()}
                    </span>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
              </tr>
            ))}
            {/* Totals Row */}
            <tr className="bg-gray-50 font-semibold">
              <td className="px-4 py-3 text-sm text-gray-700">
                <div className="flex items-center space-x-2">
                  <FaBalanceScale className="w-4 h-4 text-gray-600" />
                  <span>TOTALES</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-right">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-red-800">
                  S/ {totalDebe.toLocaleString()}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-right">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800">
                  S/ {totalHaber.toLocaleString()}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Balance Status */}
      <div className={`flex items-center justify-center p-4 rounded-lg ${
        isBalanced 
          ? 'bg-green-50 border border-green-200' 
          : 'bg-red-50 border border-red-200'
      }`}>
        <div className={`w-3 h-3 rounded-full mr-3 ${
          isBalanced ? 'bg-green-500' : 'bg-red-500'
        }`}></div>
        <span className={`text-sm font-medium ${
          isBalanced ? 'text-green-800' : 'text-red-800'
        }`}>
          {isBalanced 
            ? '✓ Asiento contable balanceado correctamente' 
            : '✗ Asiento contable desbalanceado'
          }
        </span>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="text-sm font-medium text-blue-600 mb-1">Total Debe</div>
          <div className="text-2xl font-bold text-blue-800">
            S/ {totalDebe.toLocaleString()}
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="text-sm font-medium text-green-600 mb-1">Total Haber</div>
          <div className="text-2xl font-bold text-green-800">
            S/ {totalHaber.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiarioItem;
