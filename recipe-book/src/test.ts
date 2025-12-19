// src/test.ts
import 'zone.js';
import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

// Инициализация тестового окружения
getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
);

// Объявляем require как любую функцию (чтобы TS не ругался)
declare const require: any;

// Автоматический импорт всех тестов (*.spec.ts)
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().forEach(context);
