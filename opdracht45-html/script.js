const ROOT_URL = "http://localhost:3000/";

const grabRandomId = items => {

    const highestIndex = items.length - 1;

    const index = Math.round(Math.random() * highestIndex);
    return items[index]["id"];
};
 

const sendRequest = async(method, root_url, root_part) => {
    const response = await fetch(`${root_url}${root_part}`, { method });
    const json = await response.json();
    return json;
};

///////////////////////////////////////////////////////////////////////////////
// All reservations.
let reservations = await sendRequest("GET", ROOT_URL, "reservations");
console.table(reservations);

// A specific reservation.
const randomReservationId = grabRandomId(reservations);
console.log(`I am going to delete reservation ${randomReservationId}`);

// Delete the specific reservation
await sendRequest("DELETE", ROOT_URL, `reservations/${randomReservationId}`);

// Check if it was deleted.
reservations = await sendRequest("GET", ROOT_URL, "reservations");
// This should show one reservation less.
console.table(reservations);