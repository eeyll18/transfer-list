import type { TransferItem } from "../features/TransferList";

const ALL_PERMISSIONS: TransferItem[] = [
  { id: "perm-1", label: "Makale Oluştur" },
  { id: "perm-2", label: "Makale Düzenle" },
  { id: "perm-3", label: "Makale Sil" },
  { id: "perm-4", label: "Yorumları Onayla" },
  { id: "perm-5", label: "Kullanıcıları Görüntüle" },
  { id: "perm-6", label: "Kullanıcıları Sil" },
  { id: "perm-7", label: "Ayarları Değiştir" },
];

const EDITOR_INITIAL_PERMISSIONS: TransferItem[] = [
  { id: "perm-1", label: "Makale Oluştur" },
  { id: "perm-2", label: "Makale Düzenle" },
  { id: "perm-3", label: "Makale Sil" },
];

export const getInitialPermissionData = () => {
  const assigned = EDITOR_INITIAL_PERMISSIONS;

  const assignedIds = new Set(assigned.map((p) => p.id));

  const available = ALL_PERMISSIONS.filter(
    (permission) => !assignedIds.has(permission.id)
  );

  return {
    availablePermissions: available,
    assignedPermissions: assigned,
  };
};
