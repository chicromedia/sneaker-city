import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductService } from "../../../Shared/services/product.service";
import { IProduct } from "../../../Shared/interfaces/product";
import { LoadFeeds } from "../../feed/state-management/feed-actions";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

interface IComingState
{
  list: IProduct[]
}

@State<IComingState>( {
  name: "coming"
} )
@Injectable()
export class ComingState
{
  constructor( private service: ProductService ) {}

  @Selector()
  static list( { list }: IComingState )
  {
    return list;
  }

  @Action( LoadFeeds )
  load( { patchState }: StateContext<IComingState> )
  {
    return this.service.getAllUpComing()
      .pipe( tap( list =>
        {
          patchState( { list } );
        } )
      )
  }
}
