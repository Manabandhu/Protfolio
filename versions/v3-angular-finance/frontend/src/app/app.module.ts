import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { PlatformMetricsComponent } from './components/platform-metrics/platform-metrics.component';
import { ArchitectureComponent } from './components/architecture/architecture.component';
import { SecurityComponent } from './components/security/security.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { EvolutionComponent } from './components/evolution/evolution.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PlatformMetricsComponent,
    ArchitectureComponent,
    SecurityComponent,
    PipelineComponent,
    EvolutionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
