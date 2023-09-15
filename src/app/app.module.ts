import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './theme/layout/app.layout.module';
import {ToastModule} from 'primeng/toast';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './theme/demo/components/notfound/notfound.component';

import { ProductService } from './theme/demo/service/product.service';
import { CountryService } from './theme/demo/service/country.service';
import { CustomerService } from './theme/demo/service/customer.service';
import { EventService } from './theme/demo/service/event.service';
import { IconService } from './theme/demo/service/icon.service';
import { NodeService } from './theme/demo/service/node.service';
import { PhotoService } from './theme/demo/service/photo.service';
import { MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './core/interceptor';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        ToastModule,
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
