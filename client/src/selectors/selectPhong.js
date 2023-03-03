import { createSelector } from "@reduxjs/toolkit";


export const selectPhong = (state)=>state.phong.phongList
export const filterPhong = (state)=>state.phong.filter

export const dataPhong = createSelector(
    selectPhong,
    filterPhong,
    (data, filter) => {
      return data.filter(item=>{
        if(filter=='F'||filter=='T') {
            return item.tenPhong.slice(0,1)==filter
        } else {
            // console.log(item.tenPhong.slice(0,1))
            return item.tenPhong.slice(0,1)!='T'&&item.tenPhong.slice(0,1)!='F'
        }
      })
    }
  );
