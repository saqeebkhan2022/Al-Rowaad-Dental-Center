import './globals.css';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://alrowaaddental.com';
export const metadata = {
 metadataBase: new URL(base),
 title: { default:'Al Rowaad Dental, Derma & Laser Center | Deira, Dubai', template:'%s | Al Rowaad Clinic' },
 description:'Dental care, clinical dermatology and laser treatments in Al Muraqqabat, Deira, Dubai. Contact Al Rowaad Dental, Derma & Laser Center via WhatsApp.',
 keywords:['Al Rowaad Dental Center','dentist Deira Dubai','dermatology Deira','laser clinic Deira','عيادة الرواد للأسنان','عيادة جلدية ديرة'],
 alternates:{canonical:'/'},
 openGraph:{title:'Al Rowaad Dental, Derma & Laser Center',description:'Elevated dental, dermatology and laser care in the heart of Deira, Dubai.',url:'/',siteName:'Al Rowaad Clinic',locale:'en_AE',type:'website'},
 robots:{index:true,follow:true},
};

export default function RootLayout({children}){
 return <html lang="en"><head><meta name="theme-color" content="#0F172A"/><link rel="preconnect" href="https://images.unsplash.com"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Tajawal:wght@400;500;600;700;800&display=swap" rel="stylesheet"/></head><body>{children}</body></html>;
}
