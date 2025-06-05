import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { authGuard } from "./auth.guard";
import { CanActivateFn } from "@angular/router";

describe("authGuard (CanActivateFn)", () => {
  let routerSpy: jasmine.SpyObj<Router>;

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    const spy = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: spy }],
    });

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it("should return true if user is logged in", () => {
    localStorage.setItem("currentUser", JSON.stringify({ username: "anand" }));

    const result = executeGuard(null as any, null as any);
    expect(result).toBeTrue();
  });

  it("should navigate to login and return false if user is not logged in", () => {
    localStorage.removeItem("currentUser");

    const result = executeGuard(null as any, null as any);
    expect(result).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/login"]);
  });
});
