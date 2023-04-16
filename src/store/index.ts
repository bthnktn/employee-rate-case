import { Employee, Employees, EmployeeStoreData } from "@/interfaces";
import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  employeeData: EmployeeStoreData[];
  storeInitialized: boolean;
} = {
  employeeData: [],
  storeInitialized: false,
};

export const employeeSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    initialize: (state, action: PayloadAction<Employees>) => {
      if (state.storeInitialized) return;
      state.employeeData = action.payload.map((data) => ({
        score: 0,
        ...data,
      }));
      state.storeInitialized = true;
    },
    upvote: (state, action: PayloadAction<Employee["id"]>) => {
      if (!state.storeInitialized) return;
      const index = state.employeeData.findIndex(
        (emp) => emp.id === action.payload
      );
      if (index === -1) return;

      state.employeeData[index].score += 1;

      state.employeeData = [
        ...state.employeeData
          .slice(0, index + 1)
          .sort((a, b) => b.score - a.score),
        ...state.employeeData.slice(index + 1),
      ];
    },
  },
});
const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer,
  },
});

export default store;

export const { initialize, upvote } = employeeSlice.actions;
