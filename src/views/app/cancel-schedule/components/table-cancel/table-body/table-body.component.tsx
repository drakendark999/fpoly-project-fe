import React from 'react';

import { useSelector } from 'react-redux';
import { getSelectorAccount } from '@src/selector/selectorAccount';
import { jwtAccount } from '@src/core/libs/ultis';
import { getSelectorAllLichThi2Cancel } from '@src/selector/selectorLichThi2';
import { allowGvBySubject } from '@src/core/data/allow-gv';
import { LichThi2Model } from '@src/core/models/lichthi2/lichthi2.model';
import { StatusEnum } from '@src/core/libs/constants';
import TableItemCancel from './table-item/table-item-cancel.component';

const TableBody: React.FunctionComponent = () => {
  const { accessToken } = useSelector(getSelectorAccount);
  let getAllCancelData = useSelector(getSelectorAllLichThi2Cancel);
  const MaGV = jwtAccount(accessToken);

  const boMonAccept = allowGvBySubject.find((e) => e.gv === MaGV);
  if (boMonAccept) {
    getAllCancelData = getAllCancelData.filter((e) =>
      boMonAccept.cnbm.includes(e.bo_Mon),
    );
  }

  return (
    <>
      {boMonAccept ? (
        <>
          {getAllCancelData &&
            getAllCancelData.map((item: LichThi2Model, index) => {
              return item.status_GV1 === StatusEnum.CANCEL ? (
                <TableItemCancel
                  key={`${index.toString()} ${item.id} `}
                  data_gv_cancel={item}
                />
              ) : (
                <></>
              );
            })}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TableBody;
