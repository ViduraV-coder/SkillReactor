import "zone.js";
import "zone.js/testing";
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent
      ],
    }).compileComponents();
  }));
  test(`the title is 'Welcome to SkillReactor!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.message).toEqual('Welcome to SkillReactor!');
  }));
});
