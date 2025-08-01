import { getInitialPermissionData } from "./data/permissionDatas";
import { TransferList } from "./features/TransferList";

const { availablePermissions, assignedPermissions } = getInitialPermissionData();

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Rol Yetki Yönetimi
        </h1>
        <p className="text-md text-gray-600 mb-6 text-center">
          "Editör" rolü için yetkileri atayın veya kaldırın.
        </p>

        <TransferList
          initialLeftItems={availablePermissions}
          initialRightItems={assignedPermissions}
          leftTitle="Mevcut Yetkiler"
          rightTitle="Editör Rolüne Atanmış Yetkiler"
        />
      </div>
    </div>
  );
}

export default App;
