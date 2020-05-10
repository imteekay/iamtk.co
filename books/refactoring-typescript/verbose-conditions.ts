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

// extract to a simple function
const isAdmin: boolean = user.role === 'admin';
const isActive: boolean = user.active;
const canEdit: boolean = user.permissions.some(p => p === "edit");

const activeAdminCanEdit: boolean (user): boolean =>
  user.role === 'admin' &&
  user.active &&
  user.permissions.some(p => p === "edit");

if (activeAdminCanEdit(user)) {
  // do stuff
}

// extract to a simple function and user methods
class User {
  isAdmin(): boolean {
    return this.role === 'admin';
  }

  isActive(): boolean {
    return this.active;
  }

  canEdit(): boolean {
    return this.permissions.some(p => p === "edit");
  }
}

const activeAdminCanEdit: boolean (user): boolean =>
  user.isAdmin() &&
  user.isActive() &&
  user.canEdit();

if (activeAdminCanEdit(user)) {
  // do stuff
}
