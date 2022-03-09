import { CreateByUser, DeleteByUser, GetAllSellers, UpdateByUser } from '../../Services/CrudService'
import { SellerListType } from '../../types/types'
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

export const DeleteSellerAC = (code: number): AppThunk =>
(dispatch:any) => {
  DeleteByUser(code).then((response: any) => {
      if(response){
      dispatch(SellersActionCreator())
      }
  })
}

export const UpdateSellerAC = (code: number, seller: SellerListType): AppThunk =>
(dispatch:any) => {
  UpdateByUser(code, seller).then((response: any) => {
      if(response){
      dispatch(SellersActionCreator())
      }
  })
}

export const CreateSellerAC = (seller: SellerListType): AppThunk =>
(dispatch:any) => {
  CreateByUser(seller).then((response: any) => {
      if(response){
      dispatch(SellersActionCreator())
      }
  })
}