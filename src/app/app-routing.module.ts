import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ServiceComponent } from './components/service/service.component';
import { BlogComponent } from './components/blog/blog.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TeamComponent } from './components/team/team.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'team', component: TeamComponent },
  { path: '404', component: NotfoundComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonial', component: TestimonialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
