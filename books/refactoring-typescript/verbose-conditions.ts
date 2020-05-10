// difficult to read
if (user.role === 'admin' && user.active && user.permissions.some(p => p === "edit")) {
  // do stuff
}

// cleaner
const isAdmin: boolean = user.role === 'admin';
const isActive: boolean = user.active;
const canEdit: boolean = user.permissions.some(p => p === "edit");
const activeAdminCanEdit: boolean = isAdmin && isActive && canEdit;

if (activeAdminCanEdit) {
  // do stuff
}
