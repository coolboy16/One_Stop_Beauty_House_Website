const params = new URLSearchParams(window.location.search);
const presetService = params.get("service");

if (presetService) {
    const serviceField = document.querySelector("#service");
    if (serviceField) {
        serviceField.value = presetService;
    }
}

const dateField = document.querySelector("#date");

if (dateField) {
    dateField.min = new Date().toISOString().split("T")[0];
}

document.querySelector("#bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const getValue = (id) => {
        const field = document.querySelector(id);
        return field ? field.value.trim() : "";
    };

    const name = getValue("#name");
    const phone = getValue("#phone");
    const service = getValue("#service");
    const date = getValue("#date");
    const time = getValue("#time");
    const notes = getValue("#notes") || "None";

    const message =
Hello ONE STOP BEAUTY HOUSE!%0A%0AI would like to request an appointment.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADate: ${encodeURIComponent(date)}%0ATime: ${encodeURIComponent(time)}%0ANotes: ${encodeURIComponent(notes)}%0A%0APlease confirm availability.;

    window.open(
        "https://wa.me/231777132752?text=" + message,
        "_blank"
    );
});