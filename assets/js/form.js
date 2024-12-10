document.querySelector("#contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        if (response.ok) {
            alert("Thank you for your message! It has been submitted successfully.");
            document.getElementById("contact-form").reset();
        } else {
            alert("There was an error submitting your message. Please try again.");
        }
    } catch (error) {
        alert("Failed to connect to the server. Please check your internet connection.");
    }
});
