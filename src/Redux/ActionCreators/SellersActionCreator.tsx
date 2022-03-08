import { GetAllSellers } from '../../Services/CrudService'
import { setSellerList } from '../slices'
import { AppThunk } from '../store/store'

export const SellersActionCreator = (): AppThunk =>
(dispatch:any) => {
  GetAllSellers().then((response: any) => {
      if(response){
      dispatch(setSellerList(response.data))
      }
  })
}
