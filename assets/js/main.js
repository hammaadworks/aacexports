// State
let state = {
  products: [],
  filteredProducts: [],
  currentPage: 1,
  itemsPerPage: 8,
  searchQuery: '',
  activeCategory: 'All',
  filters: {
    category: 'All'
  }
};

// DOM Elements
const dom = {
  productGrid: document.getElementById('productGrid'),
  searchInput: document.getElementById('searchInput'),
  categoryFilters: document.getElementById('categoryFilters'),
  resultCount: document.getElementById('resultCount'),
  prevPageBtn: document.getElementById('prevPageBtn'),
  nextPageBtn: document.getElementById('nextPageBtn'),
  pageIndicator: document.getElementById('pageIndicator'),
  emptyState: document.getElementById('emptyState'),
};

// Initialize
async function init() {
  try {
    const response = await fetch('assets/data/products.json');
    if (!response.ok) throw new Error('Failed to load products');
    const products = await response.json();
    
    state.products = products;
    state.filteredProducts = products;
    
    renderCategories();
    renderProducts();
    updatePaginationControls();
    setupEventListeners();
  } catch (error) {
    console.error(error);
    dom.productGrid.innerHTML = `<div class="col-span-full text-center text-red-400 p-8">Error loading catalog. Please try again later.</div>`;
  }
}

// Render Functions
function renderCategories() {
  // Extract unique categories
  const categories = ['All', ...new Set(state.products.map(p => p.category))].sort();
  
  dom.categoryFilters.innerHTML = categories.map(cat => `
    <button 
      class="w-full text-left px-3 py-2 rounded-md text-sm transition-all flex items-center justify-between group ${state.activeCategory === cat ? 'bg-white/10 text-white font-medium' : 'text-zinc-400 hover:text-white hover:bg-white/5'}"
      data-category="${cat}"
    >
      ${cat}
      ${state.activeCategory === cat ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>' : ''}
    </button>
  `).join('');
}

function renderProducts() {
  const start = (state.currentPage - 1) * state.itemsPerPage;
  const end = start + state.itemsPerPage;
  const pageItems = state.filteredProducts.slice(start, end);

  dom.resultCount.innerText = state.filteredProducts.length;

  if (pageItems.length === 0) {
    dom.productGrid.innerHTML = '';
    dom.emptyState.classList.remove('hidden');
    return;
  }

  dom.emptyState.classList.add('hidden');
  
  dom.productGrid.innerHTML = pageItems.map(product => `
    <div class="product-card group relative bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden flex flex-col h-[320px]">
      
      <!-- Image Area (Placeholder Gradient) -->
      <div class="h-48 bg-gradient-to-br ${product.image_placeholder_color} relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500"></div>
        <div class="absolute bottom-3 left-3">
           <span class="text-[10px] font-bold uppercase tracking-wider text-white/80 bg-black/30 backdrop-blur-md px-2 py-1 rounded border border-white/10">
             ${product.category}
           </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-5 flex flex-col flex-1 bg-zinc-900/90 backdrop-blur-xl">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-white font-serif text-lg leading-tight group-hover:text-emerald-400 transition-colors">${product.name}</h3>
        </div>
        <p class="text-xs text-zinc-500 line-clamp-2 mb-4">${product.description}</p>
        
        <div class="mt-auto flex items-center justify-between border-t border-white/5 pt-3">
          <span class="text-xs text-zinc-400 font-mono">${product.finish}</span>
          <button class="text-xs font-medium text-white hover:text-emerald-400 transition-colors flex items-center gap-1">
            Details 
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Logic
function filterProducts() {
  let temp = state.products;

  // 1. Category Filter
  if (state.activeCategory !== 'All') {
    temp = temp.filter(p => p.category === state.activeCategory);
  }

  // 2. Search Filter
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    temp = temp.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  state.filteredProducts = temp;
  state.currentPage = 1; // Reset to first page on filter change
  renderProducts();
  updatePaginationControls();
}

function updatePaginationControls() {
  const totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);
  
  dom.pageIndicator.innerText = `${state.currentPage} / ${totalPages || 1}`;
  
  dom.prevPageBtn.disabled = state.currentPage === 1;
  dom.nextPageBtn.disabled = state.currentPage === totalPages || totalPages === 0;
}

// Event Listeners
function setupEventListeners() {
  // Search
  dom.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    filterProducts();
  });

  // Category Selection
  dom.categoryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    
    state.activeCategory = btn.dataset.category;
    renderCategories(); // Re-render to show active state
    filterProducts();
  });

  // Pagination
  dom.prevPageBtn.addEventListener('click', () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      renderProducts();
      updatePaginationControls();
    }
  });

  dom.nextPageBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);
    if (state.currentPage < totalPages) {
      state.currentPage++;
      renderProducts();
      updatePaginationControls();
    }
  });
}

// Start
document.addEventListener('DOMContentLoaded', init);
