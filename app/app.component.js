"use strict";
var core_1 = require("@angular/core");
var bluetooth = require("nativescript-bluetooth");
var AppComponent = (function () {
    function AppComponent() {
        this.UUID = "";
    }
    AppComponent.prototype.hasPermissions = function () {
        bluetooth.hasCoarseLocationPermission()
            .then(function (granted) {
            alert("Permission" + granted);
        });
    };
    AppComponent.prototype.grantPermissions = function () {
        bluetooth.requestCoarseLocationPermission()
            .then(function () {
            alert("Location permission requested");
        });
    };
    AppComponent.prototype.scan = function () {
        bluetooth.startScanning({
            serviceUUIDs: [],
            seconds: 4,
            onDiscovered: function (peripheral) {
                console.log("Periperhal found with Name: " + peripheral.name);
                console.log("Periperhal found with UUID: " + peripheral.UUID);
                console.log("");
            }
        }).then(function () {
            console.log("scanning complete");
        }, function (err) {
            console.log("error while scanning: " + err);
        });
    };
    AppComponent.prototype.connect = function () {
        bluetooth.connect({
            UUID: this.UUID,
            onConnected: (function (peripheral) {
                console.log("Periperhal connected with UUID: " + peripheral.UUID);
            }),
            onDisconnected: function (peripheral) {
                alert("Device disconnected");
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map