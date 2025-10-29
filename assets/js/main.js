// ================================================================
// JavaScript الرئيسي - أكاديمية وجدان
// ================================================================

// تحميل التكوين
let config = null;

// تحميل ملف التكوين
async function loadConfig() {
    try {
        const script = document.createElement('script');
        script.src = './config.js';
        document.head.appendChild(script);
        
        // انتظار تحميل التكوين
        await new Promise(resolve => {
            script.onload = () => {
                config = window.ACADEMY_CONFIG;
                resolve();
            };
        });
    } catch (error) {
        console.error('Error loading config:', error);
    }
}

// =============== 1. Navbar Scroll Effect ===============
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// =============== 2. Smooth Scrolling ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =============== 3. إنشاء الجزيئات المتحركة ===============
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // حجم عشوائي
        const size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // موقع عشوائي
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // تأخير عشوائي
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// =============== 4. عداد الأرقام المتحرك ===============
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString('ar-SA');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString('ar-SA');
                        counter.classList.add('animated');
                    }
                };

                updateCounter();
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// =============== 5. تحديث الأسعار من التكوين ===============
function updatePrices() {
    if (!config) return;

    // تحديث أسعار STEP
    const stepElements = document.querySelectorAll('[data-course="step"]');
    stepElements.forEach(el => {
        const priceType = el.getAttribute('data-price-type');
        if (priceType === 'original') {
            el.textContent = config.prices.step.originalPrice;
        } else if (priceType === 'sale') {
            el.textContent = config.prices.step.salePrice;
        } else if (priceType === 'discount') {
            el.textContent = config.prices.step.discount;
        } else if (priceType === 'savings') {
            el.textContent = config.prices.step.savings;
        }
    });

    // تحديث أسعار IELTS
    const ieltsElements = document.querySelectorAll('[data-course="ielts"]');
    ieltsElements.forEach(el => {
        const priceType = el.getAttribute('data-price-type');
        if (priceType === 'original') {
            el.textContent = config.prices.ielts.originalPrice;
        } else if (priceType === 'sale') {
            el.textContent = config.prices.ielts.salePrice;
        } else if (priceType === 'discount') {
            el.textContent = config.prices.ielts.discount;
        } else if (priceType === 'savings') {
            el.textContent = config.prices.ielts.savings;
        }
    });
}

// =============== 6. تحديث الإحصائيات ===============
function updateStatistics() {
    if (!config) return;
    
    const stats = config.statistics;

    // تحديث عدد الطلاب
    const studentCounter = document.querySelector('[data-stat="students"]');
    if (studentCounter) {
        studentCounter.setAttribute('data-target', stats.students.count);
    }

    // تحديث نسبة النجاح
    const successCounter = document.querySelector('[data-stat="success"]');
    if (successCounter) {
        successCounter.setAttribute('data-target', stats.successRate.count);
    }

    // تحديث عدد الدورات
    const coursesCounter = document.querySelector('[data-stat="courses"]');
    if (coursesCounter) {
        coursesCounter.setAttribute('data-target', stats.courses.count);
    }
}

// =============== 7. Mobile Menu Toggle ===============
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });
    }
}

// =============== 8. Countdown Timer ===============
function initCountdownTimers() {
    const timers = document.querySelectorAll('.countdown-timer');
    
    timers.forEach(timer => {
        const days = parseInt(timer.getAttribute('data-days') || 3);
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + days);

        const updateTimer = () => {
            const now = new Date();
            const diff = endDate - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                timer.innerHTML = `
                    <div class="countdown-item">
                        <span class="countdown-number">${days}</span>
                        <span class="countdown-label">يوم</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${hours.toString().padStart(2, '0')}</span>
                        <span class="countdown-label">ساعة</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${minutes.toString().padStart(2, '0')}</span>
                        <span class="countdown-label">دقيقة</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${seconds.toString().padStart(2, '0')}</span>
                        <span class="countdown-label">ثانية</span>
                    </div>
                `;
            } else {
                timer.innerHTML = '<span style="color: var(--danger); font-weight: bold;">انتهى العرض!</span>';
            }
        };

        updateTimer();
        setInterval(updateTimer, 1000);
    });
}

// =============== 9. Success Message ===============
function showSuccessMessage(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10B981, #059669);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        animation: slideIn 0.5s ease;
    `;
    
    toast.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
}

// =============== 10. Accordion Toggle ===============
function toggleAccordion(header) {
    const item = header.parentElement;
    const allItems = document.querySelectorAll('.accordion-item');
    
    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });
    
    item.classList.toggle('active');
}

// جعل toggleAccordion متاحة عالمياً
window.toggleAccordion = toggleAccordion;

// =============== 11. تهيئة الصفحة عند التحميل ===============
document.addEventListener('DOMContentLoaded', async function() {
    // تحميل التكوين
    await loadConfig();

    // تحديث المحتوى من التكوين
    updatePrices();
    updateStatistics();

    // تهيئة المكونات
    createParticles();
    animateCounters();
    initMobileMenu();
    initCountdownTimers();

    // إخفاء Loader
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // Add click handlers for WhatsApp buttons
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const courseType = btn.getAttribute('data-course');
            const link = window.generateWhatsAppLink(courseType);
            window.open(link, '_blank');
        });
    });

    // Add click handlers for Telegram buttons
    document.querySelectorAll('.telegram-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const courseType = btn.getAttribute('data-course');
            const link = window.generateTelegramLink(courseType);
            window.open(link, '_blank');
        });
    });
});

// =============== 12. Expose Global Functions ===============
window.WejdanAcademy = {
    showSuccessMessage,
    config
};

// =============== التمرير الأفقي للدورات ===============
document.addEventListener('DOMContentLoaded', function() {
    const coursesRow = document.querySelector('.all-courses-row');
    const btnLeft = document.querySelector('.scroll-btn-left');
    const btnRight = document.querySelector('.scroll-btn-right');
    
    if (coursesRow && btnLeft && btnRight) {
        // حساب المسافة للتمرير (بطاقة واحدة + الفجوة)
        function getScrollDistance() {
            const card = coursesRow.querySelector('.service-card');
            const gap = 20; // 1.25rem = 20px
            return card ? card.offsetWidth + gap : 300;
        }
        
        // التمرير لليسار
        btnLeft.addEventListener('click', function() {
            coursesRow.scrollBy({
                left: getScrollDistance(),
                behavior: 'smooth'
            });
        });
        
        // التمرير لليمين
        btnRight.addEventListener('click', function() {
            coursesRow.scrollBy({
                left: -getScrollDistance(),
                behavior: 'smooth'
            });
        });
        
        // تحديث حالة الأزرار
        function updateButtons() {
            const scrollLeft = coursesRow.scrollLeft;
            const maxScroll = coursesRow.scrollWidth - coursesRow.clientWidth;
            
            // زر اليمين (الرجوع للبداية)
            if (scrollLeft <= 5) {
                btnRight.classList.add('hidden');
            } else {
                btnRight.classList.remove('hidden');
            }
            
            // زر اليسار (المتابعة)
            if (scrollLeft >= maxScroll - 5) {
                btnLeft.classList.add('hidden');
            } else {
                btnLeft.classList.remove('hidden');
            }
        }
        
        coursesRow.addEventListener('scroll', updateButtons);
        updateButtons(); // تهيئة أولية
        
        // تحديث عند تغيير حجم الشاشة
        window.addEventListener('resize', updateButtons);
    }
});

// ============ التمرير الأفقي ============
document.addEventListener('DOMContentLoaded', function() {
    const coursesRow = document.querySelector('.all-courses-row');
    const btnLeft = document.querySelector('.scroll-btn-left');
    const btnRight = document.querySelector('.scroll-btn-right');
    
    if (!coursesRow || !btnLeft || !btnRight) return;
    
    function getScrollDistance() {
        const card = coursesRow.querySelector('.service-card');
        return card ? card.offsetWidth + 32 : 420;
    }
    
    btnLeft.addEventListener('click', () => {
        coursesRow.scrollBy({ left: getScrollDistance(), behavior: 'smooth' });
    });
    
    btnRight.addEventListener('click', () => {
        coursesRow.scrollBy({ left: -getScrollDistance(), behavior: 'smooth' });
    });
    
    function updateButtons() {
        const scrollLeft = coursesRow.scrollLeft;
        const maxScroll = coursesRow.scrollWidth - coursesRow.clientWidth;
        
        if (scrollLeft <= 10) {
            btnRight.classList.add('hidden');
        } else {
            btnRight.classList.remove('hidden');
        }
        
        if (scrollLeft >= maxScroll - 10) {
            btnLeft.classList.add('hidden');
        } else {
            btnLeft.classList.remove('hidden');
        }
    }
    
    coursesRow.addEventListener('scroll', updateButtons);
    updateButtons();
    
    // السحب بالماوس
    let isDown = false, startX, scrollLeftStart;
    
    coursesRow.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        scrollLeftStart = coursesRow.scrollLeft;
    });
    
    coursesRow.addEventListener('mouseleave', () => isDown = false);
    coursesRow.addEventListener('mouseup', () => isDown = false);
    
    coursesRow.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        coursesRow.scrollLeft = scrollLeftStart + (startX - e.pageX) * 2;
    });
    
    // السحب باللمس
    let touchStartX = 0, touchScrollLeft = 0;
    
    coursesRow.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = coursesRow.scrollLeft;
    });
    
    coursesRow.addEventListener('touchmove', (e) => {
        coursesRow.scrollLeft = touchScrollLeft + (touchStartX - e.touches[0].pageX) * 1.5;
    });
});