import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'products', component: ProductsComponent},
    {path:'contact-us' , component: ContactUsComponent}
];
