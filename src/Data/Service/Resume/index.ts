import Education from "../../Model/Education.Model";
import Experience from "../../Model/Experience.Model";
import SkillSet from "../../Model/SkillSet.Model";


export default interface ResumeService {
  getEducation(): Promise<Education[]>;
  getExperience(): Promise<Experience[]>;
  getSkillSets(): Promise<SkillSet[]>;
}
