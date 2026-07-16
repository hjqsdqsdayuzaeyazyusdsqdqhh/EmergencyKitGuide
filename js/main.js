(function() {
      'use strict';

      // ========================================
      // HEADER SCROLL
      // ========================================
      const header = document.getElementById('header');
      window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.pageYOffset > 20);
      }, { passive: true });

      // ========================================
      // READING PROGRESS BAR
      // ========================================
      const progressBar = document.getElementById('progressBar');
      if (progressBar) {
        window.addEventListener('scroll', function() {
          var h = document.documentElement;
          var pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
          progressBar.style.width = pct + '%';
        }, { passive: true });
      }

      // ========================================
      // MOBILE MENU
      // ========================================
      var mobileMenuBtn = document.getElementById('mobileMenuBtn');
      var mobileNav = document.getElementById('mobileNav');
      var menuOpen = false;

      if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
          menuOpen = !menuOpen;
          mobileNav.classList.toggle('open', menuOpen);
          document.body.style.overflow = menuOpen ? 'hidden' : '';
        });
        mobileNav.querySelectorAll('a').forEach(function(link) {
          link.addEventListener('click', function() {
            menuOpen = false;
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
          });
        });
      }

      // ========================================
      // INTERSECTION OBSERVER (FADE-IN + ALL ANIMATIONS)
      // ========================================
      var animElements = document.querySelectorAll('.fade-in, .fade-in-up, .scale-in, .slide-in-left, .slide-in-right');
      var fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      animElements.forEach(function(el) { fadeObserver.observe(el); });

      // ========================================
      // COUNTER ANIMATION
      // ========================================
      function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-target'));
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 2000;
        var start = performance.now();

        function update(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.round(eased * target);
          el.textContent = current + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      }

      var statsSection = document.querySelector('.trusted-stats');
      if (statsSection) {
        var counterObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var nums = entry.target.querySelectorAll('.stat-number[data-target]');
              nums.forEach(function(n, i) { setTimeout(function() { animateCounter(n); }, i * 150); });
              counterObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });
        counterObserver.observe(statsSection);
      }

      // ========================================
      // FAQ ACCORDION
      // ========================================
      document.querySelectorAll('.faq-question').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var item = btn.closest('.faq-item');
          var isOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
            if (openItem !== item) openItem.classList.remove('open');
          });
          item.classList.toggle('open', !isOpen);
        });
      });

      // ========================================
      // CHECKLIST GENERATOR
      // ========================================
      var checklistData = {
        car: [
          'Jumper cables or portable jump starter', 'First aid kit', 'Flashlight with extra batteries',
          'Reflective warning triangles', 'Multi-tool or basic tool kit', 'Emergency blanket (mylar)',
          'Bottled water (1 gallon minimum)', 'Non-perishable snacks', 'Portable phone charger',
          'Tire pressure gauge', 'Duct tape', 'Rain poncho'
        ],
        fire: [
          'Fire extinguisher (ABC rated)', 'Smoke detectors (tested monthly)', 'Carbon monoxide detector',
          'Fire escape ladder (2+ stories)', 'Fireproof document bag', 'Flashlight with extra batteries',
          'First aid kit', 'Emergency whistle', 'Fire-resistant gloves', 'Escape hood or mask',
          'Emergency blankets', 'Important documents copies'
        ],
        winter: [
          'Extra warm blankets', 'Hand and toe warmers', 'Winter sleeping bag',
          'Non-perishable food (3 days)', 'Water (1 gallon per person per day)',
          'Battery-powered lantern', 'Flashlight with extra batteries', 'First aid kit',
          'Ice scraper and snow brush', 'Sand or cat litter for traction',
          'Warm clothing layers', 'Emergency whistle'
        ],
        storm: [
          'Emergency water (1 gallon per person per day)', 'Non-perishable food (3-day supply)',
          'Battery-powered weather radio', 'Flashlight with extra batteries', 'First aid kit',
          'Emergency whistle', 'Important documents in waterproof bag', 'Cash in small bills',
          'Portable phone charger', 'Emergency blankets', 'Dust masks',
          'Wrench or pliers (to turn off utilities)'
        ],
        travel: [
          'First aid kit', 'Travel-size medications', 'Copies of important documents',
          'Emergency cash', 'Portable phone charger', 'Flashlight or headlamp',
          'Multi-tool', 'Emergency blanket', 'Bottled water', 'Energy bars or snacks',
          'Travel insurance documents', 'Local emergency numbers'
        ]
      };

      var extraBySize = {
        4: ['Extra water bottles', 'Additional first aid supplies'],
        5: ['Large water container', 'Group first aid kit', 'Extra emergency blankets'],
        6: ['Large water container', 'Group first aid kit', 'Extra emergency blankets', 'Portable stove']
      };

      var selectedSituation = null;
      var selectedSize = 3;

      document.querySelectorAll('.situation-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.situation-btn').forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          selectedSituation = btn.getAttribute('data-situation');
          generateChecklist();
        });
      });

      document.querySelectorAll('.size-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.size-btn').forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          selectedSize = parseInt(btn.getAttribute('data-size'));
          generateChecklist();
        });
      });

      function generateChecklist() {
        if (!selectedSituation) return;
        var result = document.getElementById('checklistResult');
        var grid = document.getElementById('resultGrid');
        var title = document.getElementById('resultTitle');
        var count = document.getElementById('resultCount');

        var items = (checklistData[selectedSituation] || []).slice();
        if (selectedSize >= 4 && extraBySize[4]) items = items.concat(extraBySize[4]);
        if (selectedSize >= 5 && extraBySize[5]) items = items.concat(extraBySize[5]);
        if (selectedSize >= 6 && extraBySize[6]) items = items.concat(extraBySize[6]);
        items = items.filter(function(v, i, a) { return a.indexOf(v) === i; });

        var label = selectedSituation.charAt(0).toUpperCase() + selectedSituation.slice(1);
        title.textContent = label + ' Emergency Kit';
        count.textContent = items.length + ' items';

        grid.innerHTML = items.map(function(item, i) {
          return '<div class="result-item" style="animation-delay:' + (i * 0.04) + 's">' +
            '<div class="result-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
            '<span>' + item + '</span></div>';
        }).join('');

        result.classList.remove('show');
        void result.offsetWidth;
        result.classList.add('show');
      }

      // ========================================
      // COPY + PRINT CHECKLIST
      // ========================================
      var copyBtn = document.getElementById('copyChecklist');
      var printBtn = document.getElementById('printChecklist');

      if (copyBtn) {
        copyBtn.addEventListener('click', function() {
          var grid = document.getElementById('resultGrid');
          if (!grid || !grid.children.length) return;
          var lines = [];
          grid.querySelectorAll('.result-item').forEach(function(item) {
            lines.push('â˜ ' + item.querySelector('span').textContent);
          });
          if (lines.length === 0) return;

          var header = document.getElementById('resultTitle');
          var text = (header ? header.textContent : 'Emergency Kit Checklist') + '\n' +
                     lines.join('\n') + '\n\nGenerated by EmergencyKitGuide.com';

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
              showToast('success', 'Checklist copied to clipboard');
            });
          } else {
            var ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('success', 'Checklist copied to clipboard');
          }
        });
      }

      if (printBtn) {
        printBtn.addEventListener('click', function() {
          window.print();
        });
      }

      // ========================================
      // TOAST SYSTEM
      // ========================================
      function showToast(type, message) {
        var container = document.getElementById('toastContainer');
        if (!container) return;

        var toast = document.createElement('div');
        toast.className = 'toast ' + type;

        var iconPaths = {
          success: '<polyline points="20 6 9 17 4 12"/>',
          info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
          error: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
        };

        toast.innerHTML = '<div class="toast-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' + (iconPaths[type] || iconPaths.info) + '</svg></div>' + message;

        container.appendChild(toast);
        requestAnimationFrame(function() {
          requestAnimationFrame(function() { toast.classList.add('show'); });
        });

        setTimeout(function() {
          toast.classList.remove('show');
          setTimeout(function() { toast.remove(); }, 300);
        }, 3500);
      }

      // ========================================
      // NEWSLETTER FORM
      // ========================================
      var nlForm = document.getElementById('newsletterForm');
      if (nlForm) {
        nlForm.addEventListener('submit', function(e) {
          e.preventDefault();
          var input = nlForm.querySelector('.newsletter-input');
          var btn = nlForm.querySelector('.btn');
          var originalText = btn.textContent;
          btn.textContent = 'Subscribed!';
          btn.style.background = '#16A34A';
          input.value = '';
          showToast('success', 'Welcome! Check your email for confirmation.');
          setTimeout(function() {
            btn.textContent = originalText;
            btn.style.background = '';
          }, 2500);
        });
      }

      // ========================================
      // MEGA MENU (MOBILE TOGGLE)
      // ========================================
      var megaItems = document.querySelectorAll('.nav-item-mega');
      megaItems.forEach(function(item) {
        var trigger = item.querySelector('a');
        if (trigger) {
          trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 640) {
              e.preventDefault();
              item.classList.toggle('open');
            }
          });
        }
      });

      // Close mega menu on outside click (desktop)
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item-mega')) {
          megaItems.forEach(function(item) { item.classList.remove('open'); });
        }
      });

      // ========================================
      // BACK TO TOP
      // ========================================
      var backToTop = document.getElementById('backToTop');
      if (backToTop) {
        window.addEventListener('scroll', function() {
          backToTop.classList.toggle('visible', window.pageYOffset > 600);
        }, { passive: true });

        backToTop.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // ========================================
      // BUTTON RIPPLE EFFECT
      // ========================================
      document.querySelectorAll('.btn').forEach(function(btn) {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.addEventListener('click', function(e) {
          var ripple = document.createElement('span');
          var rect = this.getBoundingClientRect();
          var size = Math.max(rect.width, rect.height);
          ripple.style.cssText = 'position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);width:' +
            size + 'px;height:' + size + 'px;left:' + (e.clientX - rect.left - size / 2) + 'px;top:' +
            (e.clientY - rect.top - size / 2) + 'px;transform:scale(0);animation:rippleAnim 0.6s ease-out;pointer-events:none;';
          this.appendChild(ripple);
          setTimeout(function() { ripple.remove(); }, 600);
        });
      });

      var rippleStyle = document.createElement('style');
      rippleStyle.textContent = '@keyframes rippleAnim{to{transform:scale(4);opacity:0;}}';
      document.head.appendChild(rippleStyle);

    })();