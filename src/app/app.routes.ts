import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { title } from 'process';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  { path: '', title: 'World Map', component: MapComponent },
];
