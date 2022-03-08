import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SellerSlice  from "./slices";

// export default configureStore({
//     reducer: {
//         SellerSlice
//     }
// })

const rootReducer = combineReducers({
    seller: SellerSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;