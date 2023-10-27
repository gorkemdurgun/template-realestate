type NoticeType = 'rent' | 'sale';
type NoticeCategory = 'house' | 'workplace' | 'plot';
type NoticeStatus = 'active' | 'hidden' | 'rented' | 'sold';

type Address = {
  city: string; // Şehir
  district: string; // İlçe
  neighborhood: string; // Mahalle
  street: string; // Sokak
  no: string; // Kapı No
  postal_code: string; // Posta Kodu
};

type GenericNoticeProperties = {
  id: string; // Kimlik
  published_at: string; // Yayınlanma Tarihi
  images?: string[]; // Resimler
  address?: Address; // Adres
  title?: string; // Başlık
  description?: {
    [lang: string]: string; // Dil
  }; // Açıklama
  price?: number; // Fiyat
  notice_category?: NoticeCategory; // İlan Kategorisi
  notice_type?: NoticeType; // İlan Tipi
  square_meter_gross?: number; // Brüt Metre Kare
  square_meter_net?: number; // Net Metre Kare
  credit_eligible?: boolean; // Krediye Uygun
  swap_eligible?: boolean; // Takasa Uygun
  status?: NoticeStatus; // Durumu
};

// House Types
type GenericHouseProperties = GenericNoticeProperties & {
  house_type?: HouseType; // Ev Tipi
  room_count?: NumberOfRooms; // Oda Sayısı
  building_age?: BuildingAgeType; // Bina Yaşı
  heating_type?: HeatingType; // Isınma Tipi
  floor_count?: number; // Kat Sayısı
  bathroom_count?: number; // Banyo Sayısı
  furnished?: boolean; // Eşyalı-Eşyasız
  have_balcony?: boolean; // Balkon Varmı
  have_terrace?: boolean; // Teras Varmı
  have_garden?: boolean; // Bahçe Varmı
  have_parking?: boolean; // Park Yeri Varmı
  have_elevator?: boolean; // Asansör Varmı
};

type ApartmentProperties = GenericHouseProperties & {
  floor_location?: number; // Bulunduğu Kat
  have_due?: boolean; // Aidat Varmı
  due_amount?: number; // Aidat Tutarı
  in_site?: boolean; // Site İçerisinde
  site_name?: string; // Site Adı
};
type ResidenceProperties = GenericHouseProperties & {
  floor_location?: number; // Bulunduğu Kat
  have_due?: boolean; // Aidat Varmı
  due_amount?: number; // Aidat Tutarı
  in_site?: boolean; // Site İçerisinde
  site_name?: string; // Site Adı
};
type DetachedHouseProperties = GenericHouseProperties & {
  have_due?: boolean; // Aidat Varmı
  due_amount?: number; // Aidat Tutarı
  in_site?: boolean; // Site İçerisinde
  site_name?: string; // Site Adı
};
type SummerHouseProperties = GenericHouseProperties & {
  have_due?: boolean; // Aidat Varmı
  due_amount?: number; // Aidat Tutarı
  in_site?: boolean; // Site İçerisinde
  site_name?: string; // Site Adı
};
type VillaProperties = GenericHouseProperties & {
  have_due?: boolean; // Aidat Varmı
  due_amount?: number; // Aidat Tutarı
  in_site?: boolean; // Site İçerisinde
  site_name?: string; // Site Adı
};
type MansionProperties = GenericHouseProperties & {
  structural_type?: StructuralType; // Yapı Tipi
};
type WatersideProperties = GenericHouseProperties & {
  structural_type?: StructuralType; // Yapı Tipi
};
type FarmProperties = GenericHouseProperties & {
  structural_type?: StructuralType; // Yapı Tipi
};

// Workplace Types
type WorkplaceProperties = GenericNoticeProperties & {
  workplace_type: WorkplaceType; // İş Yeri Tipi
  building_age: BuildingAgeType; // Bina Yaşı
  heating_type: HeatingType; // Isınma Tipi
  floor_count: number; // Kat Sayısı
  have_due?: boolean; // Aidat Varmı
  due_amount?: number; // Aidat Tutarı
  have_hirer?: boolean; // Kiracı Varmı
  by_transfer?: boolean; // Devren
};

type StoreProperties = WorkplaceProperties;
type OfficeProperties = WorkplaceProperties & {
  room_count: NumberOfRooms; // Oda Sayısı
  floor_location: number; // Bulunduğu Kat
};
type WorkshopProperties = WorkplaceProperties & {
  room_count: NumberOfRooms; // Oda Sayısı
};
type FactoryProperties = WorkplaceProperties & {
  part_count: number; // Bölüm Sayısı
};
type WarehouseProperties = WorkplaceProperties;
type GasStationProperties = WorkplaceProperties & {
  pump_count: number; // Pompa Sayısı
  daily_sale: number; // Günlük Satış
};

// Plot Types
type PlotProperties = GenericNoticeProperties & {
  zoning_status: ZoningStatus; // İmar Durumu
  square_meter_price: number; // Metre Kare Fiyatı
  land_number: number; // Ada Numarası
  plot_number: number; // Parsel Numarası
  sheet_number?: number; // Pafta Numarası
  gabari?: number; // Gabari
};
