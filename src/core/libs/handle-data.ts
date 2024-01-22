import { CaRanhModel } from '../models/caranh/ca-ranh.model';
import { LichThi2Model } from '../models/lichthi2/lichthi2.model';
import { PhongModel } from '../models/phong/phong.model';

export const handleDataPhongBaseLichThi = (
  data_phong_handel_filter: PhongModel[],
  data_lich_thi_hanle_filter: LichThi2Model[],
): PhongModel[] => {
  const only_phong_exist_on_lichthi = data_phong_handel_filter
    .filter((e) =>
      [...new Set(data_lich_thi_hanle_filter.map((obj) => obj.ten_Phong))].find(
        (item) => item.includes(e.tenPhong),
      ),
    )
    .sort((a, b) => (a.tenPhong > b.tenPhong ? 1 : -1));
  return only_phong_exist_on_lichthi;
};

export const handleSortLichThiBaseCaThi = (
  ca_thi: number,
  data_lich_thi_hanle_filter: LichThi2Model[],
): LichThi2Model[] => {
  const hanlde_filter_lichthi_sort_base_cathi = data_lich_thi_hanle_filter
    .filter((e) => {
      return e.ca_Thi == ca_thi;
    })
    .sort((a, b) => {
      return (
        Number(a.ten_Phong?.slice(-1)) ??
        0 - Number(b.ten_Phong?.slice(-1)) ??
        0
      );
    });

  return hanlde_filter_lichthi_sort_base_cathi;
};

export const handleSortLichThiBasePhong = (
  lenght_data_phong: number,
  data_lich_thi_handle_sort_base_cathi: LichThi2Model[],
  data_phong_handle_sort: PhongModel[],
): (LichThi2Model | object)[] => {
  const lengthPhong = lenght_data_phong;
  const data_lich_thi = data_lich_thi_handle_sort_base_cathi;

  const sortedArray: (LichThi2Model | object)[] = data_lich_thi.sort((a, b) => {
    if (a.ten_Phong && b.ten_Phong) {
      return a.ten_Phong > b.ten_Phong ? 1 : -1;
    } else return 0;
  });

  while (sortedArray.length < lengthPhong) {
    sortedArray.push({});
  }

  const arrayEnd: (LichThi2Model | object)[] = [];

  for (let i = 0; i < sortedArray.length; i++) {
    if (Object.keys(sortedArray[i]).length !== 0) {
      data_phong_handle_sort.forEach((itemPhong, index) => {
        if (
          (sortedArray[i] as LichThi2Model).ten_Phong.includes(
            itemPhong.tenPhong,
          )
        ) {
          arrayEnd[index] = sortedArray[i];
        }
      });
    }
  }

  for (let i = 0; i < arrayEnd.length - 1; i++) {
    if (arrayEnd[i] == undefined) {
      arrayEnd[i] = {};
    }
  }

  return arrayEnd;
};

export const handleDataCaRanhBaseMaNV = (
  data_ca_ranh_filter_base_date: CaRanhModel[],
  ma_nv: string,
) => {
  const caThi = ['1', '2', '3', '4', '5', '6'];
  const caBan: CaRanhModel[] = data_ca_ranh_filter_base_date.filter(
    (e) => e.MaNV == ma_nv,
  );

  const caBanArray: string[] = [
    ...new Set(
      caBan.reduce(
        (acc, obj) => [...acc, ...obj.caXacNhan.split(',')],
        [] as string[],
      ),
    ),
  ].map((e) => {
    return e.replace(/"/g, '') as string;
  });

  const caRanh = caThi
    .filter((element) => !caBanArray.includes(element))
    .map((e) => Number(e));
  return {
    caRanh: caRanh,
    caBan: caBanArray,
  };
};
