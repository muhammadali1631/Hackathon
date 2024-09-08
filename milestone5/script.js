// Get form and resume elements
let form = document.getElementById('resume-form');
let resumeSection = document.getElementById('resume-section');
let displayName = document.getElementById('display-name');
let displayEmail = document.getElementById('display-email');
let displayPhone = document.getElementById('display-phone');
let displayEducation = document.getElementById('display-education');
let displayWorkExperience = document.getElementById('display-work-experience');
let displaySkills = document.getElementById('display-skills');
let saveBtn = document.getElementById('save-btn');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Get input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let education = document.getElementById('education').value;
    let workExperience = document.getElementById('work-experience').value;
    let skills = document.getElementById('skills').value.split(',');
    // Validate required fields
    if (!name || !email || !phone || !education || !skills.length) {
        alert('Please fill out all required fields.');
        return;
    }
    // Populate resume with input values
    displayName.textContent = name;
    displayEmail.textContent = email;
    displayPhone.textContent = phone;
    displayEducation.textContent = education;
    displayWorkExperience.textContent = workExperience || 'No work experience provided.';
    // Clear and populate skills
    displaySkills.innerHTML = '';
    skills.forEach(function (skill) {
        let skillItem = document.createElement('li');
        skillItem.textContent = skill.trim();
        displaySkills.appendChild(skillItem);
    });
    // Show the resume with animation
    resumeSection.classList.remove('hidden');
    resumeSection.classList.add('visible');
});
// Handle save button click to store the edited data
saveBtn.addEventListener('click', function () {
    let updatedName = displayName.textContent;
    let updatedEmail = displayEmail.textContent;
    let updatedPhone = displayPhone.textContent;
    let updatedEducation = displayEducation.textContent;
    let updatedWorkExperience = displayWorkExperience.textContent;
    if (updatedName && updatedEmail && updatedPhone && updatedEducation) {
        alert('Changes saved successfully!');
    }
    else {
        alert('Make sure all fields are properly filled.');
    }
});
// Download resume as PDF
let downloadPdfBtn = document.getElementById('download-pdf-btn');
downloadPdfBtn.addEventListener('click', function () {
    // Create a new jsPDF instance
    let jsPDF = window.jspdf.jsPDF;
    let doc = new jsPDF();
    // Select the resume section
    let resumeSection = document.getElementById('resume-section');
    // Convert the resume section HTML to plain text for PDF
    let resumeContent = resumeSection.innerText;
    // Add content to the PDF (you can adjust the position and formatting)
    doc.text(resumeContent, 10, 10);
    // Get the user name for the file name
    let userName = document.getElementById('name').value || 'resume';
    doc.save("".concat(userName, "_resume.pdf"));
});
