import Education from "../Data/Model/Education.Model";
import { useState, useEffect } from "react";
import ResumeService from "../Data/Service/Resume";
import { useInstance } from "../Components/ContainerProvider";
import IoC from "../Misc/IoC";


type EducationLoaderResponse = [boolean, Education[], Error];


export default function useEducationLoader(): EducationLoaderResponse {
  const [isLoading, setLoading] = useState();
  const [education, setEducation] = useState();
  const [error, setError] = useState();
  const resumeService = useInstance<ResumeService>(IoC.TResumeService);

  /*eslint-disable*/
  useEffect(() => {
    setLoading(true);
    resumeService.getEducation()
      .then(education => setEducation(education))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);
  /*eslint-enable*/

  return [isLoading, education, error];
}