import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "./state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'CartComponent', () =>
{
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] )
      ],
      declarations: [ CartComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( CartComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
