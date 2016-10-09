import {Component} from "@angular/core";
var bluetooth = require("nativescript-bluetooth");


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    UUID: String = "";
    hasPermissions() {
      bluetooth.hasCoarseLocationPermission()
        .then( (granted) => { alert("Permission" + granted);
      })
    }
    grantPermissions() {
    bluetooth.requestCoarseLocationPermission()
      .then(
      () => {
        alert("Location permission requested");
      })
    }

scan() {
  bluetooth.startScanning({
    serviceUUIDs: [],
    seconds: 4,
    onDiscovered: (peripheral) => {
      console.log("Periperhal found with Name: " + peripheral.name);
    	console.log("Periperhal found with UUID: " + peripheral.UUID);
      console.log("");
    }
  }).then(function() {
    console.log("scanning complete");
  }, function (err) {
    console.log("error while scanning: " + err);
  });
}

connect() {
    bluetooth.connect({
        UUID: this.UUID,
        onConnected: ((peripheral) => {
            console.log("Periperhal connected with UUID: " + peripheral.UUID);
        }),
        onDisconnected: function (peripheral) {
            alert("Device disconnected");
        }
    });
}

}
