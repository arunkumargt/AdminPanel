import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule, ThemeService } from "ng2-charts";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContentAnimateDirective } from "./shared/directives/content-animate.directive";
import { LoginComponent } from "./login/login.component";
import { CategoryComponent } from "./admin/components/category/category.component";
import { SubCategoryComponent } from "./admin/components/sub-category/sub-category.component";
import { BrandComponent } from "./admin/components/brand/brand.component";
import { UomComponent } from "./admin/components/uom/uom.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { LoaderComponent } from "./shared/loader/loader.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentAnimateDirective,
    LoginComponent,
    CategoryComponent,
    SubCategoryComponent,
    BrandComponent,
    UomComponent,
    FooterComponent,
    NavbarComponent,
    LoaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
