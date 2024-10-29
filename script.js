var _a;
// Add event listener to the form
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion for input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education'); // Use HTMLTextAreaElement
    var experienceElement = document.getElementById('experience'); // Use HTMLTextAreaElement
    var skillElement = document.getElementById('skills'); // Correct ID to 'skills'
    // Check if all elements are available
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        // Get values from input elements
        var name_1 = nameElement.value.trim();
        var email = emailElement.value.trim();
        var phone = phoneElement.value.trim();
        var education = educationElement.value.trim();
        var experience = experienceElement.value.trim();
        var skills = skillElement.value.trim();
        // Create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong> ".concat(name_1, "</p>\n<p><strong>Email:</strong> ").concat(email, "</p>\n<p><strong>Phone:</strong> ").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
        // Get the output element and display the resume
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
