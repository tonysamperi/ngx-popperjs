import mainPkg from "../../../../package.json";
import libPkg from "../../package.json";
import {minVersion} from "semver";

it("should have matching package versions for @floating-ui/dom", () => {
    const popperjsVersionMain = mainPkg.dependencies["@floating-ui/dom"];
    const popperjsVersionLib = libPkg.dependencies["@floating-ui/dom"];

    expect(popperjsVersionLib).toEqual(popperjsVersionMain);
});

it("should have matching package versions for @angular", () => {

    const angularVersionMain = mainPkg.dependencies["@angular/core"];
    const angularVersionLib = libPkg.peerDependencies["@angular/core"];
    const angularMajorMain = minVersion(angularVersionMain);
    const angularMajorLib = minVersion(angularVersionLib);

    expect(angularMajorLib).toEqual(angularMajorMain);
});


it("should have matching package versions for rxjs", () => {

    const rxjsVersionMain = mainPkg.dependencies.rxjs;
    const rxjsVersionLib = libPkg.peerDependencies.rxjs;

    expect(rxjsVersionLib).toEqual(rxjsVersionMain);
});
