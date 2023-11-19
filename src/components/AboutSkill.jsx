import SkillItem from "./SkillItem";
import { skillList } from "../skillList";

function AboutSkill() {
  return (
    <div className="grid grid-cols-4 gap-10 text-center md:mr-6">
      {skillList.map((skill) => {
        return (
          <SkillItem
            src={skill.image}
            alt={skill.skill}
            skillName={skill.skill}
            key={skill.skill}
          />
        );
      })}
    </div>
  );
}

export default AboutSkill;
