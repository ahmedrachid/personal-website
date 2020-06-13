import Experience from "../Data/Model/Experience.Model";
import { useState, useEffect } from "react";
import ResumeService from "../Data/Service/Resume";
import { useInstance } from "../Components/ContainerProvider";
import IoC from "../Misc/IoC";


type ExperienceLoaderResponse = [boolean, Experience[], Error];


export default function useExperienceLoader(): ExperienceLoaderResponse {
  const [isLoading, setLoading] = useState();
  const [experience, setExperience] = useState();
  const [error, setError] = useState();
  const resumeService = useInstance<ResumeService>(IoC.TResumeService);

  /*eslint-disable*/
  useEffect(() => {
    setLoading(true);
    resumeService.getExperience()
      .then(experience => setExperience(experience))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);
  /*eslint-enable*/

  return [isLoading, experience, error];
}