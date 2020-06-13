import ResumeService from ".";
import Education from "../../Model/Education.Model";
import AbstractStaticService from "../AbstractStaticService";
import { injectable } from "inversify";
import Experience from "../../Model/Experience.Model";
import SkillSet from "../../Model/SkillSet.Model";


@injectable()
export default class StaticResumeService extends AbstractStaticService implements ResumeService {

  public async getEducation(): Promise<Education[]> {
    return this.fakeLoad([
      {
        degreeTitle: 'M.S Data Science',
        instituteName: 'Paris Saclay University',
        instituteUrl: 'https://www.universite-paris-saclay.fr',
        beginYear: 'September 2019',
        graduationYear: 'Present'
      },
      {
        degreeTitle: 'B.S Computer Science',
        instituteName: 'Sorbonne University',
        instituteUrl: 'http://www.sorbonne-universite.fr',
        beginYear: 'September 2016',
        graduationYear: 'June 2019'
      }
    ]);
  }

  public async getExperience(): Promise<Experience[]> {
    return this.fakeLoad([
      {
        jobTitle: "Data Scientist",
        companyName: "Aviva Investors",
        companyUrl: "https://www.avivainvestors.com",
        beginDate: "September 2019",
        endDate: "Present",
        missions: [
          "Predict the future stock market movement using NLP and Sentiment Analysis model",
          "Develop system models, prediction algorithms, solutions to prescriptive analytics problems, data mining techniques",
          "Build Artificial Neural Network using Keras and TensorFlow in Python to identify the sentiment of financial news",
          "Develop NLP models for Automatic Topic Modelling",
          "Build dashboard to show insights of market by understanding its direction using historical data and detect new opportunities.",
          "Develop & Maintain database for market data"
        ]
      },
      {
        jobTitle: "Deep Learning - Computer Vision Intern",
        companyName: "LISSI Laboratory",
        companyUrl: "https://www.lissi.fr",
        beginDate: "June 2019",
        endDate: "September 2019",
        missions: [
          "Develop new Deep Learning model for Emotion Recognition from human face images",
          "Implement Convolutional Neural Network architectures and Data augmentation technique as GAN and Geometric Transformations on images",
          "Improve performance using Transfer Learning and Fine-tuning with a pretrained model"
        ]
      },
      {
        jobTitle: "Web Developer Intern",
        companyName: "Algérie Télécom",
        companyUrl: "https://www.algerietelecom.dz",
        beginDate: "June 2018",
        endDate: "August 2018",
        missions: [
          "Web Development",
          "Build dynamic Web pages using NodeJS & ReactJS"
        ]
      }

    ]);
  }

  public async getSkillSets(): Promise<SkillSet[]> {
    return this.fakeLoad([
      {
        title: 'Data Science',
        skills: [
          'Deep Learning, Machine Learning & NLP',
          'PyTorch, TensorFlow and Keras', 
          'OpenCV',
          'Scikit-learn, Pandas and Numpy',
          'NLTK & SciPy'
        ],
        icon: {
          materialIconName: 'timeline',
        }
      },
      {

        title: 'Big Data',
        skills: [
          'Hadoop',
          'HDFS',
          'Apache Spark',
          'Hive',
          'Map/Reduce'
        ],
        icon: {
          materialIconName: 'widgets',
        }
      },
      {
        title: 'Programming',
        skills: [
          'Python',
          'Java',
          'C',
          'Scala',
          'PHP',
          'HTML, CSS, and JavaScript',
          'Bash'
        ],
        icon: {
          materialIconName: 'desktop_mac',
        }
      },
      {
        title: 'Backend, Frontend & Mobile development',
        skills: [
          'NodeJS',
          'Flask',
          'SQL/NoSQL databases',
          'React',
          'Dash',
          'Native Android - Java & Kotlin',
          'Cross-Platform - Flutter'
        ],
        icon: {
          materialIconName: 'dns',
        }
      },
      {
        title: 'DevOps',
        skills: [
          'Gitlab et Giltab CI',
          'Server administration',
          'Docker',
          'Nginx'
        ],
        icon: {
          materialIconName: 'cloud',
        }
      },
      {
        title: 'Languages',
        skills: [
          'French: Native',
          'English: Fluent',
          'Arabic: Native'
        ],
        icon: {
          materialIconName: 'language',
        }
      }
    ]);
  }
  
}