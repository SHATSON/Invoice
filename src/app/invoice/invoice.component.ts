import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TdLoadingService } from '@covalent/core/loading';
import { InvoicesService, Invoice, CustomersService, Customer } from '../services';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;
  customer!: Customer;

  constructor(
    private loadingService: TdLoadingService,
    private invoicesService: InvoicesService,
    private customersService: CustomersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadingService.register('invoice');
    this.route.params
      .map((params: Params) => params.invoiceId)
      .switchMap(invoiceId => this.invoicesService.get<Invoice>(invoiceId))
      .map(invoice => {
        this.invoice = invoice;
        return invoice.customerId;
      })
      .switchMap(customerId => this.customersService.get<Customer>(customerId))
      .subscribe(customer => {
        this.customer = customer;
        this.loadingService.resolve('invoice');
      });
  }
}