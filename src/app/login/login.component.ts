import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  fg_login: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.fg_login;
  }

  ngOnInit(): void {}

  signin() {
    alert("DONE");
  }
}
