import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.scss']
})
export class ResumeBuilderComponent {
  resumeForm: FormGroup;
  sections = ['About Me', 'Work Experience', 'Education', 'Skills', 'References'];
  selectedSections: { [key: string]: boolean } = {};
  showPreview = false;

  constructor(private fb: FormBuilder) {
    this.resumeForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      address:[''],
      'About Me': [''],
      'Work Experience': [''],
      'Education': [''],
      'Skills': [''],
      'References': [''],
      
    });
  }

  onSectionToggle(section: string) {
    this.selectedSections[section] = !this.selectedSections[section];
  }

  togglePreview() {
    this.showPreview = !this.showPreview;
  }

  async downloadPDF() {
    const pdf = new jsPDF('p', 'pt', 'a4');
    const content = document.getElementById('resumePreview');
  
    if (content) {
      await pdf.html(content, {
        callback: (pdf) => {
          pdf.save('Resume.pdf');
        },
        x: 10,
        y: 10,
        margin: [10, 10, 10, 10],
        html2canvas: {
          scale: window.devicePixelRatio || 1,  // Uses the device pixel ratio for better quality
          useCORS: true                         // Allows cross-origin images if you are using any
        }
      });
    }
  }
  
}
