let myHome = {
    address: "123 Main Street",
    rooms: 3,
    squareMeters: 95,
    extras: ["balcony", "garage", "air conditioning"]
};


console.log("Address:", myHome.address);

console.log("Rooms:", myHome["rooms"]);

console.log("Extras:");
for (let extra of myHome.extras) {
    console.log(" - " + extra);
}

myHome.elevator = true; // o false

console.log("Elevator:", myHome.elevator);

delete myHome.squareMeters;

console.log("squareMeters exists?", "squareMeters" in myHome);

console.log("rooms exists?", "rooms" in myHome);
