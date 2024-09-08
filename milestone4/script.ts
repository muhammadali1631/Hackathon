const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('resume-section') as HTMLElement;
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayPhone = document.getElementById('display-phone') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displayWorkExperience = document.getElementById('display-work-experience') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const saveBtn = document.getElementById('save-btn') as HTMLButtonElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); 

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    if (!name || !email || !phone || !education || !skills.length) {
        alert('Please fill out all required fields.');
        return;
    }

    displayName.textContent = name;
    displayEmail.textContent = email;
    displayPhone.textContent = phone;
    displayEducation.textContent = education;
    displayWorkExperience.textContent = workExperience || 'No work experience provided.';

    displaySkills.innerHTML = '';
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill.trim();
        displaySkills.appendChild(skillItem);
    });

    resumeSection.classList.remove('hidden');
    resumeSection.classList.add('visible');
});

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
