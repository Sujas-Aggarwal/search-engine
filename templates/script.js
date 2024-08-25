document
    .getElementById("fileInput")
    .addEventListener("change", function (event) {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader();

            // Define what happens when the file is successfully read
            reader.onload = function (e) {
                const content = e.target.result; // The file content
                fetch("/text", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json", // Set the content type to JSON
                    },
                    body: JSON.stringify({
                        text: content, // Send the file content as JSON
                    }),
                })
                    .then((response) => response.json()) // Assuming the server responds with JSON
                    .then((data) => console.log(data))
                    .catch((error) => console.error("Error:", error));
            };

            // Read the file as text
            reader.readAsText(file);
        } else {
            alert("No file selected");
        }
    });

document.getElementById("search-btn").addEventListener("click", (event) => {
    let content = document.getElementById("search-text").value;
    fetch("/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({
            text: content, // Send the file content as JSON
        }),
    })
        .then((response) => response.json()) // Assuming the server responds with JSON
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
});
