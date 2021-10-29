import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgectsComponent } from './progects/progects.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgectsRoutingModule } from './progects-routing.module';
import { ProgectsService } from './progects.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProgectsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProgectsRoutingModule,
    FormsModule
  ],
  providers: [
    ProgectsService
  ]
})
export class ProgectsModule { }
