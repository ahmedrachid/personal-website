import { Container } from "inversify";
import ResumeService from "./Data/Service/Resume";
import StaticResumeService from "./Data/Service/Resume/StaticResumeService";
import IoC from "./Misc/IoC";



export default function configureContainer(): Container {
  const container = new Container();

  container.bind<ResumeService>(IoC.TResumeService).to(StaticResumeService);

  return container;
}