


export default interface SkillSet {
  readonly title: string;
  readonly skills: string[];
  readonly icon: {
    readonly url?: string;
    readonly materialIconName?: string;
    readonly fontAwesomeIconName?: string;
  };
}