// Get form and resume elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('resume-section') as HTMLElement;
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayPhone = document.getElementById('display-phone') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displayWorkExperience = document.getElementById('display-work-experience') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const saveBtn = document.getElementById('save-btn') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

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
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill.trim();
        displaySkills.appendChild(skillItem);
    });

    // Show the resume with animation
    resumeSection.classList.remove('hidden');
    resumeSection.classList.add('visible');
});

// Handle save button click to store the edited data
saveBtn.addEventListener('click', () => {
    const updatedName = displayName.textContent;
    const updatedEmail = displayEmail.textContent;
    const updatedPhone = displayPhone.textContent;
    const updatedEducation = displayEducation.textContent;
    const updatedWorkExperience = displayWorkExperience.textContent;

    if (updatedName && updatedEmail && updatedPhone && updatedEducation) {
        alert('Changes saved successfully!');
    } else {
        alert('Make sure all fields are properly filled.');
    }
});

// Download resume as PDF
const downloadPdfBtn = document.getElementById('download-pdf-btn') as HTMLButtonElement;
downloadPdfBtn.addEventListener('click', () => {
    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Select the resume section
    const resumeSection = document.getElementById('resume-section') as HTMLElement;
    
    // Convert the resume section HTML to plain text for PDF
    const resumeContent = resumeSection.innerText;

    // Add content to the PDF (you can adjust the position and formatting)
    doc.text(resumeContent, 10, 10);

    // Get the user name for the file name
    const userName = (document.getElementById('name') as HTMLInputElement).value || 'resume';

    // Save the generated PDF
    doc.save(`${userName}_resume.pdf`);
});
