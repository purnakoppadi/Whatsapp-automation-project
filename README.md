🧩 Overview

This workflow automates the process of extracting structured information from a submitted PDF form and sending personalized WhatsApp messages based on that extracted data.
It integrates form handling, document parsing, AI-powered information extraction, data processing, and automated messaging into one seamless pipeline.

⚙️ Workflow Steps
1. On Form Submission

Trigger: The workflow starts when a user submits a form.

Input: The form includes a file upload (typically a PDF document).

Purpose: This initiates the process of extracting and processing the data contained in the uploaded file.

2. Extract from File1

Action: Extract text and data from the uploaded PDF file.

Purpose: Converts the PDF content into machine-readable text that can be further analyzed.

Output: Raw text or structured data extracted from the PDF.

3. Information Extractor

Action: Uses the OpenAI Chat Model (connected as “OpenAI Chat Model1”) to interpret and extract key information from the PDF text.

Purpose: Employs AI to understand the context and identify relevant data points (e.g., names, amounts, dates, identifiers).

Model Integration: The OpenAI Chat Model is configured as a data processor, enabling intelligent text comprehension and extraction.

4. Split Out

Action: Splits the extracted data into individual records or items.

Purpose: Prepares the data for iteration — for instance, handling multiple entries found in the document.

5. Loop Over Items

Action: Iterates through each extracted record.

Purpose: Ensures that each item is processed separately for message personalization and delivery.

6. Send Template1 (WhatsApp)

Action: Sends a WhatsApp message using a predefined message template.

Purpose: Automates communication — each message can include dynamically inserted data (like names, order numbers, or statuses) extracted earlier.

Output: Personalized WhatsApp notifications delivered to recipients.

🧠 Key Features

AI-driven Information Extraction: Utilizes OpenAI’s language model to extract structured data intelligently from unstructured documents.

Automation: Fully automated from file upload to message delivery.

Scalability: Can handle multiple records per file and send messages in bulk.

Customizable: Message templates and extraction logic can be easily adapted to specific business needs.

🚀 Example Use Cases

Automated invoice or receipt data extraction and customer notifications.

Processing registration or application forms and sending acknowledgment messages.

Extracting order information from purchase documents and sending order confirmations via WhatsApp.

🔧 Execution

To run the workflow:

Upload or submit the form with a PDF file.

Click “Execute workflow”.

The workflow will automatically:

Extract data from the PDF,

Interpret it using the AI model,

Split and loop through the extracted items,

Send personalized WhatsApp messages for each record.

🧱 Components Summary
Component	Description
On Form Submission	Triggers workflow when form is submitted
Extract from File1	Extracts text from the uploaded PDF
OpenAI Chat Model1	Interprets and extracts structured info from text
Information Extractor	Applies AI model to extract key fields
Split Out	Divides extracted data into individual items
Loop Over Items	Iterates over each extracted record
Send Template1	Sends WhatsApp message using a predefined template
📬 Output

Automated WhatsApp messages sent to recipients with extracted and personalized data.

Optional structured data logs (depending on configuration).
