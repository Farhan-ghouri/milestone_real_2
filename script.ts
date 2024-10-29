// Add event listener to the form
document.getElementById('resumeform')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertion for input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement; // Use HTMLTextAreaElement
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement; // Use HTMLTextAreaElement
    const skillElement = document.getElementById('skills') as HTMLTextAreaElement; // Correct ID to 'skills'

    // Check if all elements are available
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {

        // Get values from input elements
        const name = nameElement.value.trim();
        const email = emailElement.value.trim();
        const phone = phoneElement.value.trim();
        const education = educationElement.value.trim();
        const experience = experienceElement.value.trim();
        const skills = skillElement.value.trim();

        // Create resume output
        const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

        // Get the output element and display the resume
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});
