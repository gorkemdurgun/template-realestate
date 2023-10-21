type HouseType =
  | 'apartment' // Apartman Dairesi
  | 'all_apartment' // Bütün Apartman
  | 'residence' // Rezidans
  | 'detached_house' // Müstakil Ev
  | 'summer_house' // Yazlık
  | 'villa' // Villa
  | 'mansion' // Köşk
  | 'waterside' // Yalı
  | 'farm' // Çiftlik Evi
  | 'other'; // Diğer

type HeatingType =
  | 'central' // Merkezi
  | 'natural_gas' // Doğalgaz
  | 'solar_energy' // Güneş Enerjisi
  | 'geothermal_energy' // Jeotermal Enerji
  | 'wood' // Odun
  | 'coal' // Kömür
  | 'electricity' // Elektrik
  | 'other'; // Diğer

type BuildingAgeType =
  | '0-2'
  | '3-5'
  | '6-10'
  | '11-15'
  | '16-20'
  | '21-25'
  | '26-30'
  | '31-35'
  | '36-40'
  | '41-45'
  | '46-50'
  | '51+';

type NumberOfRooms =
  | '1+0'
  | '1+1'
  | '2+0'
  | '2+1'
  | '2+2'
  | '3+0'
  | '3+1'
  | '3+2'
  | '4+0'
  | '4+1'
  | '4+2'
  | '4+3'
  | '5+0'
  | '5+1'
  | '5+2'
  | '5+3'
  | '5+4'
  | '6+0'
  | '6+1'
  | '6+2'
  | '6+3'
  | '6+4'
  | '6+5'
  | '7+0'
  | '7+1'
  | '7+2'
  | '7+3'
  | '7+4'
  | '7+5'
  | '7+6'
  | '8+0'
  | '8+1'
  | '8+2'
  | '8+3'
  | '8+4'
  | '8+5'
  | '8+6'
  | '8+7'
  | '9+0'
  | '9+1'
  | '9+2'
  | '9+3'
  | '9+4'
  | '9+5'
  | '9+6'
  | '9+7'
  | '9+8'
  | '10+0'
  | '10+1'
  | '10+2'
  | '10+3'
  | '10+4';