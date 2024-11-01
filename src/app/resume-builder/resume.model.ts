export interface ResumeSection {
    title: string;
    content: string;
  }
  
  export interface Resume {
    name: string;
    email: string;
    phone: string;
    sections: ResumeSection[];
  }
  