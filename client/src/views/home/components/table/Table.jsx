import React, { useEffect, useState, useRef } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import "./table.scss";

import TableHead from "./table-head/TableHead";
import TableSideBar from "./table-sidebar/TableSideBar";

import TableSort from "./table-sort/TableSort";
import { useSelector, useDispatch } from "react-redux";
import { filterLichThiArrayA } from "../../../../selectors/selectors";

import { dataPhong } from "../../../../selectors/selectPhong";

import { fetchAllPhong } from "../../../../stores/slices/phongSlice";

// import { getAllLichThi2 } from "../../../../stores/slices/lichThi2Slice";
import { getAllLichThi2 } from "../../../../stores/slices/dragAndDrogSlice";

const Table = (props) => {
  const dispatch = useDispatch();
  // let lichThi2 = useSelector(filterLichThi);
  const phong = useSelector(dataPhong);

  useEffect(() => {
    dispatch(getAllLichThi2());
  }, []);

  useEffect(() => {
    dispatch(fetchAllPhong());
  }, []);

  const style = {
    border: "1px",
    borderColor: "black",
  };

  let arrayA = useSelector(filterLichThiArrayA);
  const phongSort = phong.sort((a, b) => (a.tenPhong > b.tenPhong ? 1 : -1));
  const lengtPhong = phongSort.length;

  // let arrayA = useSelector(getLichThi);

  const sortByCaThi = (caThi) => {
    let index;
    let sortArray = arrayA.filter((e, i) => {
      if (e.ca_Thi == caThi) {
        index = i;
      }
      return e.ca_Thi == caThi;
    });

    sortArray = sortArray.sort(function (a, b) {
      return a.ten_Phong.slice(-1) - b.ten_Phong.slice(-1);
    });

    sortArray.map((item, id) => {
      arrayA.map((arA, iarA) => {
        if (item.id == arA.id) {
          sortArray[id] = {
            ...item,
            inDex: iarA,
          };
        }
      });
    });

    return sortArray;
  };

  const [boxScrollStyle, setBzzzoxScrollStyle] = useState({
    position: "unset",
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    // console.log(scrollTop);
    if (scrollTop >= 260) {
      setBzzzoxScrollStyle({
        position: "fixed",
        top: "0",
      });
    } else {
      setBzzzoxScrollStyle({
        position: "unset",
      });
    }
  };

  return (
    <Grid templateColumns="repeat(7, 1fr)" textAlign="center">
      {/* Header table*/}
      <GridItem colSpan={7} className="boxScroll" style={boxScrollStyle}>
        <TableHead {...style} />
      </GridItem>
      {/* Body table */}
      <GridItem>
        <Grid
          height="100%"
          direction="column"
          minH="355px"
          templateColumns="repeat(1, 1fr)"
        >
          {phongSort.map((e) => {
            return (
              <TableSideBar key={e.tenPhong} {...style} count={e.tenPhong} />
            );
          })}
        </Grid>
      </GridItem>
      {/* Body content box */}
      <GridItem colSpan={6}>
        {/* t01 */}

        {/* t02 */}
        <Grid templateColumns="repeat(6, 1fr)" h="100%">
          {/* {arrayA.map((e, index) => {
                        return <TableBox datalist={e} index={index} key={index} {...style} />;
                    })} */}
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={1}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={2}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={3}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={4}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={5}
          />
          <TableSort
            phong={phongSort}
            lengthP={lengtPhong}
            data={sortByCaThi}
            caThi={6}
          />
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Table;
