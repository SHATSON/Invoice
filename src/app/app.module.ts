import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentStepsModule } from '@covalent/core/steps';



import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PhoneDirective } from './validators/phone.directive';
import { HoursDirective } from './validators/hours.directive';
import { HoursControlComponent } from './hours-control/hours-control.component';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

export const ROUTES = [
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/create', component: InvoiceFormComponent },
  { path: 'invoices/:invoiceId', component: InvoiceComponent },
  { path: 'invoices/:invoiceId/edit', component: InvoiceFormComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/create', component: CustomerFormComponent },
  { path: 'customers/:customerId', component: CustomerComponent },
  { path: 'customers/:customerId/edit', component: CustomerFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/invoices' },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    InvoicesComponent,
    InvoiceComponent,
    CustomerComponent,
    InvoiceFormComponent,
    CustomerFormComponent,
    PhoneDirective,
    HoursDirective,
    HoursControlComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardActions,
    MatFormFieldModule,
   // MatInputContainer,
    MatCardContent,
    MatCardModule,
    MatCardHeader,



  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardActions,
    MatFormFieldModule,
   // MatInputContainer,
    MatCardContent,
    MatCardModule,
    MatCardHeader,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }