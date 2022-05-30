import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-a',
  templateUrl: './module-a.component.html',
  styleUrls: ['./module-a.component.scss']
})
export class ModuleAComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('admin'),
    password: new FormControl('admin')
  })
  showErrorMessage: boolean = false;
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.value.username == "admin" && this.form.value.password == "admin") {
      this.router.navigate(['module-b'])
    } else {
      this.showErrorMessage = true;
    }
  }

}
