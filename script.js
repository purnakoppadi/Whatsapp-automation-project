document.getElementById("submissionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const responseMessage = document.getElementById("responseMessage");
  const submitBtn = document.getElementById("submitBtn");
  responseMessage.textContent = "Uploading...";
  responseMessage.className = "";
  submitBtn.disabled = true;

  const formData = new FormData();
  formData.append("file", document.getElementById("file").files[0]);

  try {
    // ⚠️ Replace with your actual webhook URL from your workflow (n8n / Make / Power Automate etc.)
    const webhookURL = 
    " https://blackp.app.n8n.cloud/webhook-test/upload-pdf";

    const res = await fetch(webhookURL, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      responseMessage.textContent = "✅ PDF uploaded successfully!";
      responseMessage.className = "success";
      document.getElementById("submissionForm").reset();
    } else {
      responseMessage.textContent = "⚠️ Upload failed. Please try again.";
      responseMessage.className = "error";
    }
  } catch (err) {
    responseMessage.textContent = "❌ Error: " + err.message;
    responseMessage.className = "error";
  } finally {
    submitBtn.disabled = false;
  }
});
