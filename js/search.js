// Search data structure to hold all searchable content
const searchableContent = {
    pages: [
        {
            title: "Solar Power Projects",
            url: "solar-projects-case-study.html",
            content: "575 MW Portfolio Implementation. Ground mount and rooftop solar projects across multiple states. Comprehensive development and implementation of solar power projects.",
            type: "Case Study",
            tags: ["Solar Energy", "Implementation", "Renewable Energy"]
        },
        {
            title: "CDM Project",
            url: "cdm-case-study.html",
            content: "45% Carbon Reduction Achievement. Clean Development Mechanism project implementation. Carbon emission reduction through sustainable practices.",
            type: "Case Study",
            tags: ["Clean Development", "Carbon Reduction", "Sustainability"]
        },
        {
            title: "AI Readiness Study",
            url: "ai-readiness-case-study.html",
            content: "Digital Transformation Strategy. AI implementation and readiness assessment for organizations.",
            type: "Case Study",
            tags: ["AI", "Digital Transformation", "Technology"]
        },
        {
            title: "Digital Marketing Analysis",
            url: "digital-marketing-case-study.html",
            content: "Performance Marketing Analysis. Digital branding and promotional strategy development.",
            type: "Case Study",
            tags: ["Digital Marketing", "Branding", "Strategy"]
        },
        {
            title: "Misleading Ads Study",
            url: "misleading-ads-case-study.html",
            content: "Consumer Protection Research. National framework for regulating misleading advertisements.",
            type: "Case Study",
            tags: ["Consumer Protection", "Regulation", "Advertising"]
        },
        {
            title: "International Projects",
            url: "international-projects-case-study.html",
            content: "Global Clean Energy Implementation. International renewable energy projects and implementations.",
            type: "Case Study",
            tags: ["International", "Renewable Energy", "Implementation"]
        },
        {
            title: "Newsletter",
            url: "newsletter.html",
            content: "Weekly insights and updates in renewable energy. Latest developments in sustainable power.",
            type: "Newsletter",
            tags: ["Updates", "Insights", "Weekly"]
        },
        {
            title: "About Us",
            url: "about.html",
            content: "Learn about Romilu Consulting LLP and our mission in renewable energy consulting.",
            type: "Company",
            tags: ["Company", "Mission", "Team"]
        },
        {
            title: "Work with Us",
            url: "work-with-us.html",
            content: "Partner with India's leading renewable energy and policy consultants.",
            type: "Company",
            tags: ["Careers", "Partnership", "Consultation"]
        }
    ]
};

// Search function
function searchContent(query) {
    if (!query) return [];
    
    query = query.toLowerCase();
    return searchableContent.pages.filter(page => {
        const titleMatch = page.title.toLowerCase().includes(query);
        const contentMatch = page.content.toLowerCase().includes(query);
        const tagMatch = page.tags.some(tag => tag.toLowerCase().includes(query));
        
        return titleMatch || contentMatch || tagMatch;
    });
}

// Handle search input
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    document.querySelector('.search-bar').appendChild(searchResults);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const results = searchContent(query);
        
        if (!query) {
            searchResults.style.display = 'none';
            return;
        }

        searchResults.innerHTML = results.length ? results.map(result => `
            <a href="${result.url}" class="search-result-item">
                <div class="result-type">${result.type}</div>
                <h3>${result.title}</h3>
                <p>${result.content.substring(0, 100)}...</p>
                <div class="result-tags">
                    ${result.tags.map(tag => `<span class="result-tag">${tag}</span>`).join('')}
                </div>
            </a>
        `).join('') : '<div class="no-results">No results found</div>';
        
        searchResults.style.display = 'block';
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar')) {
            searchResults.style.display = 'none';
        }
    });
}); 