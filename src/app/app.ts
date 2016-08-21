/**
 * Created by Adria on 20/08/2016.
 */
import 'zone.js/dist/zone';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ConcreteType } from '@angular/platform-browser-dynamic/src/facade/lang';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(<ConcreteType<AppModule>>AppModule);
