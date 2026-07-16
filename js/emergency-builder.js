(function() {
  'use strict';

  // ========================================
  // KIT BUILDER DATA
  // ========================================
  var kitData = {
    car: {
      name: 'Car Emergency',
      icon: '\uD83D\uDE97',
      items: {
        basic: [
          { n: 'Water (1 gallon per person)', c: 'Sustenance', q: 1 },
          { n: 'Non-perishable food (3-day supply)', c: 'Sustenance', q: 1 },
          { n: 'Flashlight with extra batteries', c: 'Lighting', q: 1 },
          { n: 'First aid kit', c: 'Medical', q: 1 },
          { n: 'Emergency blanket (mylar)', c: 'Warmth', q: 1 },
          { n: 'Portable phone charger', c: 'Communication', q: 1 },
          { n: 'Emergency whistle', c: 'Signaling', q: 1 },
          { n: 'Copies of important documents', c: 'Documents', q: 1 },
          { n: 'Cash in small bills', c: 'Supplies', q: 1 },
          { n: 'Reflective warning triangles', c: 'Safety', q: 1 }
        ],
        recommended: [
          { n: 'Jumper cables or portable jump starter', c: 'Repair', q: 1 },
          { n: 'Multi-tool or basic tool kit', c: 'Tools', q: 1 },
          { n: 'Duct tape', c: 'Supplies', q: 1 },
          { n: 'Rain poncho', c: 'Protection', q: 1 },
          { n: 'Tire pressure gauge', c: 'Repair', q: 1 },
          { n: 'Extra warm clothing layers', c: 'Warmth', q: 1 },
          { n: 'Energy bars or high-calorie snacks', c: 'Sustenance', q: 1 },
          { n: 'Disposable camera', c: 'Documentation', q: 1 }
        ],
        complete: [
          { n: 'Portable jump starter', c: 'Repair', q: 1 },
          { n: 'Fire extinguisher (ABC rated)', c: 'Safety', q: 1 },
          { n: 'Tow strap', c: 'Repair', q: 1 },
          { n: 'Road flares or LED beacons', c: 'Signaling', q: 1 },
          { n: 'Emergency AM/FM radio', c: 'Communication', q: 1 },
          { n: 'Tire repair kit and inflator', c: 'Repair', q: 1 },
          { n: 'Work gloves', c: 'Protection', q: 1 },
          { n: 'Collapsible water container', c: 'Sustenance', q: 1 },
          { n: 'Hand and toe warmers', c: 'Warmth', q: 1 },
          { n: 'Permanent marker and paper', c: 'Documentation', q: 1 }
        ]
      }
    },
    home: {
      name: 'Home Emergency',
      icon: '\uD83C\uDFE0',
      items: {
        basic: [
          { n: 'Water (1 gallon per person per day, 3-day supply)', c: 'Sustenance', q: 3 },
          { n: 'Non-perishable food (3-day supply)', c: 'Sustenance', q: 1 },
          { n: 'Flashlight with extra batteries', c: 'Lighting', q: 1 },
          { n: 'First aid kit', c: 'Medical', q: 1 },
          { n: 'Emergency blanket (mylar)', c: 'Warmth', q: 1 },
          { n: 'Portable phone charger', c: 'Communication', q: 1 },
          { n: 'Emergency whistle', c: 'Signaling', q: 1 },
          { n: 'Copies of important documents', c: 'Documents', q: 1 },
          { n: 'Cash in small bills', c: 'Supplies', q: 1 },
          { n: 'Battery-powered or hand-crank radio', c: 'Communication', q: 1 }
        ],
        recommended: [
          { n: 'Fire extinguisher (ABC rated)', c: 'Safety', q: 1 },
          { n: 'Smoke detectors (tested monthly)', c: 'Safety', q: 1 },
          { n: 'Carbon monoxide detector', c: 'Safety', q: 1 },
          { n: 'Manual can opener', c: 'Supplies', q: 1 },
          { n: 'Sanitation supplies (trash bags, moist towelettes)', c: 'Sanitation', q: 1 },
          { n: 'Local maps', c: 'Navigation', q: 1 },
          { n: 'Extra batteries (all sizes)', c: 'Supplies', q: 1 },
          { n: 'Prescription medications (7-day supply)', c: 'Medical', q: 1 }
        ],
        complete: [
          { n: 'Portable generator with fuel', c: 'Power', q: 1 },
          { n: 'Water purification tablets or filter', c: 'Sustenance', q: 1 },
          { n: 'Full trauma first aid kit', c: 'Medical', q: 1 },
          { n: 'Fire escape ladder (2+ stories)', c: 'Safety', q: 1 },
          { n: 'Multi-tool', c: 'Tools', q: 1 },
          { n: 'Gas shutoff wrench', c: 'Tools', q: 1 },
          { n: 'Heavy-duty work gloves', c: 'Protection', q: 1 },
          { n: 'Emergency food bars (5-year shelf life)', c: 'Sustenance', q: 1 },
          { n: 'Sleeping bags or warm bedding', c: 'Warmth', q: 1 },
          { n: 'Fireproof document safe', c: 'Documents', q: 1 }
        ]
      }
    },
    power: {
      name: 'Power Outage',
      icon: '\u26A1',
      items: {
        basic: [
          { n: 'Flashlight with extra batteries', c: 'Lighting', q: 1 },
          { n: 'Portable phone charger', c: 'Communication', q: 1 },
          { n: 'Water (1 gallon per person per day)', c: 'Sustenance', q: 1 },
          { n: 'Non-perishable food (3-day supply)', c: 'Sustenance', q: 1 },
          { n: 'First aid kit', c: 'Medical', q: 1 },
          { n: 'Emergency blankets', c: 'Warmth', q: 1 },
          { n: 'Cash in small bills', c: 'Supplies', q: 1 },
          { n: 'Battery-powered or hand-crank radio', c: 'Communication', q: 1 }
        ],
        recommended: [
          { n: 'Battery-powered lantern', c: 'Lighting', q: 1 },
          { n: 'Extra batteries (all sizes)', c: 'Supplies', q: 1 },
          { n: 'Extension cords', c: 'Power', q: 1 },
          { n: 'Cooler with ice packs', c: 'Sustenance', q: 1 },
          { n: 'Manual can opener', c: 'Supplies', q: 1 },
          { n: 'Sanitation supplies', c: 'Sanitation', q: 1 },
          { n: 'Matchbooks or lighters (waterproof)', c: 'Lighting', q: 1 },
          { n: 'Battery-powered fan', c: 'Comfort', q: 1 }
        ],
        complete: [
          { n: 'Portable generator with fuel supply', c: 'Power', q: 1 },
          { n: 'Portable power station / battery pack', c: 'Power', q: 1 },
          { n: 'Alternative heating source (propane heater)', c: 'Warmth', q: 1 },
          { n: 'Large water storage container', c: 'Sustenance', q: 1 },
          { n: 'Long-term food supply (freeze-dried)', c: 'Sustenance', q: 1 },
          { n: 'Solar phone charger', c: 'Power', q: 1 },
          { n: 'Whole-house surge protector', c: 'Power', q: 1 },
          { n: 'Carbon monoxide detector (battery backup)', c: 'Safety', q: 1 }
        ]
      }
    },
    winter: {
      name: 'Winter Storm',
      icon: '\u2744\uFE0F',
      items: {
        basic: [
          { n: 'Water (1 gallon per person per day)', c: 'Sustenance', q: 1 },
          { n: 'Non-perishable food (3-day supply)', c: 'Sustenance', q: 1 },
          { n: 'Flashlight with extra batteries', c: 'Lighting', q: 1 },
          { n: 'First aid kit', c: 'Medical', q: 1 },
          { n: 'Extra warm blankets', c: 'Warmth', q: 1 },
          { n: 'Portable phone charger', c: 'Communication', q: 1 },
          { n: 'Warm clothing layers', c: 'Warmth', q: 1 },
          { n: 'Emergency whistle', c: 'Signaling', q: 1 }
        ],
        recommended: [
          { n: 'Hand and toe warmers', c: 'Warmth', q: 2 },
          { n: 'Winter sleeping bag', c: 'Warmth', q: 1 },
          { n: 'Ice scraper and snow brush', c: 'Tools', q: 1 },
          { n: 'Sand or kitty litter for traction', c: 'Safety', q: 1 },
          { n: 'Battery-powered lantern', c: 'Lighting', q: 1 },
          { n: 'Extra warm clothing and socks', c: 'Warmth', q: 1 },
          { n: 'High-calorie food bars', c: 'Sustenance', q: 1 },
          { n: 'Thermos for hot drinks', c: 'Sustenance', q: 1 }
        ],
        complete: [
          { n: 'Portable generator', c: 'Power', q: 1 },
          { n: 'Propane or kerosene heater (indoor safe)', c: 'Warmth', q: 1 },
          { n: 'Water storage and purification', c: 'Sustenance', q: 1 },
          { n: 'Long-term food supply (freeze-dried)', c: 'Sustenance', q: 1 },
          { n: 'Snow shovel', c: 'Tools', q: 1 },
          { n: 'Emergency stove with fuel', c: 'Sustenance', q: 1 },
          { n: 'Collapsible water container', c: 'Sustenance', q: 1 },
          { n: 'Batteries (bulk supply)', c: 'Supplies', q: 1 }
        ]
      }
    },
    storm: {
      name: 'Severe Storm',
      icon: '\uD83C\uDF2A\uFE0F',
      items: {
        basic: [
          { n: 'Water (1 gallon per person per day)', c: 'Sustenance', q: 1 },
          { n: 'Non-perishable food (3-day supply)', c: 'Sustenance', q: 1 },
          { n: 'Flashlight with extra batteries', c: 'Lighting', q: 1 },
          { n: 'First aid kit', c: 'Medical', q: 1 },
          { n: 'Emergency whistle', c: 'Signaling', q: 1 },
          { n: 'Copies of important documents (waterproof bag)', c: 'Documents', q: 1 },
          { n: 'Cash in small bills', c: 'Supplies', q: 1 },
          { n: 'Battery-powered or hand-crank radio', c: 'Communication', q: 1 }
        ],
        recommended: [
          { n: 'Dust masks (N95)', c: 'Protection', q: 1 },
          { n: 'Duct tape', c: 'Supplies', q: 1 },
          { n: 'Plastic sheeting', c: 'Protection', q: 1 },
          { n: 'Wrench or pliers (turn off utilities)', c: 'Tools', q: 1 },
          { n: 'Sanitation supplies', c: 'Sanitation', q: 1 },
          { n: 'Emergency blankets', c: 'Warmth', q: 1 },
          { n: 'Local maps', c: 'Navigation', q: 1 },
          { n: 'Multi-tool', c: 'Tools', q: 1 }
        ],
        complete: [
          { n: 'Portable generator with fuel', c: 'Power', q: 1 },
          { n: 'Water purification system', c: 'Sustenance', q: 1 },
          { n: 'Long-term food supply', c: 'Sustenance', q: 1 },
          { n: 'Full tool kit', c: 'Tools', q: 1 },
          { n: 'Emergency shelter / tarp', c: 'Shelter', q: 1 },
          { n: 'Fire extinguisher (ABC rated)', c: 'Safety', q: 1 },
          { n: 'Battery backup for medical devices', c: 'Power', q: 1 },
          { n: 'Signaling mirror and flares', c: 'Signaling', q: 1 }
        ]
      }
    },
    fire: {
      name: 'Fire Emergency',
      icon: '\uD83D\uDD25',
      items: {
        basic: [
          { n: 'Fire extinguisher (ABC rated)', c: 'Safety', q: 1 },
          { n: 'Smoke detectors (tested monthly)', c: 'Safety', q: 1 },
          { n: 'Carbon monoxide detector', c: 'Safety', q: 1 },
          { n: 'Flashlight with extra batteries', c: 'Lighting', q: 1 },
          { n: 'First aid kit', c: 'Medical', q: 1 },
          { n: 'Emergency whistle', c: 'Signaling', q: 1 },
          { n: 'Copies of important documents', c: 'Documents', q: 1 },
          { n: 'Portable phone charger', c: 'Communication', q: 1 }
        ],
        recommended: [
          { n: 'Fire escape ladder (2+ stories)', c: 'Safety', q: 1 },
          { n: 'Fireproof document bag', c: 'Documents', q: 1 },
          { n: 'Escape hood or smoke mask', c: 'Protection', q: 1 },
          { n: 'Fire-resistant gloves', c: 'Protection', q: 1 },
          { n: 'Emergency blankets', c: 'Warmth', q: 1 },
          { n: 'Battery-powered radio', c: 'Communication', q: 1 },
          { n: 'Multi-tool', c: 'Tools', q: 1 },
          { n: 'Cash in small bills', c: 'Supplies', q: 1 }
        ],
        complete: [
          { n: 'Residential sprinkler system accessories', c: 'Safety', q: 1 },
          { n: 'Full trauma first aid kit', c: 'Medical', q: 1 },
          { n: 'Backup smoke detectors (battery)', c: 'Safety', q: 1 },
          { n: 'Gas shutoff wrench', c: 'Tools', q: 1 },
          { n: 'Fire-resistant safe', c: 'Documents', q: 1 },
          { n: 'Emergency escape ropes', c: 'Safety', q: 1 },
          { n: 'Water storage containers', c: 'Sustenance', q: 1 },
          { n: 'Emergency food supply (3-day)', c: 'Sustenance', q: 1 }
        ]
      }
    },
    travel: {
      name: 'Travel',
      icon: '\u2708\uFE0F',
      items: {
        basic: [
          { n: 'First aid kit', c: 'Medical', q: 1 },
          { n: 'Water (1 liter per person)', c: 'Sustenance', q: 1 },
          { n: 'Energy bars or snacks', c: 'Sustenance', q: 1 },
          { n: 'Flashlight or headlamp', c: 'Lighting', q: 1 },
          { n: 'Portable phone charger', c: 'Communication', q: 1 },
          { n: 'Copies of travel documents', c: 'Documents', q: 1 },
          { n: 'Emergency cash', c: 'Supplies', q: 1 },
          { n: 'Emergency blanket', c: 'Warmth', q: 1 }
        ],
        recommended: [
          { n: 'Multi-tool', c: 'Tools', q: 1 },
          { n: 'Emergency AM/FM radio', c: 'Communication', q: 1 },
          { n: 'Rain poncho', c: 'Protection', q: 1 },
          { n: 'Emergency whistle', c: 'Signaling', q: 1 },
          { n: 'Sanitation kit', c: 'Sanitation', q: 1 },
          { n: 'Local area maps', c: 'Navigation', q: 1 },
          { n: 'Travel-size medications', c: 'Medical', q: 1 },
          { n: 'Pen and notepad', c: 'Documentation', q: 1 }
        ],
        complete: [
          { n: 'Portable water filter', c: 'Sustenance', q: 1 },
          { n: 'Compact emergency shelter / bivy', c: 'Shelter', q: 1 },
          { n: 'Emergency signal flares', c: 'Signaling', q: 1 },
          { n: 'Satellite communicator or PLB', c: 'Communication', q: 1 },
          { n: 'Full tool kit (compact)', c: 'Tools', q: 1 },
          { n: 'Fire starter kit', c: 'Warmth', q: 1 },
          { n: 'Paracord (50 ft)', c: 'Supplies', q: 1 },
          { n: 'Water purification tablets', c: 'Sustenance', q: 1 }
        ]
      }
    },
    bugout: {
      name: 'Bug Out Bag',
      icon: '\uD83C\uDF92',
      items: {
        basic: [
          { n: 'Water (1 liter per person per day, 3-day supply)', c: 'Sustenance', q: 3 },
          { n: 'Non-perishable food (3-day supply)', c: 'Sustenance', q: 1 },
          { n: 'Flashlight with extra batteries', c: 'Lighting', q: 1 },
          { n: 'First aid kit', c: 'Medical', q: 1 },
          { n: 'Emergency blanket (mylar)', c: 'Warmth', q: 1 },
          { n: 'Portable phone charger', c: 'Communication', q: 1 },
          { n: 'Emergency whistle', c: 'Signaling', q: 1 },
          { n: 'Copies of important documents', c: 'Documents', q: 1 },
          { n: 'Cash in small bills', c: 'Supplies', q: 1 },
          { n: 'Change of clothes and sturdy shoes', c: 'Clothing', q: 1 }
        ],
        recommended: [
          { n: 'Multi-tool', c: 'Tools', q: 1 },
          { n: 'Fire starter (matches, lighter, ferro rod)', c: 'Warmth', q: 1 },
          { n: 'Water filter or purification tablets', c: 'Sustenance', q: 1 },
          { n: 'Paracord (50 ft)', c: 'Supplies', q: 1 },
          { n: 'Tarp or emergency shelter', c: 'Shelter', q: 1 },
          { n: 'Rain poncho', c: 'Protection', q: 1 },
          { n: 'Compass', c: 'Navigation', q: 1 },
          { n: 'Sanitation supplies', c: 'Sanitation', q: 1 }
        ],
        complete: [
          { n: 'Compact tent', c: 'Shelter', q: 1 },
          { n: 'Sleeping bag (rated for lowest expected temp)', c: 'Warmth', q: 1 },
          { n: 'Portable camp stove with fuel', c: 'Sustenance', q: 1 },
          { n: 'Full water purification system', c: 'Sustenance', q: 1 },
          { n: 'Full tool kit (compact)', c: 'Tools', q: 1 },
          { n: 'Emergency AM/FM/NOAA radio', c: 'Communication', q: 1 },
          { n: 'Signal mirror and road flares', c: 'Signaling', q: 1 },
          { n: 'Duct tape and zip ties', c: 'Supplies', q: 1 }
        ]
      }
    }
  };

  var householdMultipliers = {
    adults: { water: 1, food: 1, blankets: 0.5, clothing: 0.5 },
    children: { water: 0.75, food: 0.75, blankets: 0.5, clothing: 0.5 },
    pets: { water: 0.5, food: 1, blankets: 0.25, supplies: 1 }
  };

  // ========================================
  // STATE
  // ========================================
  var state = {
    step: 1,
    type: null,
    adults: 1,
    children: 0,
    pets: 0,
    priority: 'recommended',
    checklist: [],
    checked: {}
  };

  // ========================================
  // DOM HELPERS
  // ========================================
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  // ========================================
  // STEP NAVIGATION
  // ========================================
  function showStep(n) {
    state.step = n;
    $$('.builder-step').forEach(function(s, i) {
      s.style.display = (i + 1 === n) ? 'block' : 'none';
    });
    $$('.step-indicator').forEach(function(s, i) {
      s.classList.toggle('active', i + 1 === n);
      s.classList.toggle('completed', i + 1 < n);
    });
    if (n === 4) {
      updateSummary();
    }
    var el = document.getElementById('builderSteps');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateSummary() {
    var summary = document.getElementById('summaryType');
    var sh = document.getElementById('summaryHousehold');
    var sp = document.getElementById('summaryPriority');
    if (summary) summary.textContent = state.type ? kitData[state.type].name : 'Not selected';
    if (sh) {
      var parts = [];
      if (state.adults > 0) parts.push(state.adults + ' adult' + (state.adults > 1 ? 's' : ''));
      if (state.children > 0) parts.push(state.children + ' child' + (state.children > 1 ? 'ren' : ''));
      if (state.pets > 0) parts.push(state.pets + ' pet' + (state.pets > 1 ? 's' : ''));
      sh.textContent = parts.join(', ') || 'Not set';
    }
    if (sp) sp.textContent = state.priority.charAt(0).toUpperCase() + state.priority.slice(1);
  }

  // ========================================
  // CHECKLIST GENERATION
  // ========================================
  function generateChecklist() {
    if (!state.type) return;
    var data = kitData[state.type];
    var items = [];

    items = items.concat(data.items.basic);
    if (state.priority === 'recommended' || state.priority === 'complete') {
      items = items.concat(data.items.recommended);
    }
    if (state.priority === 'complete') {
      items = items.concat(data.items.complete);
    }

    items.forEach(function(item) {
      var qty = Math.max(1, Math.round(item.q * getMultiplier(item.c)));
      item.quantity = qty;
    });

    state.checklist = items;
    state.checked = {};
    renderChecklist();
  }

  function getMultiplier(category) {
    var cat = category.toLowerCase();
    var total = state.adults + state.children + state.pets;
    if (cat === 'sustenance' || cat === 'water') return total;
    if (cat === 'warmth' || cat === 'clothing') return total;
    if (cat === 'protection' && state.pets > 0) return total + state.pets * 0.5;
    return total;
  }

  function renderChecklist() {
    var container = document.getElementById('resultContainer');
    var resultSection = document.getElementById('resultSection');
    if (!container || !resultSection) return;

    resultSection.style.display = 'block';

    var html = '';
    html += '<div class="builder-result-header">';
    html += '<h2 class="builder-result-title">' + kitData[state.type].icon + ' ' + kitData[state.type].name + ' Kit</h2>';
    html += '<div class="builder-result-meta">';
    html += '<span id="progressText">0 / ' + state.checklist.length + ' items</span>';
    html += '<span id="progressPct">0% complete</span>';
    html += '</div>';
    html += '</div>';

    html += '<div class="builder-progress-bar-wrap"><div class="builder-progress-bar" id="progressBar" style="width:0%"></div></div>';

    var categories = {};
    state.checklist.forEach(function(item, i) {
      if (!categories[item.c]) categories[item.c] = [];
      categories[item.c].push({ item: item, index: i });
    });

    Object.keys(categories).sort().forEach(function(cat) {
      html += '<div class="builder-category">';
      html += '<h3 class="builder-category-title">' + cat + '</h3>';
      categories[cat].forEach(function(entry) {
        var item = entry.item;
        var idx = entry.index;
        var qtyStr = item.quantity > 1 ? ' x' + item.quantity : '';
        html += '<label class="builder-item" data-index="' + idx + '">';
        html += '<input type="checkbox" class="builder-checkbox" data-index="' + idx + '">';
        html += '<span class="builder-checkmark"></span>';
        html += '<span class="builder-item-name">' + item.n + qtyStr + '</span>';
        html += '</label>';
      });
      html += '</div>';
    });

    html += '<div class="builder-actions">';
    html += '<button class="btn btn-primary builder-action-btn" id="printChecklist">';
    html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>';
    html += ' Print Checklist</button>';
    html += '<button class="btn btn-primary builder-action-btn" id="copyChecklist">';
    html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
    html += ' Copy Checklist</button>';
    html += '<button class="btn btn-primary builder-action-btn" id="resetBuilder">';
    html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>';
    html += ' Reset Builder</button>';
    html += '</div>';

    container.innerHTML = html;

    $$('.builder-checkbox').forEach(function(cb) {
      cb.addEventListener('change', function() {
        var idx = this.getAttribute('data-index');
        state.checked[idx] = this.checked;
        updateProgress();
      });
    });

    var printBtn = document.getElementById('printChecklist');
    var copyBtn = document.getElementById('copyChecklist');
    var resetBtn = document.getElementById('resetBuilder');

    if (printBtn) printBtn.addEventListener('click', function() { window.print(); });
    if (copyBtn) copyBtn.addEventListener('click', copyChecklist);
    if (resetBtn) resetBtn.addEventListener('click', resetBuilder);

    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateProgress() {
    var total = state.checklist.length;
    var checked = Object.values(state.checked).filter(Boolean).length;
    var pct = total > 0 ? Math.round((checked / total) * 100) : 0;

    var bar = document.getElementById('progressBar');
    var text = document.getElementById('progressText');
    var pctEl = document.getElementById('progressPct');

    if (bar) bar.style.width = pct + '%';
    if (text) text.textContent = checked + ' / ' + total + ' items';
    if (pctEl) pctEl.textContent = pct + '% complete';

    $$('.builder-item').forEach(function(item) {
      var idx = item.getAttribute('data-index');
      item.classList.toggle('checked', !!state.checked[idx]);
    });
  }

  function copyChecklist() {
    var lines = [kitData[state.type].name + ' Kit', 'Household: ' + state.adults + ' adults, ' + state.children + ' children, ' + state.pets + ' pets', 'Priority: ' + state.priority, '', ''];
    var categories = {};
    state.checklist.forEach(function(item) {
      if (!categories[item.c]) categories[item.c] = [];
      categories[item.c].push(item);
    });
    Object.keys(categories).sort().forEach(function(cat) {
      lines.push('--- ' + cat + ' ---');
      categories[cat].forEach(function(item) {
        var qty = item.quantity > 1 ? ' x' + item.quantity : '';
        var check = state.checked[state.checklist.indexOf(item)] ? '[x]' : '[ ]';
        lines.push(check + ' ' + item.n + qty);
      });
      lines.push('');
    });
    lines.push('Generated by EmergencyKitGuide.com');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lines.join('\n')).then(function() {
        showToast('Checklist copied to clipboard');
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = lines.join('\n');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Checklist copied to clipboard');
    }
  }

  function resetBuilder() {
    state.step = 1;
    state.type = null;
    state.adults = 1;
    state.children = 0;
    state.pets = 0;
    state.priority = 'recommended';
    state.checklist = [];
    state.checked = {};

    $$('.builder-type-card').forEach(function(c) { c.classList.remove('selected'); });
    $$('.priority-card').forEach(function(c) { c.classList.remove('selected'); });

    var adultEl = document.getElementById('adults');
    var childEl = document.getElementById('children');
    var petEl = document.getElementById('pets');
    if (adultEl) adultEl.textContent = '1';
    if (childEl) childEl.textContent = '0';
    if (petEl) petEl.textContent = '0';

    var resultSection = document.getElementById('resultSection');
    if (resultSection) resultSection.style.display = 'none';

    showStep(1);
  }

  // ========================================
  // TOAST
  // ========================================
  function showToast(msg) {
    var container = document.getElementById('toastContainer');
    if (!container) return;
    var toast = document.createElement('div');
    toast.className = 'toast success';
    toast.innerHTML = '<div class="toast-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>' + msg;
    container.appendChild(toast);
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { toast.classList.add('show'); });
    });
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
  }

  // ========================================
  // INIT
  // ========================================
  function init() {
    // Step 1: Type selection
    $$('.builder-type-card').forEach(function(card) {
      card.addEventListener('click', function() {
        $$('.builder-type-card').forEach(function(c) { c.classList.remove('selected'); });
        card.classList.add('selected');
        state.type = card.getAttribute('data-type');
      });
    });

    // Step 2: Counter buttons
    function setupCounter(id, key, min) {
      var el = document.getElementById(id);
      if (!el) return;
      var minusBtn = el.parentElement.querySelector('.counter-minus');
      var plusBtn = el.parentElement.querySelector('.counter-plus');
      if (minusBtn) minusBtn.addEventListener('click', function() {
        if (state[key] > min) {
          state[key]--;
          el.textContent = state[key];
        }
      });
      if (plusBtn) plusBtn.addEventListener('click', function() {
        if (state[key] < 20) {
          state[key]++;
          el.textContent = state[key];
        }
      });
    }
    setupCounter('adults', 'adults', 1);
    setupCounter('children', 'children', 0);
    setupCounter('pets', 'pets', 0);

    // Step 3: Priority selection
    $$('.priority-card').forEach(function(card) {
      card.addEventListener('click', function() {
        $$('.priority-card').forEach(function(c) { c.classList.remove('selected'); });
        card.classList.add('selected');
        state.priority = card.getAttribute('data-priority');
      });
    });

    // Navigation buttons
    var next1 = document.getElementById('nextStep1');
    var next2 = document.getElementById('nextStep2');
    var next3 = document.getElementById('nextStep3');
    var prev2 = document.getElementById('prevStep2');
    var prev3 = document.getElementById('prevStep3');
    var prev4 = document.getElementById('prevStep4');
    var generateBtn = document.getElementById('generateBtn');

    if (next1) next1.addEventListener('click', function() {
      if (!state.type) {
        showToast('Please select an emergency type');
        return;
      }
      showStep(2);
    });
    if (next2) next2.addEventListener('click', function() { showStep(3); });
    if (next3) next3.addEventListener('click', function() { showStep(4); });
    if (prev2) prev2.addEventListener('click', function() { showStep(1); });
    if (prev3) prev3.addEventListener('click', function() { showStep(2); });
    if (prev4) prev4.addEventListener('click', function() { showStep(3); });
    if (generateBtn) generateBtn.addEventListener('click', function() {
      generateChecklist();
    });

    // Default priority selection
    var recCard = document.querySelector('.priority-card[data-priority="recommended"]');
    if (recCard) recCard.classList.add('selected');

    showStep(1);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
