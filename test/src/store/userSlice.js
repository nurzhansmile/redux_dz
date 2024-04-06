import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async function (obj, { dispatch }) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      const data = await res.json();
      if (data.id) {
        localStorage.setItem("user", JSON.stringify(obj));
        alert("вы зарегестрированы");
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
