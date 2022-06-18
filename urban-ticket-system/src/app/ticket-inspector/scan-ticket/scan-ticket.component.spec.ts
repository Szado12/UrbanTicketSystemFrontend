import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ScanTicketComponent } from './scan-ticket.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('ScanTicketComponent', () => {
  let component: ScanTicketComponent;
  let fixture: ComponentFixture<ScanTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanTicketComponent ],
      imports: [HttpClientTestingModule, MatDialogModule], 
      providers: [{ provide: 'BASE_API_URL', useValue: 'https://urban-ticket-system-backend.herokuapp.com'  }]		
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
