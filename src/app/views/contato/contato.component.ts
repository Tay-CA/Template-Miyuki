import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  ngOnInit() {
    $(".site-section-home").addClass("site-section");
    $(".site-section").removeClass("site-section-home");
    $(".site-wrap-home").addClass("site-wrap");
    $(".site-wrap").removeClass("site-wrap-home");
    $(".site-footer").show();
  }

  name: string;
  cellphone: string;
  companyName: string;
  subject: string;
  email: string;
  message: string;
  angForm: FormGroup;

  constructor(private renderer: Renderer2, private fb: FormBuilder) {
    this.renderer.setStyle(document.body, 'background-color', '#1d1d1d');
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.email],
      name: ['', Validators.required],
      cellphone: ['',Validators.required],
      companyName: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onClickSubmit(email, name,cellphone,companyName,subject,message) {
    alert('Your Email is : ' + email);
  }
}