import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    // Mocking localStorage
    spyOn(localStorage, 'getItem').and.returnValue('mocked user data');
    spyOn(localStorage, 'setItem');
    
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should access localStorage', () => {
    expect(localStorage.getItem).toHaveBeenCalledWith('user');
  });

});
