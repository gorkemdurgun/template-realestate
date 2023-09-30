type ContactForm = {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
  status: boolean;
};

type NavItem = 'home' | 'rentals' | 'about' | 'contact' | 'login' | 'register';
