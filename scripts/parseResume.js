const fs = require("fs");
const mammoth = require("mammoth");

const docxPath = "./src/assets/Jacqueline-Igdoura-Software-Dev-Resume.docx";
const jsonPath = "./src/assets/resume.json";

mammoth
  .extractRawText({ path: docxPath })
  .then(function (result) {
    const text = result.value;

    // NAME
    const nameMatch = text.match(/^([^\n]+)\n/);
    const name = nameMatch ? nameMatch[1].trim() : "";

    // LOCATION
    const locationMatch = text.match(/([A-Za-z]+, [A-Za-z]+, [A-Za-z]+) \|/);
    const location = locationMatch ? locationMatch[1].trim() : "";

    // EMAIL
    const emailMatch = text.match(
      /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/
    );
    const email = emailMatch ? emailMatch[1].trim() : "";

    // GITHUB
    const githubMatch = text.match(/(https?:\/\/github.com\/[^\s\n]+)/i);
    const github = githubMatch ? githubMatch[1].trim() : "";

    // TECHNICAL SKILLS
    const techSkillsMatch = text.match(
      /Technical Skills([\s\S]*?)Professional Experience/
    );
    let technicalSkills = {};
    if (techSkillsMatch) {
      techSkillsMatch[1]
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .forEach((line) => {
          const parts = line.split(":");
          if (parts.length === 2) {
            const category = parts[0].trim();
            const skills = parts[1]
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean);
            technicalSkills[category] = skills;
          }
        });
    }

    // PROFESSIONAL EXPERIENCE
    const experienceMatch = text.match(
      /Professional Experience([\s\S]*?)Education/
    );
    let experience = {};
    if (experienceMatch) {
      const jobEntries = experienceMatch[1]
        .split(/\n(?=[A-Z][^\n]+ — )/)
        .map((entry) => entry.trim())
        .filter((entry) => entry.length > 0);

      jobEntries.forEach((entry) => {
        const lines = entry
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        if (lines.length >= 2) {
          const companyRole = lines[0].split("—");
          const company = companyRole[0].trim();
          const role = companyRole[1] ? companyRole[1].trim() : "";
          const locDateMatch = lines[1].match(/^(.+) \| (.+)$/);
          const location = locDateMatch ? locDateMatch[1].trim() : "";
          const dates = locDateMatch ? locDateMatch[2].trim() : "";

          const responsibilities = lines.slice(2).filter(Boolean);
          if (!experience[company]) experience[company] = [];
          experience[company].push({
            "job title": role,
            location: [location],
            dates: [dates],
            responsibilities,
          });
        } else {
          if (!experience["Unknown"]) experience["Unknown"] = [];
          experience["Unknown"].push({ raw: entry });
        }
      });
    }

    // EDUCATION
    let education = {};
    const educationMatch = text.match(/Education([\s\S]*)$/);
    if (educationMatch) {
      const eduEntries = educationMatch[1]
        .split(/\n(?=[A-Z][^\n]+ — )/)
        .map((entry) => entry.trim())
        .filter((entry) => entry.length > 0);

      eduEntries.forEach((entry) => {
        const lines = entry
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);

        const schoolDegreeMatch = lines[0].match(
          /^(.+?) — (.+?)(?: ([^|]+) \| ([^\n]+))?$/
        );
        if (schoolDegreeMatch) {
          const school = schoolDegreeMatch[1].trim();
          const degree = schoolDegreeMatch[2].trim();
          const location = schoolDegreeMatch[3]
            ? schoolDegreeMatch[3].trim()
            : (lines[1] && lines[1].split("|")[0].trim()) || "";
          const dates = schoolDegreeMatch[4]
            ? schoolDegreeMatch[4].trim()
            : (lines[1] &&
                lines[1].split("|")[1] &&
                lines[1].split("|")[1].trim()) ||
              "";
          const details = lines.slice(2).filter(Boolean);
          if (!education[school]) education[school] = [];
          education[school].push({
            degree,
            location: location ? [location] : [],
            dates: dates ? [dates] : [],
            details,
          });
        } else {
          if (!education["Unknown"]) education["Unknown"] = [];
          education["Unknown"].push({ raw: entry });
        }
      });
    }

    const resumeJson = {
      name,
      location,
      email,
      github,
      technicalSkills,
      experience,
      education,
    };

    fs.writeFileSync(jsonPath, JSON.stringify(resumeJson, null, 2));
    console.log("Resume parsed and saved to resume.json");
  })
  .catch(function (err) {
    console.error("Error parsing DOCX:", err);
  });
