// Get form and resume elements
var form = document.getElementById('resume-form');
var resumeSection = document.getElementById('resume-section');
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayPhone = document.getElementById('display-phone');
var displayEducation = document.getElementById('display-education');
var displayWorkExperience = document.getElementById('display-work-experience');
var displaySkills = document.getElementById('display-skills');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
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
        var skillItem = document.createElement('li');
        skillItem.textContent = skill.trim();
        displaySkills.appendChild(skillItem);
    });
    // Show the resume with animation
    resumeSection.classList.remove('hidden');
    resumeSection.classList.add('visible');
});
