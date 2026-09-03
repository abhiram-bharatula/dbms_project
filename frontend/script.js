function selectRole(role) {

    if (role === "doctor") {
        window.location.href = "doctor-login.html";
    }

    else if (role === "receptionist") {
        window.location.href = "receptionist-login.html";
    }

    else if (role === "admin") {
        window.location.href = "admin-login.html";
    }
}