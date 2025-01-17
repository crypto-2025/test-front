import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { cache } from 'react';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection:{
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches:['cookie']
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
        }
      },
      ar: {
        translation: {
          'YOU ARE THE TALENT': 'أنت الموهبة',
          'MAKE YOUR TALENTS PROFITABLE WITH CRYPTOCURRENCIES.LET YOUR PASSIONATE FANS SUPPORT YOU.': 'اجعل مواهبك مربحة باستخدام العملات المشفرة.دع ​​معجبيك المتحمسين يدعمونك.',
          "Explore": "استكشاف",
          "Marketplace": "السوق",
          "Creators": "المنشئون",
          "Transfers": "التحويلات",
          "Search_Result": "نتائج البحث",
          "Search..": "ابحث...",
          "Chat": "الدردشة",
          "Notifications": "الإشعارات",
          "LogOut": "تسجيل الخروج",
          "Login": "تسجيل الدخول",
          "My Profile": "الملف الشخصي",
          "Buy A Mas": "الشراء من ماس",
          "Connect Wallet": "ربط المحفظة",
          "Create on MAS": "انشا عملة ماس",
          "Are you sure want to logout!": "هل أنت متأكد من أنك تريد تسجيل الخروج؟",
          "No": "لا",
          "Yea": "ىعم",
          "NFT Auction": "مزاد NFT",
          "Join The Community": "انضم إلى المجتمع",
          "loading...": "تحميل...",
          "COMING SOON": "قريباً",
          'Bundles': 'الحزم',
          'Best Sellers': 'أفضل المبيعات',
          'Popular Categories': 'الفئات الشعبية',
          'Creators': 'المبدعون',
          'Find a new MAS. Connect to your favorite one!': 'ابحث عن MAS جديد. قم بالاتصال بـ MAS المفضل لديك!',
          'Adams Berg': 'آدامز بيرج',
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galleyof tpe ad scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.': 'نص لوريم إيبسوم هو ببساطة نص شكلي أو وهمي لصناعة الطباعة والتنضيد. كان نص لوريم إيبسوم هو النص الشكلي القياسي للصناعة منذ عام 1500، عندما أخذ طابع غير معروف معرضًامن الأحرف وخلطه لعمل كتاب عينة مطبعية. لقد نجا ليس فقط من خمسة قرون، بل وأيضًا من القفزة إلى الطباعةالإلكترونية، وظل دون تغيير بشكل أساسي. نص لوريم إيبسوم هو ببساطة نص شكلي أو وهمي لصناعة الطباعة والتنضيد. كان نص لوريم إيبسوم هو النص الشكلي القياسي للصناعة منذ عام 1500، عندما أخذ طابع غير معروف معرضًامن الأحرف وخلطه لعمل كتاب عينة مطبعية. لقد نجا ليس فقط من خمسة قرون، بل وأيضًا من القفزة إلى الطباعةالإلكترونية، وظل دون تغيير بشكل أساسي. نص لوريم إيبسوم هو ببساطة نص شكلي أو وهمي لصناعة الطباعة والتنضيد. لقد كان نص لوريم إيبسوم هو النص الوهمي القياسي في الصناعة منذ القرن السادس عشر، عندما قام طابع مجهول بأخذ مجموعة من الحروف وخلطها لعمل كتاب عينات الحروف. لقد نجا النص ليس فقط من خمسة قرون، بل وأيضًا من القفزة إلى الطباعة الإلكترونية، وظل دون تغيير بشكل أساسي.',
          'clients': 'العملاء',
          'money raised': 'الأموال التي تم جمعها',
          'Cancel': 'الغاء',
          'Details': 'التفاصيل',
          'Twitter': 'تويتر',
          'Teligram': 'تلغرام',
          'E-mail': 'ايميل',
          'Facebook': 'فيسبوك',
          'Edit': 'تعديل',
          'View': 'عرض',
          'Close': 'اغلاق',
          'Donation Amount': 'مبلغ التبرع',
          'Donation': 'التبرع',
          'Time Duration': 'المدة الزمنية',
          'Subscribers': 'المشتركين',
          'Start date': 'تاريخ البدء',
          'End date': 'تاريخ النهاية',
          'Search': 'يبحث',
          'Select post type': 'حدد نوع المنشور',
          'Apply': 'يتقدم',
          'Clear': 'تنظيف',
          'buyers': 'المشترين',
          'Price': 'السعر',
          'My Auctions': 'مزاداتي',
          'Make a new auction': 'إنشاء مزاد جديد',
          'Title': 'عنوان',
          'Upload a photo or video': 'تحميل صورة أو فيديو',
          'Remove': 'حذف',
          'Expiry time': 'وقت انتهاء الصلاحية',
          'Starting bid': 'العرض الافتتاحي',
          'Upload': 'تحميل',
          'Token id': 'معرف الرمز',
          'Uploaded Successfully': 'تم التحميل بنجاح',
          'My Bundles': 'حزماتي',
          'share for audience': 'المشاركة للجمهور',
          'add a bundle': 'أضف حزمة',
          'Create a bundle': 'إنشاء حزمة',
          'Bundles Title': 'عنوان الحزم',
          'Bundles Name': 'اسم الحزم',
          'Upload image/video': 'تحميل الصورة/الفيديو',
          'Days': 'أيام',
          'Year': 'سنة',
          'Please select image': 'الرجاء اختيار الصورة',
          'Please enter valid details': 'الرجاء إدخال تفاصيل صالحة',
          'Buy Cryptocurrency': 'شراء العملات المشفرة',
          'YOUR Balance': 'رصيدك',
          'External wallet': 'المحفظة الخارجية',
          'USDT Balance in External wallet': 'رصيد USDT في المحفظة الخارجية',
          'Wallet Connection': 'اتصال المحفظة',
          'Charge Your Account with USDT': 'قم بشحن حسابك باستخدام USDT',
          'USDT Balance': 'رصيد USDT',
          'FDUSD Balance': 'رصيد FDUSD',
          'MAS Balance': 'رصيد MAS',
          'Wallet is connected': 'المحفظة متصلة',
          'Connect Wallet': 'ربط المحفظة',
          'Choose a wallet': 'اختر المحفظة',
          'Metamask': 'قناع ميتا',
          'Trust Wallet': 'محفظة الثقة',
          'Charge Your Account with USDT': 'قم بشحن حسابك باستخدام USDT',
          'Accept': 'قبول',
          'The transaction in processing... see your transaction history': 'المعاملة قيد المعالجة... راجع سجل معاملاتك',
          'Payment date': 'تاريخ الدفع',
          'Amount': 'كمية',
          'Beneficiary': 'المستفيد',
          'Receipt Id': 'معرف الإيصال',
          'Status': 'حالة',
          'My feed': 'خلاصتي',
          'My Items': 'عناصري',
          'add a Photos': 'أضف صورًا',
          'add a item': 'أضف عنصرًا',
          'Create a item': 'إنشاء عنصر',
          'items Name': 'اسم العنصر',
          'Duration': 'مدة',
          'Please enter valid details': 'الرجاء إدخال تفاصيل صالحة',
          'KYC Form': 'نموذج اعرف عميلك',
          'Name': 'الاسم',
          'Date of Birth': 'تاريخ الميلاد',
          'Document': 'وثيقة',
          'Upload Files': 'تحميل الملفات ',
          'Start Camera': 'بدء تشغيل الكاميرا',
          'Stop Camera': 'أوقف الكاميرا',
          'Take Picture': 'التقط صورة',
          'Processing': 'يعالج',
          "My Bids": "عروضي",
          "No Data Found": "لم يتم العثور على بيانات",
          "Make a new auction": "إنشاء مزاد جديد",
          "Title:": "العنوان:",
          "Upload a photo or video:": "تحميل صورة أو فيديو:",
          "Uploaded Successfully": "تم التحميل بنجاح",
          "Details:": "التفاصيل:",
          "Expiry time:": "وقت انتهاء العرض:",
          "Starting bid:": "سعر البدء:",
          "Cancel": "إلغاء",
          "Place Auction": "وضع المزاد",
          "Deposit": "إيداع",
          "Withdraw": "سحب",
          "Share": "مشاركة",
          "Subscriber": "مشترك",
          "Subscribers": "مشتركون",
          "Referral code": "كود الإحالة",
          "Referral code Copied": "تم نسخ كود الإحالة",
          "TOTAL BALANCE": "الرصيد الكلي",
          "TOTAL CREATE & EARN": "الإجمالي من الإنشاء والكسب",
          "Supporter": "داعم",
          "Supporters": "الداعمون",
          "Deposit": "إيداع",
          "Deposit Please make sure you use BSC (BNB Smart Chain)": "يرجى التأكد من استخدام شبكة BSC (شبكة BNB الذكية)",
          'Please make sure the Wallet address is BEP20 (Transaction will be sent in BSC Network)': 'يرجى التأكد من أن عنوان المحفظة هو BEP20 (سيتم إرسال المعاملة في شبكة BSC)',
          'Available': 'متاح',
          'Withdraw fees': 'رسوم السحب',
          'Amount + Fees': 'المبلغ + الرسوم',
          'You can share your link now anywhere!': 'يمكنك مشاركة الرابط الخاص بك الآن في أي مكان!',
          'Hooray!': 'ياااه!',
          "$MAS HELD": "$MAS المحتفظ بها",
          "PROFILE BADGE": "شارة الملف الشخصي",
          "CLIENT CREATOR FEES": "رسوم العميل المنشئ",
          "CONTENT CREATOR FEES": "رسوم منشئ المحتوى",
          "No Data Found": "لم يتم العثور على بيانات",
          "Deposit": "إيداع",
          "Withdraw": "سحب",
          'NicName': 'كنية',
          'Speciality': 'التخصص',
          'Add Picture': 'أضف صورة',
          'About me': 'ْعَنِّي',
          'Email': 'بريد إلكتروني',
          'Phone Number': 'رقم التليفون',
          'Profile URL': 'رابط الملف الشخصي',
          'Wallet Address': 'عنوان المحفظة',
          'Referral': 'الإحالة',
          'Confirmation': 'تأكيد',
          'Are you sure you want to delete your profile?': 'هل أنت متأكد أنك تريد حذف ملفك الشخصي؟',
          'Are you sure you want to deactivate your profile?': 'هل أنت متأكد أنك تريد إلغاء تنشيط ملفك الشخصي؟',
          'Users': 'المستخدمون',
          "sales Items": "عناصر المبيعات",

          "Share with your audience": "شارك مع جمهورك",
          "Title": "العنوان",
          "Please enter valid title": "يرجى إدخال عنوان صالح",
          "Details": "التفاصيل",
          "Upload a photo/video": "تحميل صورة/فيديو",
          "Remove": "إزالة",
          "Please select image": "يرجى اختيار صورة",
          "Select post type": "اختر نوع المنشور",
          "Please select post type": "يرجى اختيار نوع المنشور",
          "Select a bundle to share with": "اختر حزمة للمشاركة معها",
          "Create A Bundle": "إنشاء حزمة",
          "selected": "محدد",
          "Please select bundle": "يرجى اختيار حزمة",
          "Social Accounts": "الحسابات الاجتماعية",
          "Please enter your facebook page url": "يرجى إدخال رابط صفحة فيسبوك الخاصة بك",
          "Please enter your twitter @username": "يرجى إدخال اسم مستخدم تويتر @",
          "Please enter your telegram @username": "يرجى إدخال اسم مستخدم تيليجرام @",
          "Please enter your youtube channel url": "يرجى إدخال رابط قناة يوتيوب الخاصة بك",
          "Save": "حفظ",
          "Updating social links...": "جاري تحديث الروابط الاجتماعية...",
          'Back': 'خلف',
          "Bought": "المشتريات",
          "Sold": "المبيعات",
          "NFT List": "قائمة الـ NFT",
          "NoDataFound": "لا توجد بيانات",
          "UpdatingSocialLinks": "تحديث الروابط الاجتماعية...",
          "Save": "حفظ",
          "My Bundles": "My Bundles",
          "My Marketplace": "My Marketplace",
          "My purchases": "My purchases",
          "My sales": "My sales",
          "My subscriptions": "My subscriptions",
          "My feed": "My feed",
          "My auctions": "My auctions",
          "Subscribers": "Subscribers",
          "Supporter List": "Supporter List",
          "Donate Transaction": "Donate Transaction",
          "Transaction History": "Transaction History",
          "Payment date": "تاريخ الدفع",
          "Amount": "المبلغ",
          "From": "من",
          "To": "إلى",
          "Type": "النوع",
          "TransactionsHash": "معرف المعاملة",
          "Status": "الحالة",
          "data Copied": "تم نسخ البيانات",
          "My Supporter": "مؤيديّ",
          "My Subscribers": "مشتركيّ",
          "Supporter": "مؤيد",
          "Subscribers": "مشترك",
          "Pages": "الصفحات",
          "About the creator:": "عن المُنشئ:",
          "Wallet Address": "عنوان المحفظة",
          "Referral": "رمز الإحالة",
          "Donate": "تبرع",
          "Chat": "دردشة",
          "Subscribe": "اشتراك",
          "Unsubscribe": "إلغاء الاشتراك",
          "You can not subscribe yourself": "لا يمكنك الاشتراك بنفسك",
          "You can not donate yourself": "لا يمكنك التبرع لنفسك",
          "Please Login": "يرجى تسجيل الدخول",
          "You can not chat yourself": "لا يمكنك الدردشة مع نفسك",
          "Copied": "تم النسخ",
          "Subscribed": "مشترك",
          "- Creators -": "- المنشئون -",
          "- Bundles -": "- الحزم -",
          "Find User": "ابحث عن مستخدم",
          "Img": "الصورة",
          "Action": "الإجراء",
          "Speciality": "التخصص",
          "Total earning": "الإجمالي المكتسب",
          "Total referral earning": "الإجمالي المكتسب من الإحالات",
          "unleash_your_creativity": "افتح إبداعك",
          "login_to_your_account": "تسجيل الدخول إلى حسابك",
          "your_email_account": "حساب بريدك الإلكتروني",
          "incorrect_email": "البريد الإلكتروني غير صحيح.",
          "your_password": "كلمة المرور",
          "password_requirements": "يجب أن تحتوي كلمة المرور على 8 حروف على الأقل، حرف كبير، رقم، وحرف خاص",
          "forgot_password": "هل نسيت كلمة المرور",
          "sign_up": "التسجيل",
          "sign_in": "تسجيل الدخول",
          "security_verification": "التحقق الأمني",
          "please_complete_verification": "لأمان حسابك، من فضلك أكمل التحقق التالي.",
          "enter_email_for_reset": "أدخل البريد الإلكتروني المرتبط بحسابك وسنرسل لك رمزاً لإعادة تعيين كلمة المرور",
          "email_verification_code": "رمز التحقق من البريد الإلكتروني",
          "get_code": "احصل على الرمز",
          "resend_in": "إعادة الإرسال خلال",
          "enter_code_sent_to_email": "أدخل الرمز الذي تم إرساله إلى بريدك الإلكتروني",
          "password_hint": "أدخل كلمة المرور الجديدة",
          "enter_new_password": "أدخل كلمة المرور الجديدة",
          "password_requirements_list": "كلمة المرور يجب أن تحتوي على 8 حروف على الأقل، حرف كبير، رقم، وحرف خاص.",
          "continue": "استمرار",
          "submit_and_reset": "إرسال وإعادة تعيين",
          "join_our_affiliate_program": "انضم إلى برنامج الشركاء",
          "get_30_percent_of_fees": "احصل على 30% من رسوم شركائك",
          "your_affiliate_link": "رابط الشريك الخاص بك",
          "copy": "نسخ",
          "your_affiliate_qr_code": "رمز الاستجابة السريعة لشريكك",
          "number_of_affiliates_so_far": "عدد الشركاء حتى الآن:",
          "your_earnings_so_far": "أرباحك حتى الآن:",
          "withdraw_your_earnings": "سحب أرباحك",
          "eth_and_mas_fees_apply": "تطبق رسوم ETH و",
          "mas_fees": "رسوم MAS",
          "mas_held": "MAS المحتفظ به",
          "profile_badge": "شعار الملف الشخصي",
          "content_creator_fees": "رسوم منشئي المحتوى",
          "basic": "أساسي",
          "silver": "فضي",
          "gold": "ذهبي",
          "diamond": "ماس",
          "mas_plus": "MAS بلس",
          "no": "لا",
          "gold_badge": "شعار ذهبي",
          "diamond_badge": "شعار ماس",
          "mas_plus_badge": "شعار MAS بلس",
          "create_account": "إنشاء حساب",
          "username": "اسم المستخدم",
          "please_enter_username": "يرجى إدخال اسم مستخدم صالح",
          "email": "البريد الإلكتروني",
          "please_enter_valid_email": "يرجى إدخال بريد إلكتروني صالح",
          "phone_number": "رقم الهاتف",
          "please_enter_valid_phone_number": "يرجى إدخال رقم هاتف صالح",
          "password": "كلمة المرور",
          "password_validation": "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل",
          "referral_code": "رمز الإحالة (اختياري)",
          "already_have_account": "هل لديك حساب بالفعل؟",
          "sign_in_here": "تسجيل الدخول هنا",
          "continue": "استمر",
          "sign_up": "تسجيل",
          "last_step": "الخطوة الأخيرة",
          "agree_terms_conditions": "أوافق على الشروط والأحكام",
          "terms_conditions": "الشروط والأحكام",
          "agree_to_terms_conditions": "أوافق على الشروط والأحكام",
          "agree_to_privacy_policy": "أوافق على سياسة الخصوصية",
          "agree_to_risk_statement": "أوافق على بيان المخاطر",
          "agree_to_kyc_program": "أوافق على برنامج اعرف عميلك",
          "agree_to_all": "أوافق على جميع الشروط",
          '- ALL BUNDLES -': '- جميع الحزم-',
          '- ALL Items - ': '- جميع العناصر -',
          'no Item ': 'لا يوجد عناصر',
          'version': 'إصدار',
          'game': 'لعبة',
          'speciality': 'التخصص',
          'Developer': 'المطور',
          'Online':'متصل',
          'Active recently':'نشط مؤخرا',
          'Chat started':'بدأت الدردشة',
          'Remove all images':'إزالة جميع الصور',
          'Online users':'المستخدمون عبر الإنترنت',
          'Chat disconnected, retrying':'تم قطع الاتصال بالدردشة، إعادة المحاولة',
          'Kick start chat now!':'ابدأ الدردشة الآن!',
          'Say Hi 👊 to your MAS community':'قل مرحباً 👊 لمجتمع MAS الخاص بك',
          'Go Back to Home Page':'العودة إلى الصفحة الرئيسية',
          'Page requested not found':'لم يتم العثور على الصفحة المطلوبة',
          'Number of subscribers':'عدد المشتركين',
          'I will send you a special video every':'سأرسل لك فيديو خاص كل',
          'month specially for you! (edit)':'شهر خاص لك! (تعديل)',
          'Change/upload a photo or video':'تغيير/تحميل صورة أو فيديو',
          'Delete this bundle':'حذف هذه الحزمة',
          'Save Changes':'حفظ التغييرات',
          'Services':'خدمات',
          'The basic bundle':'الحزمة الأساسية',
          'Subscribe now':'اشترك الآن',
          'Enter an amount':'أدخل المبلغ',
          'Send a message':'أرسل رسالة',
          'ETH fees and ETH fees and apply. apply.':'رسوم ETH ورسوم ETH وتنطبق. تنطبق.',
          'download':'تحميل',
          'Send donation to':'أرسل التبرع إلى',
          'Donation Message':'رسالة التبرع',
          'Transaction fees':'رسوم المعاملات',
          'Transfer Funds':'تحويل الأموال',
          'Delete this item':'حذف هذا العنصر',
          'item':'عنصرً',
          'Donate now':'تبرع الآن',
          'Security verification':'التحقق من الأمان',
          'Submit':'ارسال',
          'Filename':'اسم الملف',
          'Uploading':'جاري التحميل',
          "Select Image/Video": "اختر صورة/فيديو",
          "Accept All Video/Image Formats": "قبول جميع تنسيقات الفيديو/الصورة",
          "Max File Size: 1024 MP": "أقصى حجم للملف: 1024 ميغابايت",
          "Min Width Size: 300px": "أدنى عرض: 300px",
          "Min Height Size: 160px": "أدنى ارتفاع: 160px",
          'item Title':'عنوان العنصر',
          'Ends in : 10 days 4 hours 36 minutes 44 seconds':'تنتهي في : 10 أيام 4 ساعات 36 دقيقة 44 ثانية',
          'Follow':'يتبع',
          'since':'منذ',
          'Likes':'الإعجابات',
          "Billing Information": "معلومات الفاتورة",
          "Please enter your billing information below:": "يرجى إدخال معلومات الفاتورة أدناه:",
          "Cancel": "إلغاء",
          "Buy Now": "اشتر الآن",
          "Successed Purchase": "تم الشراء بنجاح",
          "Your purchase was successful. You can download your bill now.": "تم الشراء بنجاح. يمكنك تحميل فاتورتك الآن.",
          "Download Bill": "تحميل الفاتورة",
          "Show Your Bill Now": "عرض فاتورتك الآن",
          "Successful Purchase": "شراء ناجح",
          "Your purchase was successful. You can view your bill below:": "تم الشراء بنجاح. يمكنك مشاهدة فاتورتك أدناه:",
          "Bill Preview": "معاينة الفاتورة",
          'Forever':'للأبد',
          'My basic supporter':'مؤيدي الأساسي',
          'month specially for you!':'شهر خاص لك!',
          'Chose Bundles To Share with':'اختر الحزم التي تريد مشاركتها',
          'Valid till':'صالح ل',
          'Bio':'لقد كان',
          'Available bundles':'الحزم المتاحة',
          'Users List':'قائمة المستخدمين',
          ' Select user type ':'حدد نوع المستخدم',
          'Creator':'الصانع',
          "Sr.No": "الرقم التسلسلي",
          "Profile Photo": "صورة الملف الشخصي",
          "Wallet address": "عنوان المحفظة",
          "Users name": "اسم المستخدم",
          "User type": "نوع المستخدم",
          "Action": "الإجراء",
          '':'',
          '':'',
          '':'',
          '':'',
          '':'',
          '':'',
          '':'',
          '':'',
          '':'',
          '':'',
          '':'',
        }
      }
    }
  });

export default i18n;