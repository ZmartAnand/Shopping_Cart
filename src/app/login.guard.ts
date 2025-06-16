import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = !!localStorage.getItem("currentUser");

  if (isLoggedIn) {
    router.navigate(["/home"]);
    return false;
  }
  return true;
};
