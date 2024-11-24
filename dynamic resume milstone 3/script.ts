document.getElementById("generate-resume")?.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  
    const resumeOutput = document.getElementById("resume-output")!;
    resumeOutput.innerHTML = `
      <h2>Resume</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
    `;
    resumeOutput.style.display = "block";
  });