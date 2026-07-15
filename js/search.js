(function() {
  'use strict';

  var searchOverlay = document.getElementById('searchOverlay');
  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  var searchBtn = document.getElementById('searchBtn');
  var activeSearchIndex = -1;

  if (!searchOverlay || !searchInput || !searchResults) return;

  var data = typeof EKG_SEARCH_DATA !== 'undefined' ? EKG_SEARCH_DATA : [];

  function openSearch() {
    searchOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function() { searchInput.focus(); }, 100);
  }

  function closeSearch() {
    searchOverlay.classList.remove('open');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
    activeSearchIndex = -1;
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);

  searchOverlay.addEventListener('click', function(e) {
    if (e.target === searchOverlay) closeSearch();
  });

  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && searchOverlay.classList.contains('open')) {
      closeSearch();
    }
  });

  var searchDebounce;
  searchInput.addEventListener('input', function() {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(function() { performSearch(searchInput.value); }, 150);
  });

  searchInput.addEventListener('keydown', function(e) {
    var items = searchResults.querySelectorAll('.search-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeSearchIndex = Math.min(activeSearchIndex + 1, items.length - 1);
      updateActiveItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeSearchIndex = Math.max(activeSearchIndex - 1, -1);
      updateActiveItem(items);
    } else if (e.key === 'Enter' && activeSearchIndex >= 0 && items[activeSearchIndex]) {
      e.preventDefault();
      window.location.href = items[activeSearchIndex].getAttribute('href');
    }
  });

  function updateActiveItem(items) {
    items.forEach(function(item, i) {
      item.classList.toggle('active', i === activeSearchIndex);
    });
    if (activeSearchIndex >= 0 && items[activeSearchIndex]) {
      items[activeSearchIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  function performSearch(query) {
    activeSearchIndex = -1;
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    var q = query.toLowerCase();
    var matches = data.filter(function(item) {
      return item.title.toLowerCase().indexOf(q) !== -1 || item.desc.toLowerCase().indexOf(q) !== -1;
    });

    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">No results found for "' + query + '"</div>';
      return;
    }

    var grouped = {};
    matches.forEach(function(item) {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });

    var html = '';
    Object.keys(grouped).forEach(function(cat) {
      html += '<div class="search-category-label">' + cat + '</div>';
      grouped[cat].forEach(function(item) {
        html += '<a href="' + item.url + '" class="search-result-item">' +
          '<div class="search-result-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>' +
          '<div class="search-result-text"><div class="search-result-title">' + item.title +
          '</div><div class="search-result-desc">' + item.desc + '</div></div></a>';
      });
    });

    searchResults.innerHTML = html;
    activeSearchIndex = -1;
  }
})();