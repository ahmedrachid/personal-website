import { useState, useEffect } from "react";
import ResumeService from "../Data/Service/Resume";
import { useInstance } from "../Components/ContainerProvider";
import IoC from "../Misc/IoC";
import SkillSet from "../Data/Model/SkillSet.Model";


type SkillsLoaderResponse = [boolean, SkillSet[], Error];


export default function useSkillsLoader(): SkillsLoaderResponse {
  const [isLoading, setLoading] = useState();
  const [skills, setSkills] = useState();
  const [error, setError] = useState();
  const resumeService = useInstance<ResumeService>(IoC.TResumeService);

  /*eslint-disable*/
  useEffect(() => {
    setLoading(true);
    resumeService.getSkillSets()
      .then(skills => setSkills(skills))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);
  /*eslint-enable*/

  return [isLoading, skills, error];
}