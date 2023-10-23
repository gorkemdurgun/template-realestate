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

type HouseProperties = GenericNoticeProperties & {
  house_type?: HouseType; // Ev Tipi
  room_count?: NumberOfRooms; // Oda Sayısı
  building_age?: BuildingAgeType; // Bina Yaşı
  heating_type?: HeatingType; // Isınma Tipi
  floor_location?: number; // Bulunduğu Kat
  floor_count?: number; // Kat Sayısı
  bathroom_count?: number; // Banyo Sayısı
  furnished?: boolean; // Eşyalı-Eşyasız
  have_balcony?: boolean; // Balkon Varmı
  have_terrace?: boolean; // Teras Varmı
  have_garden?: boolean; // Bahçe Varmı
  have_parking?: boolean; // Park Yeri Varmı
  have_elevator?: boolean; // Asansör Varmı
  have_due?: boolean; // Aidat Varmı
  due_amount?: number; // Aidat Tutarı
  in_site?: boolean; // Site İçerisinde
  site_name?: string; // Site Adı
};
type WorkplaceProperties = GenericNoticeProperties & {
  workplace_type: WorkplaceType; // İş Yeri Tipi
  room_count: NumberOfRooms; // Oda Sayısı
  building_age: BuildingAgeType; // Bina Yaşı
  heating_type: HeatingType; // Isınma Tipi
  floor_count: number; // Kat Sayısı
  have_due?: boolean; // Aidat Varmı
  have_hirer?: boolean; // Kiracı Varmı
};
type PlotProperties = GenericNoticeProperties & {
  square_meter_price: number; // Metre Kare Fiyatı
  land_number: number; // Ada Numarası
  plot_number: number; // Parsel Numarası
  sheet_number?: number; // Pafta Numarası
  zoning_status: ZoningStatus; // İmar Durumu
};
