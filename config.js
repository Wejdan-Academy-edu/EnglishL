// ================================================================
// ملف التكوين الرئيسي - أكاديمية وجدان للتدريب
// ================================================================

const ACADEMY_CONFIG = {
    // =============== معلومات الأكاديمية ===============
    academy: {
        name: 'أكاديمية وجدان للتدريب',
        nameEn: 'Wejdan Training Academy',
        slogan: 'حقق حلمك في إتقان الإنجليزية',
        description: 'دورات تدريبية احترافية لاجتياز STEP، IELTS بدرجات عالية',
        established: 2004,
        country: 'المملكة العربية السعودية'
    },

    // =============== معلومات التواصل ===============
    contact: {
        whatsapp: {
            number: '0567409123',
            fullNumber: '966567409123',  // ⚠️ بدون + أو 00
            message: 'مرحباً، أريد الاستفسار عن الدورات التدريبية'
        },
        telegram: {
            username: 'Wejdan_Academy',
            channel: '@WejdanAcademy',
            link: 'https://t.me/Wejdan_Academy'
        },
        email: 'info@wejdan-academy.com',
        phone: '920019606',
        address: 'الرياض، المملكة العربية السعودية',
        twitter: 'https://twitter.com/WejdanAcademy',
        instagram: 'https://instagram.com/wejdan.academy',
        youtube: 'https://youtube.com/@WejdanAcademy'
    },

    // =============== الأسعار ===============
    prices: {
        step: {
            originalPrice: 1000,
            salePrice: 499,
            discount: 50,
            currency: 'ريال',
            currencySymbol: 'ر.س',
            savings: 500,
            validity: 'مدى الحياة',
            offerDays: "ينتهي قريباً"
        },
        ielts: {
            originalPrice: 1100,
            salePrice: 550,
            discount: 50,
            currency: 'ريال',
            currencySymbol: 'ر.س',
            savings: 500,
            validity: 'مدى الحياة',
            offerDays: "ينتهي قريباً"
        }
    },

    // =============== محتوى الدورات ===============
    courses: {
        step: {
            title: 'دورة STEP الشاملة',
            badge: 'خصم 50% - عرض محدود',
            badgeClass: 'danger',
            rating: 5.0,
            reviews: 2547,
            features: [
                { icon: '📖', text: '7 محاضرات Reading', count: 7, type: 'reading' },
                { icon: '📝', text: '17 محاضرة Grammar', count: 17, type: 'grammar' },
                { icon: '🎧', text: '4 محاضرات Listening', count: 4, type: 'listening' },
                { icon: '♾️', text: 'ملكك مدى الحياة', count: null, type: 'lifetime' }
            ],
            description: 'دورة شاملة ومتكاملة للتحضير لاختبار STEP بأعلى الدرجات مع ضمان النجاح',
            totalLectures: 28,
            totalExams: 150,
            duration: '3 أشهر',
            level: 'جميع المستويات',
            certificate: true,
            liveSupport: true,
            recordedLectures: true,
            personalFollowup: true
        },
        ielts: {
            title: 'دورة IELTS الاحترافية',
            badge: 'الأفضل مبيعاً',
            badgeClass: 'primary',
            rating: 4.9,
            reviews: 1893,
            features: [
                { icon: '🎧', text: '6 محاضرات Listening', count: 6, type: 'listening' },
                { icon: '📖', text: '10 محاضرات Reading', count: 10, type: 'reading' },
                { icon: '✍️', text: '8 محاضرات Writing', count: 8, type: 'writing' },
                { icon: '🗣️', text: '8 محاضرات Speaking', count: 8, type: 'speaking' }
            ],
            description: 'احترف مهارات اللغة الأربعة واحصل على درجة 7+ في IELTS مع مدربين محترفين',
            totalLectures: 32,
            totalExams: 200,
            duration: '4 أشهر',
            level: 'متوسط إلى متقدم',
            certificate: true,
            liveSupport: true,
            recordedLectures: true,
            personalFollowup: true
        }
    },

    // =============== الإحصائيات ===============
    statistics: {
        students: {
            count: 8500,
            label: 'طالب ناجح',
            icon: '👨‍🎓',
            increment: 50
        },
        successRate: {
            count: 98,
            label: 'نسبة النجاح',
            icon: '📊',
            symbol: '%'
        },
        courses: {
            count: 13,
            label: 'دورة متخصصة',
            icon: '📚'
        },
        teachers: {
            count: 5,
            label: 'مدرب محترف',
            icon: '👨‍🏫'
        },
        experience: {
            count: 10,
            label: 'سنة خبرة',
            icon: '⭐'
        }
    },

    // =============== فريق العمل ===============
    team: {
        founder: {
            name: 'د. وجدان',
            nameEn: 'Dr. Wejdan',
            title: 'المؤسسة والمدربة الرئيسية',
            badge: 'المؤسسة',
            experience: '10 سنة',
            students: 5000,
            rating: 4.9,
            bio: 'دكتوراه في اللغويات التطبيقية، خبرة تزيد عن 10 عاماً في تدريس اللغة الإنجليزية',
            qualifications: [
                'دكتوراه في اللغويات التطبيقية',
                'ماجستير تعليم اللغة',
                'مدرب معتمد British Council'
            ]
        },
        lead_trainer: {
            name: 'د. محمد',
            nameEn: 'Dr. Mohammed',
            title: 'المدرب الأول',
            badge: 'مدرب أول',
            experience: '8 سنوات',
            students: 3000,
            rating: 5.0,
            bio: 'ماجستير في تدريس اللغة الإنجليزية، خبرة واسعة في التحضير لاختبارات اللغة الدولية',
            qualifications: [
                'ماجستير TESOL - إدنبرة',
                'مدرب معتمد STEP & IELTS',
                'خبرة 8 سنوات في التدريب',
                'حاصل على IELTS 9.0'
            ]
        }
    },

    // =============== المميزات ===============
    features: {
        lifetime: {
            icon: '♾️',
            title: 'ملكك مدى الحياة',
            description: 'احتفظ بالدورة للأبد بدون أي رسوم إضافية',
            highlight: true
        },
        live_recorded: {
            icon: '📹',
            title: 'محاضرات لايف + مسجلة',
            description: 'احضر البث المباشر أو شاهد التسجيلات في أي وقت',
            highlight: true
        },
        personal_followup: {
            icon: '👨‍🏫',
            title: 'متابعة شخصية',
            description: 'مدرب خاص يتابعك خطوة بخطوة حتى النجاح',
            highlight: true
        },
        guaranteed_results: {
            icon: '✅',
            title: 'نتائج مضمونة',
            description: 'نضمن لك تحقيق الدرجة المستهدفة أو إعادة الدورة مجاناً',
            highlight: true
        }
    },

    // =============== رسائل WhatsApp التلقائية ===============
    whatsappMessages: {
        step: `مرحباً، أريد الاشتراك في دورة STEP الشاملة

السعر: {price} ريال
الوقت المفضل: _____

أرجو التواصل معي لإتمام التسجيل`,

        ielts: `مرحباً، أريد الاشتراك في دورة IELTS الاحترافية

السعر: {price} ريال
الوقت المفضل: _____

أرجو التواصل معي لإتمام التسجيل`
    },

    // =============== رسائل Telegram التلقائية ===============
    telegramMessages: {
        step: `🎓 مرحباً، أريد الاشتراك في:
دورة STEP الشاملة

⏰ الوقت المفضل: _____

أرجو التواصل لإتمام التسجيل والاستفادة من العرض 🚀`,

        ielts: `🎓 مرحباً، أريد الاشتراك في:
دورة IELTS الاحترافية

⏰ الوقت المفضل: _____

أرجو التواصل لإتمام التسجيل والاستفادة من العرض 🚀`
    }
};

// =============== دوال مساعدة ===============

// دالة لتنسيق الأسعار
const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-SA').format(price);
};

// دالة لحساب نسبة الخصم
const calculateDiscount = (original, sale) => {
    return Math.round((original - sale) / original * 100);
};

function generateWhatsAppLink(courseType) {
    const phone = '966567409123';
    const prices = { step: 499, ielts: 550 };
    const messages = {
        step: `مرحبا، اريد الاشتراك في دورة STEP الشاملة بسعر ${prices.step} ريال. الوقت المفضل: _____`,
        ielts: `مرحبا، اريد الاشتراك في دورة IELTS الاحترافية بسعر ${prices.ielts} ريال. الوقت المفضل: _____`
    };
    
    const message = messages[courseType] || 'مرحبا، اريد الاستفسار عن الدورات';
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// ✅ دالة تلقرام الصحيحة
function generateTelegramLink(courseType) {
    const { contact, telegramMessages } = ACADEMY_CONFIG;
    const username = contact.telegram.username;

    if (!username) {
        console.error('اسم المستخدم في تلقرام غير محدد');
        return 'https://t.me/Wejdan_Academy';
    }

    let message = 'مرحباً، أريد الاستفسار عن الدورات التدريبية';
    
    if (courseType && telegramMessages && telegramMessages[courseType]) {
        message = telegramMessages[courseType];
    }

    const encodedMessage = encodeURIComponent(message);
    return `https://t.me/${username}?text=${encodedMessage}`;
}

// ✅ اختبار الدوال في الكونسول
function testLinks() {
    console.log('====================================');
    console.log('🔍 اختبار روابط الواتساب والتليجرام');
    console.log('====================================');
    
    console.log('\n📱 WhatsApp Links:');
    console.log('STEP:', generateWhatsAppLink('step'));
    console.log('IELTS:', generateWhatsAppLink('ielts'));
    
    console.log('\n📲 Telegram Links:');
    console.log('STEP:', generateTelegramLink('step'));
    console.log('IELTS:', generateTelegramLink('ielts'));
    
    console.log('\n✅ اختبر الروابط بالنقر عليها في الموقع');
    console.log('====================================');
}

// تصدير للاستخدام العالمي
if (typeof window !== 'undefined') {
    window.ACADEMY_CONFIG = ACADEMY_CONFIG;
    window.generateWhatsAppLink = generateWhatsAppLink;
    window.generateTelegramLink = generateTelegramLink;
    window.formatPrice = formatPrice;
    window.calculateDiscount = calculateDiscount;
    window.testLinks = testLinks;
}

// تصدير للـ Node.js إن وجد
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ACADEMY_CONFIG,
        generateWhatsAppLink,
        generateTelegramLink,
        formatPrice,
        calculateDiscount,
        testLinks
    };
}

// ✅ تشغيل الاختبار بعد تحميل الصفحة
if (typeof window !== 'undefined') {
    window.addEventListener('load', function() {
        setTimeout(testLinks, 500);
    });
}