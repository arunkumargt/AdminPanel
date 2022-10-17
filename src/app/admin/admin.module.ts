import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// Components
import { CategoryComponent } from "./components/category/category.component";
import { SubCategoryComponent } from "./components/sub-category/sub-category.component";
import { BrandComponent } from "./components/brand/brand.component";
import { UomComponent } from "./components/uom/uom.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "category", component: CategoryComponent },
  { path: "subcategory", component: SubCategoryComponent },
  { path: "brand", component: BrandComponent },
  { path: "uom", component: UomComponent },
];

@NgModule({
  declarations: [
    CategoryComponent,
    SubCategoryComponent,
    BrandComponent,
    UomComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, NgbModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
